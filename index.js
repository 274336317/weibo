const Koa = require('koa');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const staticMiddleware = require('koa-static');
const errorHandler = require('./middlewares/errorHandler');
const authenticate = require('./middlewares/authenticate');
const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');

const app = new Koa({
    keys: ['KGJ6NLxqOkYCNr1h']
});

render(app, { // 使用ejs中间件
    root: './templates', // 模板目录
    layout: 'layout', // 关闭模板布局
    viewExt: 'ejs'
});
// 中间件
app.use(errorHandler);
app.use(staticMiddleware(__dirname + '/public'));
app.use(bodyParser());
app.use(authenticate);
// 路由
app.use(homeRoute.routes()).use(homeRoute.allowedMethods());
app.use(userRoute.routes()).use(userRoute.allowedMethods());

app.listen(8080, () => {
    console.log('listen on 8080')
});