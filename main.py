from logging import disable, info
from dodfminer.extract.pure.core import ContentExtractor
from dodfminer.extract.polished.core import ActsExtractor
import base64
from base64 import b64decode
import datetime
import io
import sys

import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import dash_table

import flask
from numpy import int0

import pandas as pd



app = dash.Dash(__name__, external_stylesheets = ['https://bootswatch.com/3/darkly/bootstrap.css'])

cores = ['#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b','#28415b',]


Listas = []*4
list_of_tables = []*11
print("------------")
print(Listas)
print("------------")



correct_names = {
    'aposentadoria': 'APOSENTADORIA',
    'reversoes': 'REVERSÕES',
    'nomeacao': 'NOMEAÇÃO',
    'exoneracao': 'EXONERAÇÃO',
    'abono': 'ABONO',
    'retificacoes': 'RETIFICAÇÃO',
    'substituicao': 'SUBSTITUIÇÃO',
    'efetivos_nome': 'EFETIVOS NOME',
    'efetivos_exo': 'EFETIVOS EXO',
    'sem_efeito_aposentadoria': 'SEM EFEITO APOSENTADORIA',
    'cessoes': 'CESSÕES'
}

white_button_style = {'backgroundColor': 'white',
                      'color': 'black',
                      'height': '80px',
                      'width': '150px',
                      'borderRadius': '40px',
                      'marginLeft': '2rem',
                      'marginBottom': '2rem'
                      }

red_button_style = {'backgroundColor': '#6C63FF',
                    'color': 'black',
                    'height': '80px',
                    'width': '150px',
                    'borderRadius': '40px',
                    'marginLeft': '2rem',
                    'marginBottom': '2rem'
                    }

tabs_styles = {
    'height': '55px',
    'maxWidth': 'max-content',
    'marginTop': '65px'
}

tab_style = {
    'fontWeight': 'bold',
    'margin': '3px',
    'fontFamily' :'system-ui',
    'color': 'black',
    'minHeight': '79px',
    'borderRadius': '15px'
    #'padding': '21px'
}

tab_selected_style = {
    'backgroundColor': 'rgb(109 102 254)',
    'color': 'white',
    'margin': '3px',
    'fontFamily' :'system-ui',
    'minHeight': '79px',
    'fontWeight': 'bold',
    'borderRadius': '15px'
    #'padding': '0px'
}

card_style = {
    'width': '90%',
    'padding': '30px',
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'background': '#FFFFFF',
    'boxShadow': '0px 4px 4px rgb(0 0 0 / 25%)',
    'borderRadius': '20px',
    'marginBottom': '30px',
    'marginTop': '38px',
    'color': 'black'
}

dash_style = {
    'backgroundColor': '#a2a0cf'
}

dash_style0 = {
    'backgroundColor': '#a2a0cf',
    # 'visibility': 'hidden'
}
graph1_style = {
    'backgroundColor': '#9694bd',
    'borderRadius': '56px',
    'margin': '22px 0px 0px 0px',
    'padding': '8px'
}

graph2_style = {
    'backgroundColor': '#9694bd',
    'borderRadius': '56px',
    'margin': '22px 0px 0px 22px',
    'padding': '8px',
    'width': '65%',
    'float': 'right'
}

background_img_style = {
    "position": "relative",
    "width": "624px",
    "height": "395px",
    "left": "50%",
    "marginTop": "35px",
}

app.layout = html.Div([
    html.Link(href="https://fonts.googleapis.com/css2?family=Raleway&display=swap", rel="stylesheet"),
    html.Div([
        html.Div([
            html.H1('Extrator de PDF', className='card-title'),
            html.H2('Extrator de dados do diário oficial do DF', className='card-subtitle'),
            html.H2('Selecione a forma de extração', className='card-subtitle'),
            html.Div(id='type-extraction', style={'display': 'none'}),
            html.Div([
                html.Button('NER', id='ia-btn', n_clicks=0, style=white_button_style),
                html.Button('REGEX', id='regex-btn', n_clicks=0, style=white_button_style)
            ], style={'textAlign': 'center'}),
            html.Div([]),
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
        html.Div(id='output-data-upload'),
        ], className='row'),

    html.Img(src='assets/img/undraw_reviewed_docs_neeb 1.svg', style=background_img_style),
], className='col-xs-12')

@app.callback([Output('ia-btn', 'style'), 
              Output('regex-btn', 'style'),
              Output('type-extraction', 'children')], 
              [Input('ia-btn', 'n_clicks'), 
              Input('regex-btn', 'n_clicks')])
def change_button_style(n_clicks1, n_clicks2):      
    changed_id = [p['prop_id'] for p in dash.callback_context.triggered][0]
    if 'ia-btn' in changed_id:
        return [red_button_style, white_button_style, 'ner']
    elif 'regex-btn' in changed_id:
        return [white_button_style, red_button_style, 'regex']
    else:
        return [white_button_style, red_button_style, 'regex']

def parse_contents(contents, filename, date, type_extraction):
    global df_dict
    content_type, content_string = contents.split(',')

    content = b64decode(content_string, validate=True)
    # try:
    if 'pdf' in filename:
        temp_file = open('tmp_file.pdf', 'wb')
        temp_txt = open('tmp_txt.txt', 'w+')
        temp_file.write(content)
        text = ContentExtractor.extract_text('tmp_file.pdf')
        temp_txt.write(text)
        temp_txt.close()

        acts_dfs = ActsExtractor.get_all_df('tmp_txt.txt', type_extraction)

    # except Exception as e:
    #     print(e)
    #     return html.Div([
    #         'There was an error processing this file.'
    #     ])

    list_of_tables = []*11
    all_dfs = []
    for act_name in acts_dfs:
        df = acts_dfs[act_name]
        all_dfs.append(df)
        df.to_csv(act_name + ".csv", index=False, mode='w+')
        download_button = html.Div([
            html.A(id='download', children="Download CSV", href=f"/{act_name}")
        ]) if df.shape[0] > 0 else None
        list_of_tables.append(\
            html.Div([
                html.H2(correct_names[act_name], className='text-act'),
                html.H4("Ocorrências no PDF: " + str(df.shape[0]), className='text-ocu', style={"margin": "25px"}),
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
            ], style=card_style)\
        )

    names_acts = []
    qtt_acts = []
    entity_names_occurrences = []

    for name in correct_names.keys():
        names_acts.append(name)

    for dff in all_dfs:
        qtt_acts.append(dff.shape[0])

    for dff in all_dfs:
        entity_for_act = []
        dict_ = {}
        for col in dff.columns:
            if col != "tipo_ato" and col != "Tipo do Ato" and col != "Tipo do ato":
                dict_[col] = dff[col].count()
        entity_names_occurrences.append(dict_)
    
    return html.Div([

    html.Div([
        html.Div([
            dcc.Graph(
                id='graphOne',
                figure={
                    'data': [{
                        'x': names_acts, 'y': qtt_acts, 'type': 'bar',
                        'marker': {'color': cores},
                        'name': 'Produtos'
                    }],
                    'layout': {
                        'title': 'Ocorrências de cada ato ',
                        'showlegend': False,
                        'showgrid': False,
                        # background transparent
                        'plot_bgcolor': 'rgba(0,0,0,0)',
                        'paper_bgcolor': 'rgba(0,0,0,0)',
                        'font': {'color': 'white'}
                    }
                }
            )
        ],className='col-xs-4', style=graph1_style),

         html.Div([
            dcc.Graph(
                id='graphTwo',
                figure={
                    'data': [
                        {'x': list(entity_names_occurrences[0].keys()), 'y': list(entity_names_occurrences[0].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'APOSENTADORIA'},
                        {'x': list(entity_names_occurrences[1].keys()), 'y': list(entity_names_occurrences[1].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'REVERSÕES'},
                        {'x': list(entity_names_occurrences[2].keys()), 'y': list(entity_names_occurrences[2].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'NOMEAÇÃO'},
                        {'x': list(entity_names_occurrences[3].keys()), 'y': list(entity_names_occurrences[3].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'EXONERAÇÃO'},
                        {'x': list(entity_names_occurrences[5].keys()), 'y': list(entity_names_occurrences[5].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'RETIFICAÇÃO'},
                        {'x': list(entity_names_occurrences[6].keys()), 'y': list(entity_names_occurrences[6].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'SUBSTITUIÇÃO'},
                        {'x': list(entity_names_occurrences[4].keys()), 'y': list(entity_names_occurrences[4].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'ABONO'},
                        {'x': list(entity_names_occurrences[10].keys()), 'y': list(entity_names_occurrences[10].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'CESSÕES'},
                        {'x': list(entity_names_occurrences[9].keys()), 'y': list(entity_names_occurrences[9].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'SEM EFEITO APOSENTADORIA'},
                        {'x': list(entity_names_occurrences[7].keys()), 'y': list(entity_names_occurrences[7].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'EFETIVOS NOME'},
                        {'x': list(entity_names_occurrences[8].keys()), 'y': list(entity_names_occurrences[8].values()), 'type': 'line', 'marker': {'color': cores[3]}, 'name': 'EFETIVOS EXO'},
                    ],
                    'layout': {
                        'title': 'Entidades encontradas por Ato',
                        'showlegend': True,
                        'xaxis': {'showgrid': False},
                        'yaxis': {'showgrid': True},
                        # background transparent
                        'plot_bgcolor': 'rgba(0,0,0,0)',
                        'paper_bgcolor': 'rgba(0,0,0,0)',
                        'font': {'color': 'white'},
                    }
                }
            )
        ],className='col-xs-8', style=graph2_style),
        ], className='col-xs-12', style=dash_style),

    html.Div([
        dcc.Tabs(id='tabs-example', className='custom_tabs_style', value='tab-apo', children=[   
            dcc.Tab(label='APOSENTADORIA', value='tab-apo', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[0]
        ]),
            dcc.Tab(label='REVERSÕES', value='tab-rev', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[1]
        ]),
            dcc.Tab(label='NOMEAÇÃO', value='tab-nom', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[2]
        ]),
            dcc.Tab(label='EXONERAÇÃO', value='tab-exo', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[3]
        ]),
            dcc.Tab(label='RETIFICAÇÃO', value='tab-ret', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[5]
        ]),
            dcc.Tab(label='SUBSTITUIÇÃO', value='tab-sub', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[6]
        ]),
            dcc.Tab(label='ABONO', value='tab-ab', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[4]
        ]),
            dcc.Tab(label='CESSÕES', value='tab-ces', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[10]
        ]),
            dcc.Tab(label='SEM EFEITO APOSENTADORIA', value='tab-sea', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[9]
        ]),
            dcc.Tab(label='EFETIVOS NOME', value='tab-en', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[7]
        ]),
            dcc.Tab(label='EFETIVOS EXO', value='tab-ee', style=tab_style, selected_style=tab_selected_style, children=[
            list_of_tables[8]
        ])], style=tabs_styles),
    ], className='col-xs-12', style=dash_style)
    
    ])


@app.callback(Output('output-data-upload', 'children'),
              [Input('upload-data', 'contents'), 
               Input('type-extraction', 'children')],
              [State('upload-data', 'filename'),
               State('upload-data', 'last_modified')])
def update_output(list_of_contents, type_extraction, list_of_names, list_of_dates):
    
    # print(value_tab)
    if list_of_contents is not None:
        children = [parse_contents(c, n, d, type_extraction) for c, n, d in zip(list_of_contents, list_of_names, list_of_dates)]
        return children

@app.server.route('/<file>')
def serve_static(file):
    return flask.send_file(file + ".csv", cache_timeout=1, attachment_filename=file+'.csv')

if __name__ == '__main__':
    app.run_server(host='0.0.0.0', debug=True)
    cache = Cache(app.server, config={
        'CACHE_TYPE': 'simple'
    })

    cache.clear()