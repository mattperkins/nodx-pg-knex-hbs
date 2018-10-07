require('dotenv').config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://DBUSER:DBPASS@DBHOST:DBPORT/DBNAME'
  }

};
