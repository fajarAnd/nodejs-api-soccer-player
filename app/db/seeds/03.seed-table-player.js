const tableName = 'player';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(tableName, [
    {
      team_id: 1,
      position_code: 'GK',
      full_name: 'Thibaut Courtois',
      dob: '1992-05-11',
      nationality: 'Belgium',
      height: '200',
      weight: '96',
    },
    {
      team_id: 1,
      position_code: 'FB',
      full_name: 'Daniel Carvajal Ramos',
      dob: '1992-11-01',
      nationality: 'Madrid',
      height: '73',
      weight: '173',
    },
    {
      team_id: 2,
      position_code: 'CF',
      full_name: 'Lionel Messi',
      dob: '1987-11-01',
      nationality: 'Argentina',
      height: '73',
      weight: '170',
    },
    {
      team_id: 4,
      position_code: 'CF',
      full_name: 'Mohamed Salah',
      dob: '1992-05-29',
      nationality: 'Egypt',
      height: '73',
      weight: '175',
    },
  ]),
  down: (queryInterface) => Promise.all([
    queryInterface.bulkDelete(tableName, null, {}),
  ]),
};
