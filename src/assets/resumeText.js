export const styleContent = [`/*
* 之前逛github，发现一个有意思的项目叫animating-resume，
* 觉得很有意思，下载下来发现是用vue写的
* so easy ，仿造它来打造我的简历吧
* 为了保证效果，最好在谷歌浏览器打开
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 换一个舒服的背景色 */
html {
  background-color: #fdf6e3
}
/* 文字离边框太近了 */
.styleEditor {
  margin: .5em;
  overflow: auto;
  width: 45vw; 
  height: 90vh;
  position: fixed; left: 0; top: 5vh;
}
/* 使用经典的OKAIDIA风格美化在线样式显示 */
.styleEditor pre{
  font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  background-color:#272822;
  color:#f8f8f2;
  text-shadow:0 1px rgba(0, 0, 0, 0.3);
  padding: .5em;
}
.token.selector{ color: #a6e22e; }
.token.property{ color: #f92672; }
.token.punctuation{ color: #f8f8f2; }
.token.function{ color: #e6db74; }

/* 接下来准备一个简历的输写面板 */
.resumeEditor{
  width: 48vw; height: 90vh; 
  position: fixed; right: 0; top: 5vh;
  background-color: #f2f2f2; color: #888888;
  padding: 2em;  margin: .5em;
  font-family:Microsoft YaHei,arial;
  overflow: auto;
}
/* 好了，我开始写简历了 */

`,
 `
/* 
 * 现在简历Markdown 格式的，
 * 使用marked工具翻译成 HTML
 */
`,
`
/* 再对 HTML 加点样式 */
.resumeEditor h2{
  display: inline-block;
  margin: 1em 0 .5em;
  color:#1abc9c;
}
.resumeEditor h3{
  margin: 1em 0 .5em;
  color:#1abc74;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
  margin-left:1em;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #2C3E50;
  color: white
} 
.resumeEditor a{  
  color:#1abc9c;
  text-decoration: none
}
`,
`
/* 最后制造一些3D效果,加上一点阴影 */
html{
  perspective: 1000px;
  min-height: 100vh;
}
.styleEditor {
  border-radius:1em;
  transform: rotateY(5deg) translateZ(-50px) ;
  box-shadow:3px 5px 11px #666
}
.resumeEditor {
  border-radius:1em;
  transform: rotateY(-5deg) translateZ(-50px) ;
  box-shadow:-3px 5px 11px #666
}
/* 任虹宇的线上简历完成~
 * 重看请f5，苹果cmd+r
 * 看烦了右上角小×关闭
 */
`];

export const resumeContent = `任虹宇
----

前端工程师，现在在**360-手机卫士**工作。

热爱编程，喜欢交流，心态积极，吃苦耐劳

技能
----

* 熟练掌握JavaScript
* 熟悉计算级网络相关知识
* 能使用nodeJs 开发
* 能使用php 开发
* 掌握基本切图技巧

工作经历
----
### 奇虎360 2015年2月—至今

1. hybrid开发
2. 后台开发
3. 官网开发
4. H5开发

链接
---- 
联系方式：13657613446

GitHub：https://github.com/gitWhatever
> 参考自[animating-resume](https://github.com/jirengu-inc/animating-resume)

> 简历配色使用[colorhexa](http://www.colorhexa.com/)搭配

>感谢！

`