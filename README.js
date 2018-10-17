## start postgres server
## cd server/ yarn start
## cd client/ yarn start


* postgres for db
* knex.js for migrations, seeds and queries
* express.js for routes rendering
* handlebars.js for server-side view templates
* bstrap for UI
* react for client view
 
```
$ express --hbs
$ createdb lemon (db)
$ npm i -g knex
$ yarn add knex pg
$ knex init
```
.env = DBUSER:DBPASS@DBHOST:DBPORT/DBNAME
server/knexfile.js :
development:{ 
  connection: 'postgres://username:password@localhost:5432/DBNAME'
}

```
$ knex migrate:make lime (generate schema file for table 'lime') // not yet migrated to db
```

server/migrations/lime.js
up...{
return knex.schema.createTable('lime', (table) => {
	// id col, type serial, primary key
	table.increments(); 
	table.text('title').notNullable();
 table.integer('priority').notNullable();
 table.text('description');
 table.boolean('done').defaultTo(false).notNullable();
 table.datetime('date').notNullable();
	}
}
down...{
 return knex.schema.dropTable('lime');
}

```
$ knex migrate:latest
```

```
psql
\dt
\d lime
```

```
$ knex seed:make lime
```

server/seeds/lime.js
replace table_name with 'lime' and remove default seed entries and replace with
.then(function () {
 const limes = [
 {
  title: 'I am the very first title',
  priority: 1,
  date: new Date()
 },
 {
  title: 'I am the second title',
  priority: 2,
  date: new Date()
 }
 ]
 return knex('lime').insert(limes)
})

```
$ knex seed:run
```

```
psql
select * from lime;
```

```
server/routes/index.js lime.js
```

server/routes/lime.js
// all routes mounted from :3000/lime
title: 'lime'

server/app.js
var lime = require('./routes/lime')

app.use('/lime', lime)
$ nodemon / yarn start
:3000/lime

```
$ mkdir server/db
$ touch server/db/knex.js
```

server/db/knex.js
const environment = process.env.NODE_ENV || 'development'
console.log(environment)

```
$ node server/db/knex.js // development
$ NODE_ENV=production node server/db/knex.js // production
```

server/knexfile.js
development...,
production: {
 client: 'postgresql',
 connection: process.env.DATABASE_URL + '?ssl=true'
}

server/db/knex.js (continues...)
const config = require('../knexfile')[environment]
module.exports = require('knex')(config) // connect to db via knexfile.js module.exports = { development ... }

server/routes/lime.js (continues...)
...
express.Router()...

const knex = require('../db/knex') // connection to db

router.get('/', function(req,res,next) {
 knex('lime') // connect to db tbl
 .select() // select all rows in tbl
 // then render all rows in view
 .then(limes => {
   // 'all' = server/views/all.hbs 
   res.render('all', {limes: limes}) // property : array of data from limes tbl/db 
 })
})
module.exports = router

```
$ touch server/views/all.hbs
```

server/views/all.hbs
{{#each limes}}
 <h2>{{title}}</h2>
{{/each}}

```
:3000/lime // renders lime tbl data (rows) from db
```

server/views/layout.hbs // container for all views
... href="/stylesheets/style.css"
add bstrap cdn stylesheet 
add classes to taste

server/public/stylesheets/style.css
add classes to taste


