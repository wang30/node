const Url = require('url');

const a = Url.parse('https://www.zhihu.com/search?type=content&q=nginx', true);

console.log(a.pathname, a.query);