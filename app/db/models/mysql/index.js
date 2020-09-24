/* eslint-disable */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const includes = require('lodash/includes');
const replace = require('lodash/replace');

const basename = path.basename(__filename);
const config = require('../../datasource/mysql');

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(config.use_env_variable, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let fileDefined = '';
fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const fullPath = path.join(__dirname, file);
    const isAssociate = includes(file, '.associate.js');
    if (isAssociate) {
      const repFile = replace(file, '.associate', '');
      const associateModel = require(fullPath)(sequelize, path.join(__dirname, repFile));
      fileDefined = repFile;
      db[associateModel.name] = associateModel;
    }

    if (!isAssociate && fileDefined !== file) {
      const model = sequelize.import(fullPath);
      db[model.name] = model;
    }
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
