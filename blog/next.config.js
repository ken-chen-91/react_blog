const withCss = require('@zeit/next-css')           //Next.js 本身不支持  "import CSS" 的操作, 需要安装插件  @zeit/next-css  

if(typeof require !== 'undefined'){                 //固定写法
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})