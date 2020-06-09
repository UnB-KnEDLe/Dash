from dodfminer import ContentExtractor
from dodfminer import Regex
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

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

correct_names = {
    'aposentadoria': 'Aposentadoria',
    'reversoes': 'Reversões',
    'nomeacao': 'Nomeação',
    'exoneracao': 'Exoneração',
    'abono': 'Abono'
}

style_table={
    'max-height': '400',
    'overflowY': 'scroll',
    'width': '100%'
}

app.layout = html.Div([
    dcc.Upload(
        id='upload-data',
        children=html.Div([
            'Arraste e solte um DODF ou ',
            html.A('Selecione no seu Computador')
        ]),
        style={
            'width': '100%',
            'height': '60px',
            'lineHeight': '60px',
            'borderWidth': '1px',
            'borderStyle': 'dashed',
            'borderRadius': '5px',
            'textAlign': 'center',
            'margin': '10px'
        },
        # Allow multiple files to be uploaded
        multiple=True
    ),
    html.Div(id='output-data-upload'),
], style={'margin': 50})


def parse_contents(contents, filename, date):
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

            acts_dfs = Regex.get_all_df('tmp_txt.txt')

    except Exception as e:
        print(e)
        return html.Div([
            'There was an error processing this file.'
        ])

    list_of_tables = []
    for act_name in acts_dfs:
        df = acts_dfs[act_name]
        df.to_csv(act_name + ".csv", index=False)
        download_button = html.Div([
            html.A(id='download', children="Download CSV", href=f"/{act_name}")
        ]) if df.shape[0] > 0 else None 
        list_of_tables.append(\
            html.Div([
                html.H5(correct_names[act_name], style={'fontWeight': 'Bold'}),
                html.H6("Ocorrências no PDF: " + str(df.shape[0])),

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
                        'overflowX': 'auto'
                    }
                ),
                download_button,
                html.Hr()  # horizontal line
            ])\
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
    return flask.send_file(file+".csv")

if __name__ == '__main__':
    app.run_server(host='0.0.0.0', debug=True)