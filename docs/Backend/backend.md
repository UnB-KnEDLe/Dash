<h1 style="text-align: center">Composição do Back-end</h1>
<br />
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="../assets/Frontend/initial_logo.png">
</div>
<br />

## 1. Tecnologia
<p align="justify">Toda a aplicação se nutre de endpoints da REST API <a href=https://github.com/UnB-KnEDLe/DODFMinerAPI><b>DODFMinerAPI</b></a>.</p> 

<p align="justify">O <a href=https://github.com/UnB-KnEDLe/DODFMinerAPI><b>DODFMinerAPI</b></a> foi desenvolvido a partir do Python como linguagem de programação e Flask como framework. Essas tecnologias foram escolhidas por causa da facilidade de uso e flexibilidade, além do framework Flask oferecer recursos e extensões para o desenvolvimento de APIs RESTful de alta qualidade. Com a REST API, o knedash lida com grandes quantidades de dados de forma mais eficiente, confiável e escalável, melhorando a performance e experiência do usuário.</p>

<p align="justify">Além disso a ferramenta docker foi utilizada para realizar a instalação e deploy de todo o sistema knedash.</p>

<p align="justify">As versões utilizadas de cada tecnologia encontram-se na imagem abaixo.</p>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Backend/01.png">
</div>
						

## 2. Inicializando aplicação
<p align="justify">Para a inicialização do Back-end da aplicação, não há nada mais simples do que utilizar a ferramente Docker Compose.</p>

<p align="justify">O Docker Compose é uma ferramenta para executar aplicações com vários contêineres Docker. Ele permite criar e gerenciar contêineres, redes e volumes usando um arquivo YAML.</p>


<p align="justify">Com essa ferramenta há duas formas recomendadas para inicializar o Back-end: <b>Docker Compose Direto</b>, <b>Git Clone e Docker Compose</b>.</p>

### 2.1 Docker-Compose Direto
<p align="justify">Para inicialização através do Docker-Compose direto, primeiro devemos criar o arquivo docker-compose.yml abaixo:</p>


    services:
	  api:
	    image: knedleunb/knedash_dodfminerapi
	    container_name: dodfminerapi-api
	    ports:
	      - "5999:8080"
	    depends_on:
	      - neo4j-db-timeline
	    env_file: .env
	    networks:
	      - dodfminer-api-network
	    
	  neo4j-db:
	    image: knedleunb/knedash_db
	    container_name: dodfminerapi-pessoal
	    ports:
	      - "7473"
	      - "7474"
	      - "7687"
	    environment:
	      NEO4J_AUTH: $NEO4J_USER/$NEO4J_PASSWORD
	    networks:
	      - dodfminer-api-network
	    volumes:
	      - $NEO4J_VOLUME_DATA:/data
	      - $NEO4J_VOLUME_LOGS:/logs
	      - $NEO4J_VOLUME_IMPORT:/var/lib/neo4j/import
	      - $NEO4J_VOLUME_PLUGINS:/plugins
	      - $NEO4J_VOLUME_CONF:/conf

	      
	  neo4j-db-contratos:
	    image: knedleunb/knedash_db
	    container_name: dodfminerapi-contratos
	    ports:
	      - "7473"
	      - "7474"
	      - "7687"
	    environment:  
	      NEO4J_AUTH: $NEO4J_USER_CONTRATOS/$NEO4J_PASSWORD_CONTRATOS
	    networks:
	      - dodfminer-api-network
	    depends_on:
	      - neo4j-db
	    volumes:
	      - $NEO4J_VOLUME_DATA_CONTRATOS:/data
	      - $NEO4J_VOLUME_LOGS_CONTRATOS:/logs
	      - $NEO4J_VOLUME_IMPORT_CONTRATOS:/var/lib/neo4j/import
	      - $NEO4J_VOLUME_PLUGINS_CONTRATOS:/plugins
	      - $NEO4J_VOLUME_CONF_CONTRATOS:/conf

	  neo4j-db-timeline:
	    image: knedleunb/knedash_db
	    container_name: dodfminerapi-timeline
	    ports:
	      - "7473"
	      - "7474"
	      - "7687"
	    environment:
	      NEO4J_AUTH: $NEO4J_USER_TIMELINE/$NEO4J_PASSWORD_TIMELINE
	    networks:
	      - dodfminer-api-network
	    depends_on:
	      - neo4j-db-contratos
	    volumes:
	      - $NEO4J_VOLUME_DATA_TIMELINE:/data
	      - $NEO4J_VOLUME_LOGS_TIMELINE:/logs
	      - $NEO4J_VOLUME_IMPORT_TIMELINE:/var/lib/neo4j/import
	      - $NEO4J_VOLUME_PLUGINS_TIMELINE:/plugins
	      - $NEO4J_VOLUME_CONF_TIMELINE:/conf

	  ## Caso nao queira inicializar o container knedash_dash, basta comentar todo o serviço dash
	  dash:
	    image: knedleunb/knedash_dash
	    command: npm start
	    container_name: dash
	    ports:
	      - "3002:3002"


	networks:
	  dodfminer-api-network:
	    driver: bridge

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Backend/02.png">
</div>

<p align="justify">Após criado o arquivo docker-compose.yml, deve-se criar o arquivo de váriaveis de ambiente .env. Utilize o modelo abaixo e insira, entre <>,  os valores que lhe for conveniente.</p>
    

	# DB de Pessoal
    NEO4J_URI=neo4j://dodfminerapi-pessoal:7687
	NEO4J_USER=<usuário do DB de Pessoal>
	NEO4J_PASSWORD=<senha do DB de Pessoal>
	NEO4J_VERSION=<versão do DB de Pessoal>
	NEO4J_DATABASE=<base do BD de Pessoal>

	NEO4J_VOLUME_DATA=<volume de dados do DB de Pessoal>
	NEO4J_VOLUME_LOGS=<volume de logs do DB de Pessoal>
	NEO4J_VOLUME_IMPORT=<volume de import do DB de Pessoal>
	NEO4J_VOLUME_PLUGINS=<volume de plugins do DB de Pessoal>
	NEO4J_VOLUME_CONF=<volume de configuração do DB de Pessoal>

	# DB de Contratos
	NEO4J_URI_CONTRATOS=neo4j://dodfminerapi-contratos:7687
	NEO4J_USER_CONTRATOS=<usuário do DB de Contratos>
	NEO4J_PASSWORD_CONTRATOS=<senha do DB de Contratos>
	NEO4J_VERSION_CONTRATOS=<versão do DB de Contratos>
	NEO4J_DATABASE_CONTRATOS=<base do BD de Contratos>

	NEO4J_VOLUME_DATA_CONTRATOS=<volume de dados do DB de Contratos>
	NEO4J_VOLUME_LOGS_CONTRATOS=<volume de logs do DB de Contratos>
	NEO4J_VOLUME_IMPORT_CONTRATOS=<volume de import do DB de Contratos>
	NEO4J_VOLUME_PLUGINS_CONTRATOS=<volume de plugins do DB de Contratos>
	NEO4J_VOLUME_CONF_CONTRATOS=<volume de configuração do DB de Contratos>

	# DB de Timeline
	NEO4J_URI_TIMELINE=neo4j://dodfminerapi-timeline:7687
	NEO4J_USER_TIMELINE=<usuário do DB de Timeline>
	NEO4J_PASSWORD_TIMELINE=<senha do DB de Timeline>
	NEO4J_VERSION_TIMELINE=<versão do DB de Timeline>
	NEO4J_DATABASE_TIMELINE=<base do BD de Timeline>

	NEO4J_VOLUME_DATA_TIMELINE=<volume de dados do DB de Timeline>
	NEO4J_VOLUME_LOGS_TIMELINE=<volume de logs do DB de Timeline>
	NEO4J_VOLUME_IMPORT_TIMELINE=<volume de import do DB de Timeline>
	NEO4J_VOLUME_PLUGINS_TIMELINE=<volume de plugins do DB de Timeline>
	NEO4J_VOLUME_CONF_TIMELINE=<volume de configuração do DB de Timeline>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Backend/03.png">
</div>

<p align="justify">Como último passo para esse tipo de inicialização, deve-se executar o comando abaixo:</p>


		docker-compose up

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Backend/04.png">
</div>

<p align="justify">Dessa forma os containers serão criados.</p>

<p align="justify">Teremos o swagger-ui do DODFMinerAPI e o Dash nas seguintes URLs:</p>

- **DODFMinerAPI**: http://localhost:5999/dodfminner/api/swagger-ui/
- **Dash**: http://localhost:3002/

### 2.2 Git Clone e Docker Compose
<p align="justify">Para inicialização através do Git Clone e Docker Compose, primeiro devemos clonar o repositório do projeto em <a href="https://github.com/UnB-KnEDLe/DODFMinerAPI.git"><b><i>DODFMinerAPI</b></i></a> ou então via SSH git@github.com:UnB-KnEDLe/DODFMinerAPI.git. Feito isso, devemos criar um arquivo de variáveis de ambiente .env, conforme mostrado na seção 2.1 .</p>



<p align="justify">Após criado o arquivo .env e estando na raíz do projeto, para a etapa final da inicialização será necessário executar o comando abaixo:</p>


		docker-compose up --build

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Backend/05.png">
</div>

<p align="justify">Dessa forma os containers serão criados.</p>

<p align="justify">Teremos o swagger-ui do DODFMinerAPI e o Dash nas seguintes URLs:</p>

- **DODFMinerAPI**: http://localhost:5999/dodfminner/api/swagger-ui/
- **Dash**: http://localhost:3002/

## 3. Banco de Dados

### 3.1. Neo4j
<p align="justify">O Neo4j, um banco de dados orientado a grafos, foi escolhido para o armazenamento dos atos oriundos da terceira seção do Diário Oficial da União do Distrito Federal, por ser uma excelente ferramenta a ser utilizada em modelagens com vários relacionamentos.</p>  

### 3.2. Bancos
<p align="justify">No Back-end São utilizados 3 Bancos de Dados (BDs):</p> 

- **BD de Pessoal**:
Banco responsável por armazenar informações sobre os atos de pessoal.

- **BD de Contratos**:
Banco responsável por armazenar informações sobre os atos de contrato.

- **BD de Timeline.**:
Banco responsável por armazenar informações sobre os atos de licitação para construção da timeline.

<p align="justify">Esses bancos estão hospedados em containers docker e suas configuração são definidas no arquivo.

## 4. REST API

### 4.1. Python Flask 
<p align="justify">Foi criada o DodfminerAPI, uma REST API com Python e Flask para conectar o front-end do knedash aos bancos de dados.</p> 
    
<p align="justify">Python e Flask foram escolhidos pela facilidade de uso e flexibilidade, além da biblioteca Flask oferecer recursos e extensões para o desenvolvimento de APIs RESTful de alta qualidade. Com a REST API, o knedash lida com grandes quantidades de dados de forma mais eficiente, confiável e escalável, melhorando a performance e experiência do usuário.</p>

### 4.2. Swagger-ui
    
<p align="justify">Para fornecer uma interface visual para nossa REST API, utilizamos o Swagger-ui. Esta ferramenta permite que os usuários possam visualizar e interagir com os endpoints da API de forma amigável e intuitiva, tornando a experiência com o nosso sistema mais agradável.

Além disso, também serve como documentação do DODFMinerAPI, lá é possível ver quais endpoints são do tipo GET ou POST, bem como os parâmetros aceitos.</p>

## 5. Endpoints do DODFMinerAPI
    
<p align="justify">O DodfminerAPI apresenta endpoints para Pesquisa, Extração e Timeline.<p>

### 5.1. Pesquisa (Pessoal e Contratos)
        
<p align="justify">Os endpoints para pesquisa são utilizados pela funcionalidade `Pesquisar` do Knedash, afim de se pesquisar atos que correspondam com os filtros/campos inseridos pelo usuário.</p>
    
<p align="justify">Podemos separar os endpoints de Pesquisa em duas categorias: <b>Pessoal</b>, <b>Contrato</b>.</p>
    

#### 5.1.1. Pessoal
<p align="justify">Os endpoints de Pesquisa que lidam com os atos de Pessoal são:</p>

    
- Abono de Permanência
    
    		/dodfminner/api/abono
    		/dodfminner/api/abono/count
    		/dodfminner/api/abono/fields
    		/dodfminner/api/abono/no_pag
    		/dodfminner/api/abono/v2
    		/dodfminner/api/abono/v2/{flat}
    		/dodfminner/api/abono/{flat}
    
- Aposentadoria
    
    		/dodfminner/api/aposentadoria
    		/dodfminner/api/aposentadoria/count
    		/dodfminner/api/aposentadoria/fields
    		/dodfminner/api/aposentadoria/no_pag
    		/dodfminner/api/aposentadoria/v2
    		/dodfminner/api/aposentadoria/v2/{flat}
    		/dodfminner/api/aposentadoria/{flat}
    
- Cessão
    
    		/dodfminner/api/cessao
    		/dodfminner/api/cessao/count
    		/dodfminner/api/cessao/fields
    		/dodfminner/api/cessao/no_pag
    		/dodfminner/api/cessao/v2
    		/dodfminner/api/cessao/v2/{flat}
    		/dodfminner/api/cessao/{flat}
    
- Exoneração Efetiva
    
    		/dodfminner/api/exo_efetivo
    		/dodfminner/api/exo_efetivo/count
    		/dodfminner/api/exo_efetivo/fields
    		/dodfminner/api/exo_efetivo/no_pag
    		/dodfminner/api/exo_efetivo/v2
    		/dodfminner/api/exo_efetivo/v2/{flat}
    		/dodfminner/api/exo_efetivo/{flat}
    
- Exoneração Nomeada
    
    		/dodfminner/api/exoneracao
    		/dodfminner/api/exoneracao/count
    		/dodfminner/api/exoneracao/fields
    		/dodfminner/api/exoneracao/no_pag/
    		/dodfminner/api/exoneracao/pessoa/{pessoa}
    		/dodfminner/api/exoneracao/rank
    		/dodfminner/api/exoneracao/v2
    		/dodfminner/api/exoneracao/v2/{flat}
    		/dodfminner/api/exoneracao/{flat}
    
- Nomeação Comissionada
    
    		/dodfminner/api/nomeacao_comissionada
    		/dodfminner/api/nomeacao_comissionada/count
    		/dodfminner/api/nomeacao_comissionada/fields
    		/dodfminner/api/nomeacao_comissionada/no_pag
    		/dodfminner/api/nomeacao_comissionada/v2
    		/dodfminner/api/nomeacao_comissionada/v2/{flat}
    		/dodfminner/api/nomeacao_comissionada/{flat}
    
- Nomeação Efetiva

    		/dodfminner/api/nomeacao_efetiva
    		/dodfminner/api/nomeacao_efetiva/count
    		/dodfminner/api/nomeacao_efetiva/fields
    		/dodfminner/api/nomeacao_efetiva/no_pag
    		/dodfminner/api/nomeacao_efetiva/v2
    		/dodfminner/api/nomeacao_efetiva/v2/{flat}
    		/dodfminner/api/nomeacao_efetiva/{flat}
    
- Retificação
    
    		/dodfminner/api/retificacao
    		/dodfminner/api/retificacao/count
    		/dodfminner/api/retificacao/fields
    		/dodfminner/api/retificacao/no_pag
    		/dodfminner/api/retificacao/v2
    		/dodfminner/api/retificacao/v2/{flat}
    		/dodfminner/api/retificacao/{flat}
    
- Reversão
    
    		/dodfminner/api/reversao
    		/dodfminner/api/reversao/count
    		/dodfminner/api/reversao/fields
    		/dodfminner/api/reversao/no_pag
    		/dodfminner/api/reversao/v2
    		/dodfminner/api/reversao/v2/{flat}
    		/dodfminner/api/reversao/{flat}
    
- Substituição
    
    		/dodfminner/api/substituicao
    		/dodfminner/api/substituicao/count
    		/dodfminner/api/substituicao/fields
    		/dodfminner/api/substituicao/no_pag
    		/dodfminner/api/substituicao/v2
    		/dodfminner/api/substituicao/v2/{flat}
    		/dodfminner/api/substituicao/{flat}
    
- Tomada Sem Efeito Aposentadoria
    
    		/dodfminner/api/tornado_sea
    		/dodfminner/api/tornado_sea/count
    		/dodfminner/api/tornado_sea/fields
    		/dodfminner/api/tornado_sea/no_pag
    		/dodfminner/api/tornado_sea/v2
    		/dodfminner/api/tornado_sea/v2/{flat}
    		/dodfminner/api/tornado_sea/{flat}

#### 5.1.2. Contrato
<p align="justify">Os endpoints de Pesquisa que lidam com os atos de Contrato são:</p>

- Aditamento Contratual
    
	    /dodfminner/api/aditamento_contratual
	    /dodfminner/api/aditamento_contratual/count
	    /dodfminner/api/aditamento_contratual/fields
	    /dodfminner/api/aditamento_contratual/no_pag
	    /dodfminner/api/aditamento_contratual/{flat}

- Contrato e Convênio
    
	    /dodfminner/api/contrato_convenio
	    /dodfminner/api/contrato_convenio/count
	    /dodfminner/api/contrato_convenio/fields
	    /dodfminner/api/contrato_convenio/no_pag
	    /dodfminner/api/contrato_convenio/{flat}

- Licitação
    
	    /dodfminner/api/licitacao
	    /dodfminner/api/licitacao/count
	    /dodfminner/api/licitacao/fields
	    /dodfminner/api/licitacao/no_pag
	    /dodfminner/api/licitacao/{flat}

- Revogação ou Anulação de Licitação

    		/dodfminner/api/Revogacao_anulacao_licitacao
    		/dodfminner/api/Revogacao_anulacao_licitacao/count
    		/dodfminner/api/Revogacao_anulacao_licitacao/fields
    		/dodfminner/api/Revogacao_anulacao_licitacao/no_pag
    		/dodfminner/api/Revogacao_anulacao_licitacao/{flat}

- Suspensão de Licitação:
    
	    /dodfminner/api/Seuspensao_licitacao
	    /dodfminner/api/Seuspensao_licitacao/count
	    /dodfminner/api/Seuspensao_licitacao/fields
	    /dodfminner/api/Seuspensao_licitacao/no_pag
	    /dodfminner/api/Seuspensao_licitacao/{flat}
    
### 5.2. Extração (Json e PDF)

<p align="justify">Os endpoints para Extração são utilizados pela funcionalidade `Extrair` do Knedash, afim de se extrair de arquivos, no formato PDF e Json, os tipos de atos presentes, bem como suas respectivas entidades.</p>

<p align="justify">Podemos separar os endpoints de Extração em duas categorias: <b>PDF</b>, <b>Json</b>.</p>

#### 5.2.1. PDF

<p align="justify">Os endpoints de Extração que lidam com arquivos no formato PDF são:</p>

- Extração Entidade e Ato
    
    		/dodfminner/api/extracao/all
    		/dodfminner/api/extracao/entidade_highlight
    
- Extração de Atos
    
    		/dodfminner/api/extracao/atos
    
- Extração Entidade
    
    		/dodfminner/api/extracao/entidade
    

#### 5.2.2. Json

<p align="justify">Os endpoints de Extração que lidam com arquivos no formato Json são:</p>

- Extração Entidade e Ato<br>
    
     		/dodfminner/api/extracao_js/all
    
- Extração de Atos
    
    		/dodfminner/api/extracao_js/atos
    
- Extração Entidade
    
    		/dodfminner/api/extracao_js/entidade

### 5.3 Timeline
<p align="justify">Os endpoints para Timeline são utilizados pela funcionalidade `Timeline` do Knedash, afim de se montar uma linha do tempo dos atos de mesmo número de processo.</p>

<p align="justify">Podemos separar os endpoints da Timeline em 2 categorias: <b>Lista de Atos</b>, <b>Lista de Processos</b>.</p>

#### 5.3.1 Lista de Atos
    
- Atos
    
			/dodfminner/api/response/timeline/acts/data
    
- Contagem de Atos
    
    		/dodfminner/api/timeline/count/acts/data

#### 5.3.2 Lista de Processos

- Processos
    
    		/dodfminner/api//timeline
    
- Contagem de Processos
    
    		/dodfminner/api/timeline/count/listprocess

## 6) Docker

<p align="justify">Docker é uma plataforma que permite empacotar, distribuir e executar aplicativos em contêineres, que são unidades portáteis de software isoladas umas das outras e do host. A utilização de contêineres Docker para a instalação de dependências e aplicações traz diversas vantagens, como a simplificação e rapidez do processo de instalação, a garantia de consistência entre os ambientes de desenvolvimento e produção, a facilidade de escalabilidade e o aumento da segurança do sistema.</p>

<p align="justify">Para o Deploy do sistema knedash foi utlizado 5 contêineres Docker:</p>

- **dodfminerapi-api**:
    
    Container responsável por hospedar o REST API DodfminerAPI.
    
- **dodfminerapi-timeline**:
    
    Container responsável por hospedar o BD de Timeline.
    
- **dodfminerapi-contratos**:
    
    Container responsável por hospedar o BD de Contratos.
    
- **dodfminerapi-pessoal**:
    
    Container responsável por hospedar o BD de Pessoal.
    
- **dash**:
    
    Container responsável por hospedar o front-end do Knedash, isto é, a aplicação Dash.
    

<p align="justify">Todos esses contêineres compartilham uma mesma rede bridge, podendo assim comunicarem entre si ao utilizar os nomes dos contêineres ao invés de seus endereços IP’s.</p>