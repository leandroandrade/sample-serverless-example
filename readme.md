# sample-serverless-example

## Inicio

Instalar a dependência serverless:
```shell
npm install -g serverless
```

Executando projeto localmente:
```shell
npm run dev
```

## Comandos serverless

Lista templates:
```shell
serverless create --template
```

Criar um projeto com base em um template:
```shell
serverless create --template aws-nodejs
```

## Serviços

```
[GET] http://localhost:3000/dev/v1/heroes
[GET] http://localhost:3000/dev/v1/heroes/1
[POST] http://localhost:3000/dev/v1/heroes { "name": "Batman" }
```