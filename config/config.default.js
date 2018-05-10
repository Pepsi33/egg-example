module.exports.keys = "pepsi33";

// 添加 view 配置
module.exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

// 添加 news 的配置项
module.exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// add middleware robot
module.exports.middleware = [
  'robot'
];
// robot's configurations
module.exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};