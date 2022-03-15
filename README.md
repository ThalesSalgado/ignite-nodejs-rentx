Curso Ignite NodeJS - Rocketseat

- Comandos e libs usadas durante curso:
  - Comandos (iniciando projeto):  
    yarn init -y
    yarn add express
    yarn add @types/express -D
    yarn add typescript -D
    yarn tsc --init
    yarn tsc
    node dist/server.js

  - Fazer para o VSCode formatar o código sempre que salvarmos algum arquivo é adicionar uma opção chamada codeActionsOnSave nas configurações:
```
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
```

  - Eslint
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

    - Criar na raiz do projeto um arquivo .eslintignore, com conteudo abaixo:
      ```
      /*.js
      node_modules
      dist
      ```

    - Começar a configuração do arquivo que foi gerado na inicilização do ESLint, o .eslintrc.json:
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
```
        "settings": {
          "import/resolver": {
            "typescript": {}
          }
        }
```

  - Prettier
    yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
    - Com a instalação feita vamos modificar o arquivo .eslintrc.json adicionando no "extends" as seguintes regras:
      "prettier",
      "plugin:prettier/recommended"
    - Nos "plugins" vamos adicionar apenas uma linha com:
      "prettier"
    - E nas "rules" vamos adicionar uma linha indicado para o ESLint mostrar todos os erros onde as regras do Prettier não estiverem sendo seguidas:
      "prettier/prettier": "error"

  - Comandos gerais
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
    - Site: typeorm.io
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

  - Jest - Testes
    yarn add jest @types/jest -D
    yarn add jest -D
    yarn add @types/jest -D
    - Config
      yarn jest --init
      - ? Would you like to use Jest when running "test" script in "package.json" ?
        yes
      - ? Would you like to use Typescript for the config file ?
        yes
      - Choose the test enviromnet that will be used for testing
        node
      - ? Do you want Jest to add coverage reports ?
        no !!
      - ? Which provider should be used to instrument code for coverage ?
        v8
      - Automatically clear mock calls and instances between every test ?
        yes

    yarn add ts-jest -D

      - Modificar jest.config.ts:
        - Descomentar e definir o valor de "preset": 
          preset: "ts-jest",
        - Descomentar e definir o valor de "testMatch": 
          testMatch: ["**/*.spec.ts"],
        - Descomentar e definir o valor de "bail": 
          bail: true,

  - Dependências refatoração - Remapeando dependencias - Lib tsconfig-paths
    yarn add tsconfig-paths -D
    - Configurando tsconfig-paths para iniciar a app com tsconfig:
      - Modificar "scripts" no arquivo "package.json":
      - No arquivo "jest.config.ts", ajustar para os testes reconhecerem as importações:
        - Importar no começo do arquivo:
          import { pathsToModuleNameMapper } from "ts-jest/utils";
          import { compilerOptions } from "./tsconfig.json";
        - Mudar propriedade "moduleNameMapper" da para seguinte forma:
          moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
            prefix: "<rootDir>/src/",
          }),

  - DayJs - Datas
    yarn add dayjs
      
        













- BOs
  - "Error: ENOSPC: System limit for number of file watchers reached, watch '/tmp/.ts-nodeJeJ5LD/compiled/6885372817756528.req':"
    - Descricao do problema: Listen uses inotify by default on Linux to monitor directories for changes. It's not uncommon to encounter a system limit on the number of files you can monitor. For example, Ubuntu Lucid's (64bit) inotify limit is set to 8192.
  Solucoes:
    - 1 opcao:
      - You can get your current inotify file watch limit by executing: ```cat /proc/sys/fs/inotify/max_user_watches```
      - You can set a new limit temporary with:
        ```sudo sysctl fs.inotify.max_user_watches=524288```
        ```sudo sysctl -p ```
      - If you like to make your limit permanent, use:
        ```echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf```
        ```sudo sysctl -p ```
    - 2 opcao?
      - Exclude specific workspace directories from the VS Code file watcher with the files.watcherExclude setting. The default for files.watcherExclude excludes node_modules and some folders under .git, but you can add other directories that you don't want VS Code to track.
      ```
        "files.watcherExclude": {
          "**/.git/objects/**": true,
          "**/.git/subtree-cache/**": true,
          "**/node_modules/*/**": true
        }
      ```
  
  - Request da lib do Express não possui atributo "user":
    1) Criar uma pasta "@types" dentro de "src"
    2) Criar uma pasta "express" dentro de "@types"
    3) Criar arquivo "index.d.ts"
        - Conteúdo do arquivo: 
        declare namespace Express {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          export interface Request {
            user: {
              id: string;
            };
          }
        }
    4) Alterar no arquivo "tsconfig.json", adicionar dentro de "compilerOptions":
        "typeRoots": [
          "./src/@types",
          "./node_modules/@types"
        ]
    Link: https://app.rocketseat.com.br/h/forum/node-js/5f0a4065-acaf-4de0-963f-28d5306ced16
