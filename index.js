const bg_dir = "bg/"
const ch_dir = "ch/"
const bgm_dir = "bgm/"

const Bg = document.getElementById("bg")
const Ch = document.getElementById("ch")
const Dialog = document.getElementById("dialog")
const Bgm = document.getElementById("bgm")


var chapter_index = 0
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
var script = ""
const engine = new EasyAvg()
async function fetchData(file) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            resolve(xhr.responseText);
        };
        xhr.onerror = reject;
        xhr.open("get", file);
        xhr.send();
    });
}

async function processData(file) {
    script = await fetchData(file);
    // console.log(script);
    var sp_script = split_script(script)
    max_index = sp_script.length
    console.log(sp_script)

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
}
processData("0.txt");


