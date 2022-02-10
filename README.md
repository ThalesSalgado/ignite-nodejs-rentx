yarn init -y

yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn tsc --init
  yarn tsc
  node dist/server.js

```
Fazer para o VSCode formatar o código sempre que salvarmos algum arquivo é adicionar uma opção chamada codeActionsOnSave nas configurações:

"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}

Eslint

  yarn add eslint -D
  yarn eslint --init
    - Após inicializar o eslint, algumas perguntas serão feitas para configurar: (as respostas podem variar de acordo com necessidade)
      - 1) How would you like do use Eslint? R: To check syntax, find problems and enforce code style
      - 2) What type of modules does your project use? R: Javascript modules (import/export)
      - 3) Which framework does your project use? R: None of these
      - 4) Does your project use TypeScript? R: Yes
      - 5) Where does your code run? R: Node
      - 6) How would you like to define a style for your project? R: Use a popular style guide
      - 7) Which style guide do you want to follow? R: Airbnb
      - 8) What format do you want your config file to be in? R: JSON
      - 9) Would you like to install them now with npm? R: No (porque estamos usando yarn nesse projeto)
        Rode o comando abaixo para instalar os pacotes do passo 9:
        yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
  
  yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript

- criar na raiz do projeto um arquivo .eslintignore, com conteudo abaixo:
/*.js
node_modules
dist

- começar a configuração do arquivo que foi gerado na inicilização do ESLint, o .eslintrc.json:
  - adicionar dentro de "env" a linha:
     "jest": true
  - ainda dentro de "env", verifique se a primeira linha está como "es2020": true
  - adicionar dentro de "extends" a linha:
     "plugin:@typescript-eslint/recommended"
  - precisamos configurar o plugin que instalamos para que seja usado pelo ESLint. Para isso, adicione o seguinte dentro de "plugins":
     "eslint-plugin-import-helpers"
  - em seguida, adicionamos dentro de "rules" as seguintes configurações:
      {regras}
  - por fim, para que o Node.js consiga entender arquivos Typescript é necessário acrescentar uma configuração adicional nas importações. basta adicionar logo abaixo das "rules" no .eslintrc.json o seguinte:
      "settings": {
        "import/resolver": {
          "typescript": {}
        }
      }
```

```
Prettier

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

- Com a instalação feita vamos modificar o arquivo .eslintrc.json adicionando no "extends" as seguintes regras:
  "prettier",
  "plugin:prettier/recommended"
- Nos "plugins" vamos adicionar apenas uma linha com:
  "prettier"
- E nas "rules" vamos adicionar uma linha indicado para o ESLint mostrar todos os erros onde as regras do Prettier não estiverem sendo seguidas:
  "prettier/prettier": "error"
```

yarn add ts-node-dev -D

yarn add uuid
yarn add @types/uuid -D

- Multer: upload arquivo
yarn add multer
yarn add @types/multer -D

- CSVParse
yarn add csv-parse

- Swagger: documentacao
yarn add swagger-ui-express
yarn add @types/swagger-ui-express -D

- Docker: subindo app em container
docker build -t rentx .
docker run -p 3333:3333 rentx

docker ps
docker ps -a
docker images
docker rm {idContainer || nomeContainer}
docker stop {idContainer || nomeContainer}
docker start {idContainer || nomeContainer}
docker exec -it {idContainer || nomeContainer} /bin/bash
docker logs {idContainer || nomeContainer} -f

docker-compose up -d
docker-compose down
docker-compose stop
docker-compose start

docker exec {nomeContainer} cat /etc/hosts

- TypeORM: 
  - site: typeorm.io

  yarn add typeorm reflect-metadata
  yarn add pg
    npm install mysql --save
    npm install oracledb --save

  - Alterar tsconfig.json: (passar para true, descomentar, as linhas abaixo)
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,

  yarn typeorm migration:create -n CreateCategories
  yarn typeorm migration:run
  yarn typeorm migration:revert

- TSyringe:
  yarn add tsyringe

  - Alterar tsconfig.json: (ja deve ter sido feito ao configurar typeorm) (passar para true, descomentar, as linhas abaixo)
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
  
  - Import Reflect polyfill: (ja deve ter sido feito esse passo)
    import "reflect-metadata";

- BCrypt
  yarn add bcrypt
  yarn add @types/bcrypt -D

- JWT
  yarn add jsonwebtoken
  yarn add @types/jsonwebtoken -D

- Express Async Error - Tratando Excecoes
  yarn add express-async-errors