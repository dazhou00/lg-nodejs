# 模块系统

## 概述

- Node.js 环境中，默认支持模块化系统
- 遵循 CommonJS 规范
- 一个 JavaScript 文件就是一个模块；在模块文件中定义的变量和函数默认只能在模块文件内使用，如果需要在其他文件中使用，必须将其进行导出

## 模块导出

- 每一个模块文件都存在一个 module 对象，保存了当前模块的相关信息
- 在模块对象中存在一个 exports 属性，值是一个对象
- 模块内部需要被导出的成员都应存储在 exports 中

```js
module: {
  exports: {
  }
}
```

## 模块导入

- 在文件中 通过 require 方法引入模块，改方法的返回值就是对应模块的 module.exports 对象
- 在导入时， .js 后缀可以省略
- require 方法 输入同步导入模块

## 模块包装函数

- 在模块文件执行之前，模块文件中的代码会被包裹在模块包装函数中，这样每个模块文件中的代码都拥有自己的作用域，模块外部就不能访问模块内部的成员了

```js
(function (exports, require, module, __filename, __dirname) {
  // entire module code lives here
});
```

- 从包装函数中看出 module 和 require 实际时模块内部成员
- `__filename`: 当前模块文件名称
- `__dirname`: 当前文件所在路径
- exports: 引用地址 指向了 module.exports

## 内置模块

- path: 模块内部提供了一下和路径操作相关的方法
- file system: 文件操作系统，提供了和操作文件相关的方法
- 在引用内置模块时，使用的是模块的名字，不需要加路径
