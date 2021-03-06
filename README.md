# swagger-es6-starter-kit
swagger es6 starter kit

Features
 - Precommit function with husky
 - Async / await
 - Dotenv
 - Sequelize with MySQL
 - Eslint with standar rules
 - Swagger-ui
 - Nodemon
 - Yarn

## Start

Start server with out build project
```bash
 $ npm run start
```

Run dev env with nodemon
```bash
 $ npm run dev
```

Open swagger editor
```bash
 $ npm run editor
```

Setup .env file
```bash
 $ npm run setup
```

Lint Javascript code with standard rules
 Open swagger editor
```bash
 $ npm run lint
```

Automatically fix lint problems
 Open swagger editor
```bash
 $ npm run lint:fix
```

Build project in dist folder
 Open swagger editor
```bash
 $ npm run build
```

Run test
 Open swagger editor
```bash
 $ npm run test
```

## Install from source

First, clone the project:

```bash
  $ git clone git@github.com:alexandre-garrec/swagger-es6-starter-kit.git <my-project-name>
  $ cd <my-project-name>
```

Then install dependencies and check to see it works. It is recommended that you use Yarn for deterministic installs, but npm install will work just as well.
```bash
  $ yarn install    # Install project dependencies
  $ yarn start      # Compile and launch (same as `npm start`)
```

## Application Structure

```
 |-- api',
 |   |-- controllers',
 |   |   |-- user.js',
 |   |-- models',
 |   |   |-- User.js',
 |   |-- security',
 |   |   |-- securityHandlers.js',
 |   |-- swagger',
 |   |   |-- swagger.yaml',
 |   |-- utils',
 |       |-- node.js',
 |       |-- swagger.js',
 |-- config',
 |   |-- config.js',
 |   |-- db.js',
 |   |-- default.yaml',
 |-- setup',
 |   |-- .sample_env',
 |   |-- index.js',
 |-- test',
     |-- api',
         |-- controllers',
         |   |-- README.md',
         |   |-- hello_world.js',
         |-- helpers',
             |-- README.md',
```
## Todo

- [x] lint
- [x] babel-node configuration
- [ ] test in es6
- [ ] remove config file
- [ ] setup in folder