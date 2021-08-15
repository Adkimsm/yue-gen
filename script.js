// script.js，功能主文件，指定cli不同参数的行为
// 注意exports，这是node的commonjs使用的模块导出语句
// 声明导出很像声明变量
exports.yue_css = function (path, file, outfile) {
	// 三个参数，分别对应cli中的三个参数，即markdown文件目录，markdown文件名，编译后的html文件名，html会输出到markdown的目录
	// 导入node自带的fs文件模块
	let fs = require("fs");

	// 涉及Markdown，这里采用比较规范严谨的markdown-it
	// 注意这个连续声明使用逗号而非分号
	let MarkdownIt = require("markdown-it"),
		md = new MarkdownIt(); //这里才是分号，标志声明结束

	// 采用同步读取Api，将文件内容保存为变量
	let mdData = fs.readFileSync(path + file, "utf-8");

	// 虽然用了try/catch，不过貌似无法捕获异常，可能是因为我没有抛出err
	try {
		// 这些console其实完全是为了装13~~（当然也有让用户知道程序运行成功了以及让给我知道bug出在哪一步的功能）~~
		console.log("Compiling File...");

		// markdown-it的render函数，将编译后的html存在变量中
		let html_marked = md.render(mdData);

		//这是规定html的内容，把html后的markdown和yue.css的内容直接加进html里。
		let data = `<style type="text/css">body{margin: 0;padding: 0.4em 1em 6em;background: #f9f9f7;}.yue {max-width: 650px;margin: 0 auto;}.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em 0}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0 none;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em 0;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;font-size:.96em;background-color:#f9f9f7;padding:1px 2px;border:1px solid #eee;border-radius:3px;font-family:Menlo,Monaco,Consolas,"Courier New",monospace;word-wrap:break-word}.yue pre{margin:1.64em 0;padding:7px;border:none;border-left:3px solid #dadada;padding-left:10px;overflow:auto;line-height:1.5;font-size:.96em;font-family:Menlo,Monaco,Consolas,"Courier New",monospace;color:#4c4c4c;background-color:#f9f9f7}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:0 0;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(even){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:0 0}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}</style><link rel="stylesheet" href="./yue.css"><body><div class="yue">${html_marked}</div></body>`;

		console.log("Done.");

		console.log("Writing File...");

		// 同步写出文件api

		fs.writeFileSync(path + "/" + outfile, data, "utf-8");

		// 提示用户文件存在了哪里

		console.log("Writed File At " + path + outfile);

		console.log("Done.");
	} catch (e) {
		// catch没啥用
		console.log("[INFO] 出现 Error :");
		console.log("[ERROR] " + e);
		return;
	}
};
