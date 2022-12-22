var moment = require('moment');
require('moment/locale/ru');
let day = moment();
    moment.locale('ru');
    console.log(day.format('dddd'));
    