// 命令
class EasyAvg {
    constructor(parameters) {
        
    }
    Bgm(bgm,src)
    {
    bgm.src = src
    bgm.play()
    }
    StopBgm(bgm)
    {
        bgm.pause()
    }
    Ch(ch,src)
    {
    ch.src = src
    }
    Dialog(dialog,text)
    {
    dialog.innerText = text
    }
    Bg(bg,src)
    {
    bg.src = src
    }
}
