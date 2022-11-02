var cs=$('canvas')[0]
var ctx=cs.getContext('2d')
var cs_W=window.innerWidth
var cs_H=window.innerHeight
var r=50
var img_W=$('.cuteGirl').width()
var img_H=$('.cuteGirl').height()
var ML=(img_W - cs_W)/2
var MT=(img_H - cs_H)/2
var theLeft=ML>0?0:-ML
var theTop=MT>0?0:-MT
var x=Math.random()*(cs_W - 2*r - 2*theLeft)+r+theLeft 
var y=Math.random()*(cs_H - 2*r - 2*theTop)+r+theTop
cs.width=cs_W
cs.height=cs_H
$('div').css({'width':cs_W,'height':cs_H})
$('.cuteGirl').css({'left':-ML+'px','top':-MT+'px'})
function drawCircle(){
    ctx.clearRect(0,0,cs_W,cs_H)
    ctx.save()
    ctx.beginPath()
    ctx.arc(x,y,r,0,Math.PI*2)
    ctx.clip()
    ctx.drawImage(image,
        ML>0?ML:0,MT>0?MT:0,//从此点截图
        Math.min(cs_W,img_W),Math.min(cs_H,img_H),//截下800*600的图
        ML>0?0:-ML,MT>0?0:-MT,//从此点放图
        Math.min(cs_W,img_W),Math.min(cs_H,img_H))//放下800*600的截图
        ctx.closePath()
        ctx.restore()
}
let image=new Image()
image.src='cuteGirl.png'
image.onload=function(){
    drawCircle()
}

show.addEventListener('click',function(){
    let timer=setInterval(function(){
        r+=30
    if(r>Math.sqrt(cs_W*cs_W+cs_H*cs_H)){
        clearInterval(timer)
    }else{
        drawCircle()
    }
    },50)
})
reset.addEventListener('click',function(){
     r=50
     x=Math.random()*(cs_W - 2*r - 2*theLeft)+r+theLeft 
     y=Math.random()*(cs_H - 2*r - 2*theTop)+r+theTop
     drawCircle()
})