/* eslint-disable func-names */
module.exports = (sequelize, pathFile) => {
  const team = sequelize.import(pathFile);
  team.associate = (models) => {
    models.team.hasMany(models.player, {
      foreignKey: 'teamId',
      targetKey: 'teamId',
    });
  };
  return team;
};
