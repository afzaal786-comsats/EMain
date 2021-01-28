## Building REST API in Node/Express App using Sequelize,Postgres

This Repository is building REST API Design in Node/Express App using Sequelize and Postgres.

### PreRequisites
- [Postgres](https://www.postgresql.org/download/)
- [Node](https://nodejs.org/en/download/)

### Setup
```
 $ npm install
 $ node_modules/.bin/sequelize init
```
Sequelize init will creat a folder `config`,`controller`,`migrations` and `models
```

Create a Database `ecommerce` in Postgres Dashboard

To Create Migration 
sequelize migration:create --name name_of_your_migration

To Run Migration
sequelize db:migrate
```
$ node_modules/.bin/sequelize db:migrate      
```

#### To Run Application

```
$ npm run dev
```
