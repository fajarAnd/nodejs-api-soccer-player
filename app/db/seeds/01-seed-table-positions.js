const tableName = 'position';

module.exports = {
  up: async queryInterface => queryInterface.bulkInsert(tableName, [
    {
      position_code: 'GK',
      name: 'Goalkeeper',
      description: '',
    },
    {
      position_code: 'SW',
      name: 'Sweeper',
      description: '',
    },
    {
      position_code: 'CB',
      name: 'Centre Back',
      description: '(Central Centre Back / Left (off-centre) Centre Back / Right (off-centre) Centre Back). Also known as Centre Half (Central Centre Half / Left (off-centre) Centre Half / Right (off-centre) Centre Half)',
    },
    {
      position_code: 'FB',
      name: 'Left Back',
      description: '(Left Back / Right Back)',
    },
    {
      position_code: 'WB',
      name: 'Wing Back',
      description: '(Left Wing Back / Right Wing Back)',
    },
    {
      position_code: 'DM',
      name: 'Defensive Midfielder',
      description: '(Central Defensive Midfielder / Left (off-centre) Defensive Midfielder / Right (off-centre) Defensive Midfielder)',
    },
    {
      position_code: 'CM',
      name: 'Centre Midfielder',
      description: '(Central Centre Midfielder / Left (off-centre) Centre Midfielder / Right (off-centre) Centre Midfielder)',
    },
    {
      position_code: 'WM',
      name: 'Wing Midfielder',
      description: '(Left Midfielder / Right Midfielder)',
    },
    {
      position_code: 'AM',
      name: 'Attacking Midfielder',
      description: '(Central Attacking Midfielder / Left (off-centre) Attacking Midfielder / Right (off-centre) Attacking Midfielder)',
    },
    {
      position_code: 'WF',
      name: 'Wing Forward',
      description: '(Left Wing Forward / Right Wing Forward)',
    },
    {
      position_code: 'CF',
      name: 'Centre Forward',
      description: '(Central Centre Forward / Left (off-centre) Centre Forward / Right (off-centre)',
    },
  ]),
  down: queryInterface => Promise.all([
    queryInterface.bulkDelete(tableName, null, {}),
  ]),
};
