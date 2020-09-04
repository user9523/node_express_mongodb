// 一个中间件本质上是一个函数

function someMiddleware(req, res, next) {}

req 用户请求
res 响应
next 执行完后继续执行下一个中间件

基础中间件
`morgan`：用于记录日志的中间件，对于开发调试和生产监控都很有用；
`bodyParser`：用于解析客户端请求的中间件，包括 HTML 表单和 JSON 请求；
`methodOverride`：为老的浏览器提供 REST 请求的兼容性支持；
`cookieParser`：用于收发 cookie；
`errorHandler`：用于在发生错误时打印调用栈，`仅在开发时使用`；
`handlebars`：用于渲染用户界面的模板引擎。

app.use(middlewareA)  use 加载中间件

`express.static`  // express 自带的静态资源中间件 express.static，用于向客户端发送图片、CSS 等静态文件。最后，我们通过获取 `env` 变量来判断是否处于开发环境，如果是的话就添加 `errorHandler` 以便于调试代码。

### 搭建路由和控制器
现在我们已经配置好了基础的中间件，但是只有主页（URL 为 /）可以访问。接下来我们将实现以下路由：

- GET /：网站主页
- GET /images/image_id：展示单张图片
- POST /images：上传图片
- POST /images/image_id/like：点赞图片
- POST /images/image_id/comment：评论图片
- 虽然 Express 的项目结构没有固定的套路，但是我们将采用经典的 MVC 模式（即 Model View Controller）来搭建我们的项目。Model 定义了数据模型，View 定义了用户界面，而 Controller 则- 定义了相应的业务逻辑。

首先创建 controllers 目录，在其中创建 home.js 文件，并定义 index 控制器如下：

```
module.exports = {
  index: function(req, res) {
    res.send('The home:index controller');
  },
};
```

每个控制器实际上都是一个 Express 中间件（只不过不需要 next 函数，因为是最后一个中间件）。这里我们暂时用 res.send 发一条文字来代表这个 controller 已经实现。

