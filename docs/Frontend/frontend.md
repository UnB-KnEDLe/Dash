<h1 style="text-align: center">Documento de Arquitetura de Software</h1>
<br />
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/01.png">
</div>
<br />

## 1. Tecnologia
<p align="justify">A tecnologia escolhida foi o framework <i>React.js</i>, trata-se de uma biblioteca flexível, em alta no mercado, além de reutilizar um mesmo componente. O projeto também utiliza <i>typescript</i> para auxiliar no desenvolvimento do código. As versões utilizadas de cada tecnologia encontram-se na imagem abaixo.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/02.png">
</div>

## 2. Inicializando aplicação
<p align="justify">Para iniciar a aplicação, basta clonar o repositório do projeto em <a href="https://gitlab.com/gpam/services/timeline-contratos.git"><b><i>timeline-contratos</b></i></a> ou então via SSH git@gitlab.com:gpam/services/timeline-contratos.git. Feito isso iremos instalar as dependências com o comando abaixo:</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/03.png">
</div>
<p align="justify">Com as dependências instaladas basta executar a aplicação com o comando:</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/04.png">
</div>
<p align="justify">Feito isso basta acessar o <a href="http://localhost:3000/timeline"><b><i>localhost</i></b><a> em um navegador de sua preferência.</p>

## 3. Páginas
<p align="justify">A aplicação possui 3 páginas apenas, são elas: <b><i>Home</i></b>, <b><i>Timeline</i></b> e <b><i>WithoutProcess</i></b>. Os nomes são auto sugestivos.</p>

### 3.1. Home
<p align="justify">A página Home é página inicial do projeto, ela é formada por 2 principais componentes como mostra na imagem abaixo.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/05.png">
</div>

<p align="justify">O primeiro componente, <b><i>AnimationDiv</i></b>, é responsável por pesquisar somente utilizando um número de um processo específico, vale lembrar que existe uma <b><i>div animada</i></b> em volta desse componente.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/06.png">
</div>

<p align="justify">Já o segundo componente é responsável pela <b><i>Busca Avançada</i></b>.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/07.png">
</div>

### 3.2. Timeline
<p align="justify">Para criação da Timeline foi preciso a utilização da biblioteca <b><i>vertical-timeline-component-for-react</i></b> em sua versão <b><i>1.0.7</i></b>, abaixo está representado o principal componente da página.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/08.png">
</div>

### 3.3. WithoutProcess
<p align="justify">A página <b><i>WithoutProcess</i></b> é exibida em tela quando a api não encontrar atos que foram pesquisados pelo usuário, a página é relativamente simples.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/09.png">
</div>

## 4. Componentes
<p align="justify">A coração da estrutura do Front-end encontra-se na pasta <b>src</b>, e dentro dela temos diversas outras pastas, como podemos ver abaixo.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/10.png">
</div>
<p align="justify">Vamos entender do que se trata cada pasta desse Front-end, os outros arquivos serão comentados em futuras sessões.</p>
<ul>
    <li><h3>assets</h3> Trata-se de todos os arquivos de imagem que a aplicação consome, com exceção dos ícones, esses são utilizados por meio de bibliotecas exteriores.</li>
    <li><h3>components</h3> Trata-se de todos os componentes que são utilizados para auxiliar na contrução das páginas.</li>
    <li><h3>hooks</h3> Trata-se de dados que serão utilizados por todo o código, utiliza-se o conceito de <b>context</b>, mais abaixo será melhor explicado.</li>
    <li><h3>pages</h3> Trata-se de todos as páginas disponíveis no sistema.</li>
    <li><h3>services</h3> Trata-se de arquivos responsáveis por se conectar com a api externa.</li>
    <li><h3>styles</h3> Trata-se de arquivos de estilização global.</li>
    <li><h3>utils</h3> Trata-se de funções específicas que auxiliam em partes específicas do código.</li>
</ul>

<p align="justify">Nessa sessão iremos entender os principais componentes da aplicação, na imagem abaixo conseguimos ver todos eles.</p>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/11.png">
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
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/12.gif">
</div>

## 5. Conexão com o Back-end
<p align="justify">Para se conectar com o back end utilizamos a biblioteca axios para poder fazer a conexão com a api. O arquivo responsável por fazer isso se encontra dentro da pasta <b>src</b>, na subpasta <b>service</b>.</p>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/13.png">
</div>

</p>Acima podemos ver uma URL comentada, essa é usada se quisermos utilizar o banco em localhost.</p>

## 6. Contexts
<p align="justify"><b>Context</b> é um conceito que cresceu muito nos últimos anos na comunidade <b>React.js</b>, esse é responsável por exibir dados em qualquer lugar da aplicação. Dentro da pasta <b>hooks</b> temos um <b>index</b>, esse gerencia os contexts, elém disso temos também 3 outros contexts: <b>toast</b>, <b>useAdvancedSearch</b> e <b>useProcess</b>.</p>

### 6.1. toast
<p align="justify">Responsável por renderizar mensagens de status após algum processo de falha ou sucesso, por exemplo. Podemos adicionar funcionalidades que modificam a funicionalidade desses.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/14.png">
</div>

### 6.2. useAdvancedSearch
<p align="justify">Responsável por garantir uma busca avançada efetiva, esse também se conecta com o banco para poder buscar os parâmetros de filtro que o usuário estabeleceu, basta ver a imagem abaixo.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/15.png">
</div>

### 6.3. useProcess
<p align="justify">Responsável por adicionar tipo aos parâmetros de um ato, assim como é responsável por uma série de funções que auxiliam na manipulação desses. Abaixo conseguimos ver a função responsável por salvar atos provenientes do back-end através de um número de um processo forncecido pelo usuário.</p>
<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://unb-knedle.github.io/timeline-contratos/assets/Frontend/16.png">
</div>

Data | Versão | Descrição | Autor(es) 
---- | ----------- | ------ | ---------
07/03/2022 | 1.0 | Adicionando tópicos 1 e 2| [@dansousamelo](http://github.com/dansousamelo)|
08/03/2022 | 1.1 | Adicionando tópicos 4| [@dansousamelo](http://github.com/dansousamelo)|
09/03/2022 | 1.2 | Adicionando tópicos 5 e 6| [@dansousamelo](http://github.com/dansousamelo)|