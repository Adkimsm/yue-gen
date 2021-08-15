#!/usr/bin/env node
// yue-css.js，cli主文件
// 并不是非得var，const也可以的
const cli = require("commander");
// 引用主模块，注意花括号为部分引用
const { yue_css } = require("./script.js");
const packageJSON = require("./package.json");

// 尖括号里的是参数名，到时候如果用户漏输入每个参数，commander会提示参数名，所以通常用一些具有语义化的参数名
cli
	.command(
		"generate <MarkdownFilePath> <MarkdownFileName> <OutMarkdownFileName>"
	)
	// 整个cli只有这个命令和version
	.alias("g")
	.description("build Markdown to yue.css Html.")
	.action(function (filepath, filename, outfile) {
		// 三个参数，分别对应script中的三个参数，即markdown文件目录，markdown文件名，编译后的html文件名，html会输出到markdown的目录
		// CommonJS 模块
		yue_css(filepath, filename, outfile);
	});

cli
	.version("v" + packageJSON.version)
	.description("build Markdown to yue.css Html.");

cli.parse(process.argv);

if (cli.args.length === 0) {
	cli.help();
}
