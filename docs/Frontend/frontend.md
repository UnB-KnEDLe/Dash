<h1 style="text-align: center">Composição do Front-end</h1>
<br />
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="../assets/Frontend/initial_logo.png">
</div>
<br />

## 1. Tecnologia
<p align="justify">A tecnologia escolhida foi o framework <i>React.js</i>, trata-se de uma biblioteca flexível, em alta no mercado, além de reutilizar um mesmo componente. O projeto também utiliza <i>typescript</i> para auxiliar no desenvolvimento do código. As versões utilizadas de cada tecnologia encontram-se na imagem abaixo.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/02.png">
</div>


## 2. Inicializando aplicação
<p align="justify">Para iniciar a aplicação, basta clonar o repositório do projeto em <a href="https://gitlab.com/gpam/services/timeline-contratos.git"><b><i>timeline-contratos</b></i></a> ou então via SSH git@gitlab.com:gpam/services/timeline-contratos.git. Feito isso iremos instalar as dependências com o comando abaixo:</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/03.png">
</div>
<p align="justify">Com as dependências instaladas basta executar a aplicação com o comando:</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/04.png">
</div>
<p align="justify">Feito isso basta acessar o <a href="http://localhost:3000/timeline"><b><i>localhost</i></b><a> em um navegador de sua preferência.</p>

## 3. Páginas
<p align="justify">A aplicação possui 5 páginas. São elas: <b><i>Home</i></b>, <b><i>Pesquisar</i></b>, <b><i>Extrair</i></b>, <b><i>Consultar</i></b> e <b><i>Contratos</i></b>. Os nomes são auto-sugestivos.</p>

### 3.1. Home
<p align="justify">A página Home é página inicial do projeto, que recebe e direciona o usuário para as ferramentas desejadas. </p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/05.png">
</div>

### 3.2. Pesquisar
<p align="justify">A página <b><i>Pesquisar</i></b> é a responsável pela realizção de pesquisa por atos presentes no nosso banco de dados. Foram utilizados alguns recursos de animações e artigos gráficos para trazer acessibiliade e usabilidade para a página.

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/06.png">
</div>

### 3.3. Extrair
<p align="justify">Na página <b><i>Extrair</i></b> é possível realizar extração de arquivos JSON e PDF, com atos para posterior exportação e análise. Houve um trabalho diferenciado na implementação do filtro dos arquivos, bem como nos estados visuais, de acordo com os arquivos que são enviados pelo usuário.
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/07.png">
</div>

### 3.4. Consultar
<p align="justify">A página <b><i>consultar</i></b>, diferentes das demais, tem a peculiaridade de precisar de um login individual, pois é necessário validar e autenticar o acesso ao banco de dados Neo4J, permitindo inserir requisições e receber dados em formas de grafos.

a visualização com os grafos, mostrando as relações requeridas.
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/08.png">
</div>

Foi utilizada a biblioteca react-hook-form e a NeoVis. A primeira faz o processamento das requisições e definições dos parâmetros para que a busca seja a mais otimizada. A NeoVis, é a biblioteca que recebe os dados advindos da requisição e gera a visualização com os grafos, mostrando as relações requeridas.
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/07.png">
</div>

### 3.4. Contratos
<p align="justify">Na página <b><i>Contratos</i></b>, foi preciso a utilização da biblioteca <b><i>vertical-timeline-component-for-react</i></b> em sua versão <b><i>1.0.7</i></b>, abaixo está representado o principal componente da página
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/10.png">
</div>

## 4. Componentes
<p align="justify">A coração da estrutura do Front-end encontra-se na pasta <b>src</b>, e dentro dela temos diversas outras pastas, como podemos ver abaixo.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/11.png">
</div>
<p align="justify">Vamos entender do que se trata cada pasta desse Front-end, os outros arquivos serão comentados em futuras sessões.</p>
<ul>
    <li><h3>assets</h3> Trata-se de todos os arquivos de imagem que a aplicação consome, com exceção dos ícones, esses são utilizados por meio de bibliotecas exteriores.</li>
    <li><h3>components</h3> Trata-se de todos os componentes que são utilizados para auxiliar na contrução das páginas.</li>
    <li><h3>hooks</h3> Trata-se de dados que serão utilizados por todo o código, utiliza-se o conceito de <b>context</b>, mais abaixo será melhor explicado.</li>
    <li><h3>pages</h3> Trata-se de todos as páginas disponíveis no sistema.</li>
    <li><h3>services</h3> Trata-se de arquivos responsáveis por se conectar com a api externa.</li>
    <li><h3>styles</h3> Trata-se de arquivos de estilização global.</li>
    <li><h3>templates</h3> Trata-se de agrupamentos que compõem componentes mais complexos.</li>
    <li><h3>utils</h3> Trata-se de funções específicas que auxiliam em partes específicas do código.</li>
</ul>

<p align="justify">Nessa sessão iremos entender os principais componentes da aplicação, na imagem abaixo conseguimos ver todos eles.</p>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/11.png">
</div>

### ActType
Esse componente se conecta com o banco de dados para pegar informações sobre quais os tipos de ato o usuário poderá escolher na busca avançada.

### AdvancedFilter
Componente responsável por renderizar a busca avançada em tela.

### Button
Componente responsável por renderizar os botões em tela.

### IconsAnimation
Componente responsável por renderizar as animações dos ícones na <b>Home</b> do projeto.

### Input
Componente resposável por pegar e validar informações provindas do nosso usuário.

### ToastContainer
Componente responsável por exibir mensagem de sucesso, erro e informações genéricas para o usuário quando esse conclui alguma etapa dentro do sistema.

### Tooltip
Componente responsável por mostrar erros em tela para o usuário

</br>
</br>
<p align="justify">Para exemplificar o gif abaixo mostra todos os componentes devidamente renderizados em tela.</p>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/12.gif">
</div>

## 5. Conexão com o Back-end
<p align="justify">Para se conectar com o back end utilizamos a biblioteca axios para poder fazer a conexão com a api. O arquivo responsável por fazer isso se encontra dentro da pasta <b>src</b>, na subpasta <b>service</b>.</p>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/13.png">
</div>

</p>Acima podemos ver uma URL comentada, essa é usada se quisermos utilizar o banco em localhost.</p>

## 6. Contexts
<p align="justify"><b>Context</b> é um conceito que cresceu muito nos últimos anos na comunidade <b>React.js</b>, esse é responsável por exibir dados em qualquer lugar da aplicação. Dentro da pasta <b>hooks</b> temos um <b>index</b>, esse gerencia os contexts, elém disso temos também 3 outros contexts: <b>toast</b>, <b>useAdvancedSearch</b> e <b>useProcess</b>.</p>

### 6.1. toast
<p align="justify">Responsável por renderizar mensagens de status após algum processo de falha ou sucesso, por exemplo. Podemos adicionar funcionalidades que modificam a funicionalidade desses.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/14.png">
</div>

### 6.2. useAdvancedSearch
<p align="justify">Responsável por garantir uma busca avançada efetiva, esse também se conecta com o banco para poder buscar os parâmetros de filtro que o usuário estabeleceu, basta ver a imagem abaixo.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/15.png">
</div>

### 6.3. useProcess
<p align="justify">Responsável por adicionar tipo aos parâmetros de um ato, assim como é responsável por uma série de funções que auxiliam na manipulação desses. Abaixo conseguimos ver a função responsável por salvar atos provenientes do back-end através de um número de um processo forncecido pelo usuário.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Frontend/16.png">
</div>

Data | Versão | Descrição | Autor(es) 
---- | ----------- | ------ | ---------
30/01/2023 | 1.3 | Refatorando url imagens| [@dansousamelo](http://github.com/dansousamelo)|
26/01/2023 | 1.2 | Adicionando tópicos 1 a 6| [@jonatas1n](https://github.com/jonatas1n)|
18/01/2023 | 1.1 | Criação da wiki| [@dansousamelo](http://github.com/dansousamelo)|