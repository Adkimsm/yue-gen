# yue-css

[简体中文版](./README-CN.md)

> A friendly reminder, my English is not very good, so I use machine translation of this article.

## Installation

Use npm to install:

```sh
npm install -g yue-gen
```

## Use

If you have a Markdown file whose path is "D:\yue\readme.md" and you want to compile it into HTML, run this command.

```sh
yue-gen g D:\yue\ readme.md index.html
```

Then, yue.css will translate the contents of readme.md to HTML and write it to index.html. This index.html will be created in D:\yue\.

While translating, the style file in yue.css will be transferred to a style tag in index.html, so you can just write Markdown without worrying, and leave everything about HTML to yue-gen.
