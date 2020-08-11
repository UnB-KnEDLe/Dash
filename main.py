from dodfminer.extract.pure.core import ContentExtractor
from dodfminer.extract.polished.core import ActsExtractor
import base64
from base64 import b64decode
import datetime
import io

import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import dash_table

import flask

import pandas as pd

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__)

correct_names = {
    'aposentadoria': 'APOSENTADORIA',
    'reversoes': 'REVERSÕES',
    'nomeacao': 'NOMEAÇÃO',
    'exoneracao': 'EXONERAÇÃO',
    'retificacoes': 'RETIFICAÇÃO',
    'substituicao': 'SUBSTITUIÇÃO',
    'abono': 'ABONO',
    'cessoes': 'CESSÕES',
    'sem_efeito_aposentadoria': 'SEM EFEITO APOSENTADORIA',
    'efetivos_nome': 'EFETIVOS NOME',
    'efetivos_exo': 'EFETIVOS EXO'
}

app.layout = html.Div([
    html.Link(href="https://fonts.googleapis.com/css2?family=Raleway&display=swap", rel="stylesheet"),
    html.Div([
        html.Div([
            html.H1('Extrator de PDF', className='card-title'),
            html.H2('Extrator de dados do diário oficial do DF', className='card-subtitle'),
            dcc.Upload(
                id='upload-data',
                children=html.Div([
                    html.Img(src='assets/img/file.svg', className='card-logo-pdf'),
                    html.H3('Arraste e solte o PDF aqui', className='text-pdf'),
                    html.Button('Selecione no seu Computador', className='choose-button')
                ], className='card-pdf-box'),
                # Allow multiple files to be uploaded
                multiple=True
            ),
        ], className='card'),
        html.Div(id='output-data-upload'),], className='row'),
    html.Img(src='assets/img/undraw_reviewed_docs_neeb 1.svg', className='background-img'),
])


def parse_contents(contents, filename, date):
    global df_dict
    content_type, content_string = contents.split(',')

    content = b64decode(content_string, validate=True)
    try:
        if 'pdf' in filename:
            temp_file = open('tmp_file.pdf', 'wb')
            temp_txt = open('tmp_txt.txt', 'w+')
            temp_file.write(content)
            text = ContentExtractor.extract_text('tmp_file.pdf')
            temp_txt.write(text)
            temp_txt.close()

            acts_dfs = ActsExtractor.get_all_df('tmp_txt.txt', 'regex')

    except Exception as e:
        print(e)
        return html.Div([
            'There was an error processing this file.'
        ])

    list_of_tables = []
    for act_name in acts_dfs:
        df = acts_dfs[act_name]
        df.to_csv(act_name + ".csv", index=False, mode='w+')
        download_button = html.Div([
            html.A(id='download', children="Download CSV", href=f"/{act_name}")
        ]) if df.shape[0] > 0 else None 
        list_of_tables.append(\
            html.Div([
                html.H2(correct_names[act_name], className='text-act'),
                html.H4("Ocorrências no PDF: " + str(df.shape[0]), className='text-ocu'),

                dash_table.DataTable(
                    data=df.to_dict('records'),
                    columns=[{'name': i, 'id': i} for i in df.columns],
                    style_cell={
                        'overflow': 'hidden',
                        'textOverflow': 'ellipsis',
                        'maxWidth': '50px',
                        'height':'auto'
                    }, 
                    style_table={
                        'maxHeight': '700px',
                        'overflowY': 'scroll',
                        'overflowX': 'auto',
                        'marginBottom': '40px'
                    }
                ),
                download_button,
            ], className='card-csv')\
        )

    return html.Div(list_of_tables)

@app.callback(Output('output-data-upload', 'children'),
              [Input('upload-data', 'contents')],
              [State('upload-data', 'filename'),
               State('upload-data', 'last_modified')])
def update_output(list_of_contents, list_of_names, list_of_dates):
    if list_of_contents is not None:
        children = [
            parse_contents(c, n, d) for c, n, d in
            zip(list_of_contents, list_of_names, list_of_dates)]
        return children

@app.server.route('/<file>')
def serve_static(file):
    print(file)
    return flask.send_file(file + ".csv", cache_timeout=1, attachment_filename=file+'.csv')

if __name__ == '__main__':
    app.run_server(host='0.0.0.0', debug=False)
    cache = Cache(app.server, config={
        'CACHE_TYPE': 'simple'
    })

    cache.clear()