import chalk from 'chalk';

import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user';

import {
  DATABASE_NAME,
  SQL_DIALECT,
  SQL_HOSTNAME,
  SQL_PASSWORD,
  SQL_USERNAME,
} from '../constants/env';

const connection = new Sequelize({
  dialect: SQL_DIALECT as Dialect,
  host: SQL_HOSTNAME,
  username: SQL_USERNAME,
  password: SQL_PASSWORD,
  database: DATABASE_NAME,
  models: [User],
  logging: sql => {
    console.log(
      chalk.yellow('[ mssql ]'),
      sql,
      chalk.blue('at'),
      chalk.magenta(new Date().toLocaleTimeString())
    );
  },
});

export { connection };
