const tableName = 'player';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    player_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    team_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'team',
        },
        key: 'team_id',
      },
    },
    position_code: {
      allowNull: false,
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: 'position',
        },
        key: 'position_code',
      },
    },
    full_name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    dob: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    nationality: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    height: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    weight: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  }),
  down: queryInterface => queryInterface.dropTable(tableName),
};
