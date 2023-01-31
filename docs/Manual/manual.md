<h1 style="text-align: center">Manual do usuário</h1>
<br />
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="../assets/Frontend/initial_logo.png">
</div>
<br />

## Introdução
Esse manual fornece indicações e guias para utilização do Knedash provendo maior aproveitamento da ferramenta e resolução de dúvidas dos usuários. As próximas seções serão divididas pelas páginas disponíveis na ferramenta, e estar serão subdivididas em seções da página seguindo a ordem cronológica das operações necessárias para realizar as operações necessárias.

## 1. Pesquisar
Essa página fornece informações sobre os mais diversos atos disponíveis no nosso banco de dados que podem ser buscados a partir do tipo de ato, e filtrado posteriormente para refinar a busca por esses atos. Essa busca pode ser exportada em formato CSV ou PDF.

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/01.png">
</div>

### Seleção do tipo de ato

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/02.png">
</div>

A primeira etapa é selecionar o tipo de ato. Basta clicar no botão "Escolha um tipo de ato", e selecionar o tipo de ato desejado.

### Seleção dos filtros e definição dos campos

Após escolher o tipo de ato, será possível realizar a busca. Além disso, as opções de filtro também estarão disponíveis para refinar sua busca.
Para filtrar, selecione o campo desejado, clicando no botão com o nome desse campo:

<!-- Adicionar aqui uma imagem dos filtros -->
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/02.png">
</div>

Na janela de campo, um campo estará disponibilizado para a alteração do valor. Para aplicar o filtro, clique nesse campo, digite o valor que será utilizado no filtro e clique em pesquisar para realizara busca.

<!-- Adicionar aqui uma imagem dos campos dos filtros -->
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/03.png">
</div>


### Visualização dos atos

## 2. Extrair

Nessa página, é possível realizar extração de arquivos no formato JSON e PDF a fim de obter os dados inseridos nesses formatos. Assim, esses dados podem ser lidos, processados, filtrados e exportados.

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/04.png">
</div>

### Seleção do arquivo

Para começar, basta arrastar o arquivo desejado para a área de extração *ou* você também pode clicar no botão "Selecionar arquivo", que será exibida uma janela com a seleção do arquivo no seu computador. 

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/05.png">
</div>

### Gerenciamento de arquivos

Após a seleção do arquivo, um menu será exibido, onde é possível extrair mais arquivos para adição e para remoção na tabela de exibição, bem como a exibição desses atos. Além disso, é possível também definir a visibilidade dos atos extraídos de cada arquivo.

<!-- Adicionar captura de tela da seção de gerenciamento de arquivos  -->
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/06.png">
</div>

### Visualização dos atos

### Lidando com erros

## 3. Consultar

Nessa tela, é possível realizar consultas no banco de dados Neo4J, podendo ser possível visualizar em grafos as relações entre as entidades armazenadas.

<!-- Adicionar captura de tela da tela de consulta com o login realizado  -->
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/07.png">
</div>

### Login

Para realizar as consultas, é necessário entrar com um usuário registrado no banco. Basta inserir o nome de usuário e a senha, e logo após clicar em "Entrar". Caso haja algum problema com o login ou não tenha usuário registrado, envie um e-mail para [ask_knedle@googlegroups.com](ask_knedle@googlegroups.com).

<!-- Adicionar captura de tela da tela de consulta com o login realizado  -->
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/08.png">
</div>

### Realizando a requisição (Query Cypher)

As consultas são realizadas com uma linguagem de requisição própria da linguagem, o Cypher. Sua documentação está disponível [nesse site](https://neo4j.com/developer/cypher/).

<!-- Adicionar captura de tela da tela com uma requisição escrita  -->
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/09.png">
</div>

### Visualizando o grafo

<!-- Adicionar captura de tela da tela com um grafo e um nó selecionado  -->
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/10.png">
</div>

### Lidando com erros

## 4. Contratos

Essa tela disponibiliza a visualização de uma linha do tempo dos contratos registrados em nosso banco de dados, permitindo visualização em detalhees de cada contrato.

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/11.png">
</div>

### Selecionando o processo

Para selecionar o processo, o usuário tem duas opções: Realizar uma Busca direta ou então, Buscar por processos.

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/12.png">
</div>

#### Busca direta

Primeiro, selecione o campo de marcação "Consulta direta". Logo após, insira o número do processo licitatório do contrato desejado, e clique em pesquisar.

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/13.png">
</div>

#### Pesquisa por processos

Você pode inserir um trecho do processo que está procurando, a fim de pesquisar pelos processos disponíveis no nosso banco de dados que contenham aquele trecho ou todo o processo pesquisado. Outra forma de realizar busca é através da definição do período de pesquisa, definindo a data de início e fim da busca dos atos dos processos. 

**Observação:** O banco de dados só retorna 30 processos, no máximo. Caso sua pesquisa seja pouco específica e o sua busca não seja bem sucedida, aumente o critério da pesquisa e tente novamente.

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/14.png">
</div>

### Selecionando processos

<!-- Inserir captura de tela com a seleção de processos cheia de itens. -->
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/Dash/assets/Manual/15.png">
</div>

### Lidando com erros