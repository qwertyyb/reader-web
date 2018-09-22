# 瞎扯·如何正确的吐槽
内容来源于[知乎日报](http://daily.zhihu.com/ "知乎日报")的瞎扯栏目，来学习如何正确的吐槽。

__Disclaimer - 声明__  
*Zhihu* is a trademark of *Zhihu. Inc*. This app is not created nor endorsed by Zhihu Inc. All the information and content accessible through Zhihu Daily Purify are subject to Zhihu's copyright and terms of use. This is a free app and does not charge for anything. All content are available for free from [Zhihu](http://www.zhihu.com).

『知乎』是 *知乎. Inc* 的注册商标。本软件与其代码非由知乎创作或维护。软件中所包含的信息与内容皆违反版权与知乎用户协议。它是一个免费软件，使用它不收取您任何费用。其中的所有内容均可在[知乎](http://www.zhihu.com)获取。

## API Reference - API 分析
[知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

## Dependency - 依赖
- axios^0.17.0,
- babel-preset-es2015^6.24.1,
- vux^2.9.2,
- vue^2.2.2,
- vue-router^2.2.0
- nativeShare^2.1.3
- vue-scroller^2.2.4

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Question 问题  
- 关于知乎图片防盗链的解决方法  
在 `HTML` 的 `head` 中添加如下代码即可
```
<meta name="referrer" content="never">
```
- 关于跨域问题的解决方法  
代理：https://github.com/xCss/JsonBird/wiki
