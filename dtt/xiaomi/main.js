var boxs1=document.querySelector(".banner");
var buttons1=document.querySelectorAll(".yuan div");
var contents1=document.querySelectorAll(".bannertu");
var  newbtn1=buttons1[0];
var newcons1=contents1[0];
Array.from(buttons1).forEach(function (ele,index) {
    ele.onmouseover=function () {
        num1=index;
        newbtn1.style.background="#fff";
        newcons1.style.zIndex="1";
        newcons1.style.opacity="0";
        buttons1[index].style.background="#b0b0b0";
        buttons1[index].style.border="1px solid #fff";

        contents1[index].style.zIndex=2;
        contents1[index].style.opacity="1";
        newbtn1=buttons1[index];
        newcons1=contents1[index];
        clearInterval(stop1);
    }
})
var num1=0;
var stop1=setInterval(move1,2000);
function move1() {
    num1++;
    if(num1==buttons1.length){
        num1=0;
    }
    newbtn1.style.background="#fff";
    newcons1.style.zIndex="1";
    newcons1.style.opacity="0";
    buttons1[num1].style.background="#b0b0b0";
    buttons1[num1].style.border="1px solid #fff";
    contents1[num1].style.zIndex=2;
    contents1[num1].style.opacity="1";
    newbtn1=buttons1[num1];
    newcons1=contents1[num1];


}


boxs1.onmouseover=function () {
    clearInterval(stop1);
}
boxs1.onmouseout=function () {
    stop1=setInterval(move1,2000)
}

buttons1.onmouseout=function () {
    stop1=setInterval(move1,2000)
}
//左右轮播
var nextb=document.querySelector(".anniu.h");
var prveb=document.querySelector(".anniu.i");
var boxs=document.querySelector(".mingxing-tu-dabox");
var ting=document.querySelector(".mingxing-tu");
var numb=0;
var tb=setInterval(moveb,3000)
function moveb() {
        if(numb==0){
            nextb.style.color="#ccc";
            prveb.style.color="rgb(176, 176, 176)";
        }

        numb++;
        if(numb==2){
            nextb.style.color="rgb(176, 176, 176)";
            prveb.style.color="#ccc";
            numb=0;

        }

        boxs.style.marginLeft=-1226*numb+"px";
  
}
ting.onmouseover=function () {
    clearInterval(tb);
}
ting.onmouseout=function () {
    tb=setInterval(moveb,3000)
}
nextb.onclick=function () {
    boxs.style.marginLeft=-1226*1+"px";
}
prveb.onclick=function () {
    boxs.style.marginLeft=0;

}
nextb.onmouseover=function () {
    nextb.style.color="orange";
}
nextb.onmouseout=function () {
    nextb.style.color="#ccc";
}
prveb.onmouseover=function () {
    prveb.style.color="orange";
}
prveb.onmouseout=function () {
    prveb.style.color="#ccc";
}

console.log($(".dianji"))
console.log($(".right-child.a1"))
$(".dianji").each(function (i,e) {
    $(this).hover(function () {
        $(".right-child.a1").eq(i).show();
        $(this).css("background","#ff6700");
    },function () {
        $(".right-child.a1").eq(i).hide();
        $(this).css("background","");
    })
})
//选购
$(".right-child-nr-xuangou").each(function (i,v) {
    $(this).hover(function () {
        $(this).css({"background":"#ff6700","color":"#fff"});
    },function () {
        $(this).css({"background":"#fff","color":"#ff6700"});
    })
})