const moment = require('moment');

const formattingGeneralDate = (date = new Date()) => moment(date).utcOffset('+07:00').format();

module.exports = {
  formattingGeneralDate,
};
