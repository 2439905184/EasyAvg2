const bg_dir = "bg/"
const ch_dir = "ch/"
const bgm_dir = "bgm/"

const Bg = document.getElementById("bg")
const Ch = document.getElementById("ch")
const Dialog = document.getElementById("dialog")
const Bgm = document.getElementById("bgm")

const script  = `@bgm slow_time.ogg 
@dialog 欢迎使用EasyAvg2.js
@dialog 还是使用原生的网页dom api
@dialog 接下来切换角色表情
@ch c03.png
@dialog 这个版本比初代版本简化了不少
@dialog 接下来切换背景
@bg streetNight.jpg
@dialog 我可以说没有哪个人的引擎比我的引擎还简单了
@dialog 目前引擎以MIT协议开源
@dialog 注意，引擎内素材只支持个人学习技术用途，不能商用
@dialog 欢迎各位前来参观阅读代码和学习技术
@dialog 建议使用vscode进行代码编写
@dialog 目前这个引擎不会支持太多功能，想要补充功能的，可以直接在core.js添加对应的js代码
@dialog 制作日期,2024.10.10
`
// 代码执行器内部使用
var eval_index = 0
var max_index = 0

function split_script(script)
{
    return script.split("\n")
}
// 解释器
function eval_line(script)
{
    var command = script.split(" ")[0]
    var sp = script.split(" ")
    if(command == "@bg")
    {
        engine.Bg(Bg,bg_dir + sp[1])
    }
    else if(command == "@ch")
    {
        engine.Ch(Ch,ch_dir + sp[1])
    }
    else if(command == "@dialog")
    {
        engine.Dialog(Dialog,sp[1])
    }
    else if(command == "@bgm")
    {
        engine.Bgm(Bgm,bgm_dir + sp[1])
    }
    else if(command == "@stopbgm")
    {
        engine.StopBgm(Bgm)
    }
    else if(command == "@js")
        {
            eval(sp[1])
        }
    
}
console.log("welcome EasyAvg2.js!")
const engine = new EasyAvg()
var sp_script = split_script(script)
max_index = sp_script.length
console.log(sp_script)

// main
// engine.Ch(Ch,ch_dir +"k07.png")
document.addEventListener('click', function(event) {
    if(eval_index < max_index)
    {
        eval_line(sp_script[eval_index])
        eval_index += 1
    }
    else if(eval_index == max_index)
    {
        alert("脚本执行完毕,返回")
        eval_index = 0
    }
  });

