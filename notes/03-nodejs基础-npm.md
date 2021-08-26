# NPM

## 概述

**Node.js 软件包：**

- 每一个基于 Node.js 平台开发的应用程序都是 Node.js 软件包
- 所以 Node.js 软件包都被托管在 www.npmjs.com 中

**什么是 NPM：**

- Node Package Manager, Node.js 软件包管理器，随 Node.js 一起被安装
- 将 Node 软件包添加到应用程序中并对其进行管理

## package.json

- 每一个软件包必须包含一个 package.josn 文件
- 它是应用程序的描述文件，包含和应用程序相关的信息
- 生成 package.json 文件

```powershell
#
npm init
# 快速创建
npm init --yes

```

```json
{
  "name": "base",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 下载软件包

- 在应用程序根目录执行命令 `npm install <pkg>` 或者 `npm i <pkg>`

```powershell
  npm install lodash
```

- 软件包下载完成：
  - 软件包会被存储在 node_modules 文件夹中
  - 软件包会被记录在 package.json 文件中，包含包名以及版本号
  - 软件包以及软件包的依赖包的下载地址及版本会被记载到 package-lock.json 文件中

## 使用软件包

- require 方法引入第三方软件包只需要使用软件包的名字
- require 方法会自动去 node_modules 文件中进行查找

## 语义版本控制

- 版本号规范

  - Major Version 主要版本： 添加新功能（破坏现有 API） -> 6.0.0
  - Minor Version 次要版本： 添加新功能（不会破环现有 API，在现有 API 的基础上进行添加）-> 5.13.0
  - Patch Version 用于修复 bug -> 5.12.6

- 版本号更新规范
  - `^5.12.5` 主要版本不变，更新次要版本和补丁版本
  - `~5.12.5` 主要版本和次要版本不变，更新补丁版本
  - `5.12.5` 使用确切版本，即主要版本、次要版本、补丁版本固定

## 项目依赖 vs 开发依赖

**项目依赖：** 在应用运行过程中安装的依赖软件包，例如 lodash、mondoose
**开发依赖：** 在应用开发阶段使用，在生产环节不需要使用的依赖软件包，例如 TypeScript 中的类型声明文件

- 在 package.json 文件中

  - 项目依赖被存储在 dependencies 对象中
  - 开发依赖存储在 devDependencies 中

- 下载开发依赖，要在命令后面加上 `--save-dev` 或 `-D`

- 在开发环境中下载所有依赖软件包：`npm install`

## 全局软件依赖包

- 软件包类型
  - 应用程序软件包
    - 以 API 形式存在，用于实现应用中的业务功能，在应用中的模块文件中进行导入使用
  - 命令工具软件包
    - 以命令的形式存在，用于对应用中文件的操作，在命令行工具中通过命令的方式使用

## 全局安装和本地安装

- 本地安装
- 将软件包下载到应用根目录下的 node_modules 文件中，软件包只能在当前应用中使用

- 全局安装

  - 将软件包下载到操作系统的指导目录，可以在任何应用中使用
  - 通过 `-g` 选项将软件包安装到全局，`npm install <pkg> -g`
  - 查看全局软件包安装的位置：`npm root -g`

- nodemon

  - 命令工具软件包，可以监控文件的变化，自动重新执行文件

- npm-check-updates
  - 强制更新
  - 可以查看应用中有哪些软件包过期，可以强制更新 package.json 文件中软件包的版本
  - 更新 `ncu -u`
  - 更新完成需要重新执行 `npm install`

## npx 命令

- npx 是 npm 软件包提供的命令，
- 是 node.js 平台下软件包执行器
- 临时安装软件包执行后删除软件包
- 执行本地安装的软件包

## 配找入口文件的作用

- 应该程序执行的起点，启动应用程序时执行的文件
- 通过 `node 应用文件夹名` 命令启动应用，node 命令 会执行 package.json 文件中 main 字段指定的 入口文件；如果没有指定，则执行 index.js

## 模块查找规则

- 指定查找路径的情况下 `require('./server')`

  - 查找 server.js
  - 查找 server.json
  - 查找 server 文件夹，查看入口文件（package.json -> main）
  - 查找 server 文件夹 中的 index.js 文件

- 没有指定查找路径的情况
  - 查找 当前文件下 node_modules
  - 查找 上一级 文件夹下的 node_modules
  - 一直查找到计算机目录下的 node_modules
