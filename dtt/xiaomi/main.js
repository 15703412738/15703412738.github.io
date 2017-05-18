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
//为你推荐
console.log($(".weinituijian-box"))
var num=0;
$(".anniu.zuo").click(function () {
    num++;
    if(num>=3){
        num=3;
    }
    var wl=-1226*num;
    $(".weinituijian-box").css("marginLeft",wl+"px");
})

 $(".anniu.you").click(function () {
     num-=1;
     if(num<=0){
         num=0;
     }
     var wl1=-1226*num;
 $(".weinituijian-box").css("marginLeft",wl1+"px");

 });
//内容
console.log($(".neirong-bankuai2-dabox"));
console.log($(".neirong-bankuai-jiantouyou"));
var num3=0;
$(".neirong-bankuai-jiantouyou").each(function (i,v) {
    v.click(function () {
        num3++;
        $(".neirong-bankuai2-dabox").eq(i).css("marginLeft",-296*num3+"px");
    })
})
//内容
function neirong(next,prev,rongqi,dian) {
    var newbtn=dian[0];
    dian.forEach(function (v,i) {
        v.onclick=function () {
            newbtn.style.background="#b0b0b0";
            newbtn.style.border="2px solid #fff";
            dian[i].style.background="#fff";
            dian[i].style.border="2px solid #ff6700";

            rongqi.style.marginLeft=-296*i+"px";
            newbtn = dian[i]
        }
    })
    var num=0;
    next.onclick=function () {
        num++;
        if(num==dian.length){
            num=dian.length-1;
        }
        newbtn.style.background="#b0b0b0";
        newbtn.style.border="2px solid #fff";
        dian[num].style.background="#fff";
        dian[num].style.border="2px solid #ff6700";
        newbtn = dian[num]
        rongqi.style.marginLeft=-296*num+"px";
    }
    prev.onclick=function () {
        num--;
        if(num==-1){
            num=0;
        }
        newbtn.style.background="#b0b0b0";
        newbtn.style.border="2px solid #fff";
        dian[num].style.background="#fff";
        dian[num].style.border="2px solid #ff6700";
        newbtn = dian[num]
        rongqi.style.marginLeft=-296*num+"px";
    }
}
var tushunext=document.querySelector(".neirong-bankuai-box.a .neirong-bankuai-jiantouyou");
var tushuprev=document.querySelector(".neirong-bankuai-box.a .neirong-bankuai-jiantouzuo");
var dian=document.querySelectorAll(".neirong-bankuai-box.a .nrbk-lunbo .nrbk-lunbo-yuan .nrbk-yuan");
var tushu=document.querySelector(".neirong-bankuai-box.a .neirong-bankuai-dabox");
neirong(tushunext,tushuprev,tushu,dian)

var tushunext1=document.querySelector(".neirong-bankuai-box.b .neirong-bankuai-jiantouyou");
var tushuprev1=document.querySelector(".neirong-bankuai-box.b .neirong-bankuai-jiantouzuo");
var dian1=document.querySelectorAll(".neirong-bankuai-box.b .nrbk-lunbo1 .nrbk-lunbo-yuan .nrbk-yuan");
var tushu1=document.querySelector(".neirong-bankuai-box.b .neirong-bankuai2-dabox");
neirong(tushunext1,tushuprev1,tushu1,dian1)
var tushunext2=document.querySelector(".neirong-bankuai-box.c .neirong-bankuai-jiantouyou");
var tushuprev2=document.querySelector(".neirong-bankuai-box.c .neirong-bankuai-jiantouzuo");
var dian2=document.querySelectorAll(".neirong-bankuai-box.c .nrbk-lunbo1 .nrbk-lunbo-yuan .nrbk-yuan");
var tushu2=document.querySelector(".neirong-bankuai-box.c .neirong-bankuai2-dabox");
neirong(tushunext2,tushuprev2,tushu2,dian2)
var tushunext3=document.querySelector(".neirong-bankuai-box.d .neirong-bankuai-jiantouyou");
var tushuprev3=document.querySelector(".neirong-bankuai-box.d .neirong-bankuai-jiantouzuo");
var dian3=document.querySelectorAll(".neirong-bankuai-box.d .nrbk-lunbo1 .nrbk-lunbo-yuan .nrbk-yuan");
var tushu3=document.querySelector(".neirong-bankuai-box.d .neirong-bankuai2-dabox");
neirong(tushunext3,tushuprev3,tushu3,dian3)
console.log(dian,dian1,dian2,dian3)
