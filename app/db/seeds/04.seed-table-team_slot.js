const tableName = 'team_slot';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(tableName, [
    {
      team_id: 1,
      position_code: 'GK',
      player_type: 'main',
    },
    {
      team_id: 1,
      position_code: 'FB',
      player_type: 'substitute',
    },
    {
      team_id: 2,
      position_code: 'CF',
      player_type: 'main',
    },
    {
      team_id: 4,
      position_code: 'CF',
      player_type: 'main',
    },
  ]),
  down: (queryInterface) => Promise.all([
    queryInterface.bulkDelete(tableName, null, {}),
  ]),
};
