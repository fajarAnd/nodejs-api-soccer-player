const tableName = 'team_slot';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    team_slot_id: {
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
    player_type: {
      allowNull: false,
      type: Sequelize.ENUM('main', 'substitute'),
      defaultValue: 'main',
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
  down: (queryInterface) => queryInterface.dropTable(tableName),
};
