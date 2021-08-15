# yue-css

[美式英语版](./README.md)

> 友情提示，我英文不是很好，所以采用机器翻译本文。

## 安装

使用 npm 来安装:

```sh
npm install -g yue-gen
```

## 使用

如果你有一个Markdown文件，它的路径是 "D:\yue\readme.md"，你想把它编译成HTML，运行这个命令：

```sh
yue-gen g D:\yue\ readme.md index.html
```

然后，yue.css 会将readme.md中的内容转译为HTML，再写入index.html。这个index.html会创建在 D:\yue\。

在转译的同时，yue.css中的样式文件会一并转移到index.html中的一个style标签，所以你只需安心写Markdown，关于HTML的一切交给yue-gen。
