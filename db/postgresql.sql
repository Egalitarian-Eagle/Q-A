const Pool = require('pg').Pool
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'sdc',
  password: 'root',
  port: 5432,
});

CREATE TABLE photos(
  id int primary key auto_increment,
  url varchar(20),
);

CREATE TABLE answers(
  id int primary key auto_increment,
  body varchar(100),
  date date,
  answerer_name varchar(10),
  helpfulness: SMALLINT default 0,
  foreign key (id) REFERENCES photos(id);
)

CREATE TABLE questions(
  id int primary key auto_increment,
  product_id SMALLINT,
  foreign key(id) REFERENCES answers(id),
)