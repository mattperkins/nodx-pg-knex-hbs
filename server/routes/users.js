var express = require('express');
var router = express.Router();

const knex = require('../db/knex') // connection to db/config
/* GET users. */
router.get('/', (req, res, next) => {
// res.render('users', { title: 'Users' });
  knex('users') // connect to db tbl
  .select() // select all rows in tbs
//then render all rows to view
//  .then(res => res.json)
  // .then(users => { 
   
.then(peach => res.send({ lime : peach }))
 
    // res.render('users', {users: users}) 
// 'users' = users.hbs // {users: users} // property and array of data from users tbl

});

module.exports = router;
