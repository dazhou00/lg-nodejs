# Node.js 前置知识

## 概述

- Node.js 不是一门编程语言，它是一个执行 JavaScript 代码的工具。工具就是可以安装在计算机操作系统之上的软件

- 浏览器和 Node.js 都内置了 JavaScript V8 Engine。它可以将 JavaScript 代码编译为计算机能够识别的机器代码

- 浏览器和 Node.js 运行 JavaScript 的区别

  - JavaScript V8 Engine 只能执行 ECMAScript, 即语言中的语法部分
  - 浏览器在 V8 ENgine 中添加了可以操作 浏览器窗口(BOM) 和 HTML(DOM) 的 API
  - Node.js 中没有 BOM 和 DOM
  - Node.js 中添加了很多系统级别的 API，例如：对操作系统中的文件和文件夹进行操作、获取系统信息等

- Node.js 可以用来构建服务器端应用和创建前端工程工具

## 系统环境变量

> 系统环境变量是指在操作系统级别上定义的变量，变量中存储了程序运行时所需的参数

**环境变量 PATH:**

- 存储的都是应用程序的路径
- 在操作系统运行一个应用程序又没告诉程序的完整路径，此时操作系统会先从当前文件夹查找，查找不到再去 PATH 中指定的路径查找

## 全局对象

- 在 Node.js 环境中没有 window 对象
- Node.js 环境中的全局对象 为 global
- 在 Node.js 环境中声明的变量不会被添加到全局对象中，只能在当前文件中使用
