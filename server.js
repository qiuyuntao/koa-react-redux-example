var koa = require('koa');
var logger = require('koa-logger');
var router = require('koa-router')();
var parse = require('co-body');

var render = require('./lib/render');

var app = koa();
app.use(logger());

var posts = [];

router.get('/', index);
router.get('/list', list);
router.get('/getArticle', getArticle);
router.post('/publish', publish);

function *index() {
  this.body = yield render('index', {});
}

function *list() {
  this.body = yield render('list', {});
}

function *getArticle() {
  var data = {
    success: true,
    posts: posts
  };
  this.body = JSON.stringify(data);
}

function *publish() {
  var post = yield parse(this);
  var id = posts.push(post) - 1;
  post.created_at = new Date;
  post.id = id;

  var data = {
    success: true,
    posts: posts
  };
  this.body = JSON.stringify(data);
}

app
  .use(router.routes())
  .listen(4000);
