# linter-template

Template repository to hold linter configurations

1 - Rode os serviços node e db com o comando docker-compose up -d --build.

2 - Acesse o conteiner do node e rode o comando npm i

2 - Ainda no container do node rode o comando npm run startdev para criar as pastas do sequelize

4 - Altere a pasta de config usando a pasta configExemple

5 - Altere o arquivo config.js com o nome do banco desejado

6 - Crie as migrate e rode o comado npm run prestart para criar o banco e suas tabelas

7 - Crie as seeds e rode o comando npm run seed para popular o banco
