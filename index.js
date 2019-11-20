const sequelize = require('./shared/sequelize');

sequelize.import('./models/comment');
sequelize.import('./models/praise');
sequelize.import('./models/follow');
sequelize.import('./models/user');
sequelize.import('./models/weibo');

sequelize.sync({force: true}).catch((err) => console.error(err)).finally(() => sequelize.close());
