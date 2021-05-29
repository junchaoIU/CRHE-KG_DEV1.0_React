![](https://www.wujunchao.top/wp-content/uploads/2021/05/图片1.png)
[![license](https://img.shields.io/badge/author-WuJunchao-purple)](https://github.com/junchaoIU/Canton-KG-React/blob/main/LICENSE)
[![license](https://img.shields.io/crates/l/rustc-serialize)](https://github.com/junchaoIU/Canton-KG-React/blob/main/LICENSE)
[![react](https://img.shields.io/badge/react-16.13.1-yellowgreen)](https://github.com/facebook/react)
[![antd](https://img.shields.io/badge/antd-3.17.0-orange)](https://github.com/ant-design/ant-design)
[![echart](https://img.shields.io/badge/echart-4.7.0-green)](https://github.com/apache/echarts)

## 🌈简介
🎉  广州革命历史事件知识图谱系统前端 V1.1.0
- 目前该系统已重构至 V2.1.0版本，还未开源（https://www.gzknowledge.cn ）
- 相对来说V1.1.0版本较为复杂，但部分可视化功能是较为创新的,V2.1.0的功能思路也是基于V1.1.0复现及创新的
- V1.1.0 版本已不再更新新功能，仅作代码维护和优化，供业界交流

## ✨功能
- 知识检索：知识检索提供广州革命历史领域的相关信息检索，同时，提供知识树并支持模糊检索功能。
- 关系检索：关系检索主要提供两个知识点之间的关系检索查询，进行任意两个知识点间关系的探索。
- 时空检索：用户可以通过检索想要了解的时间点、时间段、地点或时间点+地点，来了解该时空状况下发生的事件，通过不同的检索组合将零碎的回溯实体拼接成不同的时空线，以全方面还原大家感兴趣的时空历史片段。
- 实体回溯检索：实体回溯检索提供对人物、事件实体的时间地点历程的知识图谱二维回溯。
- 语料回溯：语料回溯基于小型自建语料数据库的进行文献语料的检索，用户在检索框检索想要了解的实体、三元组或者一些非结构化的文字记载，即可查看语料数据库中关联分数排名前十的语段。

## 🖥 兼容环境

- 现代浏览器和 IE11。
- 支持服务端可视化渲染。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Electron |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE11, Edge                                                   | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |




## ⚙目录结构
```bash
├─ public                     # 静态资源
│   ├─ logo.ico               # logo图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   ├─ assets                 # 图片 字体等静态资源
│   ├─ components             # 全局公用组件
│   ├─ config                 # 全局配置
│   │   ├─ menuConfig.js      # 导航菜单配置
│   │   └─ routeMap.js        # 路由配置
│   ├─ lib                    # 第三方库按需加载
│   ├─ mock                   # 项目mock 模拟数据
│   ├─ store                  # 全局 store管理
│   ├─ styles                 # 全局样式
│   ├─ utils                  # 全局公用方法
│   ├─ views                  # views 所有页面
│   ├─ App.js                 # 入口页面
│   ├─ defaultSettings.js     # 全局默认配置
│   └─index.js                # 源码入口
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── config-overrides.js       # 对cra的webpack自定义配置
├── deploy.sh                 # CI部署脚本
├── .travis.yml               # 自动化CI配置
└── package.json              # package.json
```

## 📦 安装

```shell
# 克隆项目
git clone https://github.com/junchaoIU/Canton-KG-React.git

# 进入项目目录
cd Canton-KG-React

# 安装依赖（不要用cnpm）
npm install

# 切换淘宝源，解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm start
```

# 🌸关于作者
🍧 Wu, Junchao 

> 有什么问题请致邮：wujunchaoIU@outlook.com,我会第一时间为你解答

- 个人博客：[🌸 春天与爱情の樱花](https://www.wujunchao.top)
- 博客园：[🌸 梦淑の博客园](http://cnblogs.wujunchao.top)
- 语雀：[🌸 CCの知识库](https://www.yuque.com/wujunchao)

> 项目的开发和维护需要花费较多的时间，如果我的项目对你有帮助，如果你对我的项目感兴趣,请帮我点个小星星star，感激！🍉





