const tableName = 'team';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(tableName, [
    {
      name: 'Real Madrid',
      description: '',
    },
    {
      name: 'Barcelona',
      description: '',
    },
    {
      name: 'Manchester United',
      description: '',
    },
    {
      name: 'Liverpool',
      description: '',
    },
    {
      name: 'Manchester City',
      description: '',
    },
  ]),
  down: (queryInterface) => Promise.all([
    queryInterface.bulkDelete(tableName, null, {}),
  ]),
};
