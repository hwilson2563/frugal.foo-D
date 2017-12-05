const pg = require('pg');
const url = require('url');

try{
    //when not running heroku, this will load the .env file.
    require('dotenv').config();
} catch (e) {
    //when running with heroku, dotenv doesn't need to be available.
}
console.info("DATABASE_URL:", process.env.DATABASE_URL);
const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(':');

const config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: params.hostname !== 'localhost'
};

module.exports = new pg.Pool(config);