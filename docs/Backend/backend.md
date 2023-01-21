## 1. Tecnologia

A tecnologia escolhida foi o *Flask*, que é um pequeno framework web escrito em python.
O projeto utiliza também *SQLAlchemy*, uma biblioteca de mapeamento objeto-relacional SQL em código aberto desenvolvido para a linguagem de programação Python.
Com ela é possível acessar facilmente um banco de dados SQL utilizando python.

## 2. Aplicação Backend

A aplicação é composta pela pasta api e o arquivo manage.py, onde a aplicação é criada e tem uma função onde o banco de dados é recriado com os comandos drop, create e commit.

![image](https://user-images.githubusercontent.com/35047444/158874377-805fa889-2b1c-484a-964c-6c06ed816de1.png)

### 2.1 API

Na pasta api encontramos o config.py, que é o arquivo de configuração e as pastas: models, resources e timeline.

![image](https://user-images.githubusercontent.com/35047444/158875096-61499454-a2eb-4834-a73e-ee8d01535bf9.png)

É na pasta models que é feito a modelagem do banco e na pasta resources as rotas para a aplicação.

### 2.2 Models

Aqui encontramos apenas o arquivo atos.py, onde foi definido cada tabela da aplicação. São elas: certame, tipo_ato e atos.
A tabela atos é a mais populosa, contendo as chaves estrangeiras da tabela certame e tipo_ato. É ela que agrupa todos os atributos de um ato.

### 2.3 Resources

Aqui encontramos apenas o arquivo atos.py, onde foi definido cada rota para a aplicação. São elas:

- **get_act**:
É responsável por retornar um ato a partir do numero de processo dele, que deverá ser passado na rota.

- **get_all_type_acts**:
É responsável por retornar todos os tipos de atos.

- **get_advanced_search**:
É responsável pelas pesquisas avançadas, aqui ele filtra os atos por tipo, numero de processo, data de inicio e fim.