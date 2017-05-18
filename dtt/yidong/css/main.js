//banner轮播
var box=document.querySelector(".banner-zhong");
var imgs=document.querySelectorAll(".banner-zhong-tu");
var btns=document.querySelectorAll(".lun-bo li");
var next=document.querySelector(".banner-jiantou.you");
var prve=document.querySelector(".banner-jiantou.zuo");
console.log(imgs,btns);

/*var t=setInterval(move,3000)
var num=0;
var z=10;
function move() {
        imgs[num].classList.add("leftout");
        btns[num].classList.remove("hong");
        num++;
        if(num==imgs.length){
            num=0;
        }
        imgs[num].classList.add("leftin");
        btns[num].classList.add("hong");
        imgs[num].style.zIndex=z++;
 }
        imgs.forEach(function (img) {
            img.addEventListener("animationend",function () {
                img.className="";
            })
        })
     box.onmouseover=function () {
        clearInterval(t);
    }
     box.onmouseout=function () {
        t=setInterval(move,3000)
     }
           btns.forEach(function (btn,index) {
            btn.onclick=function () {
                if(num==index){
                    return;
                }
                if(index>num){
                    imgs[num].classList.add("leftout");
                    btns[num].classList.remove("hong");
                    imgs[index].classList.add("leftin");
                    btns[index].classList.add("hong");
                }else{
                    imgs[num].classList.add("rightout");
                    btns[num].classList.remove("hong");
                    imgs[index].classList.add("rightin");
                    btns[index].classList.add("hong");
                }
                imgs[index].style.zIndex=z++;
                num=index;
            }
        })*/
var t=setInterval(move,3000);
var z=10;//层级
var now=0;//下标值
var flag=true;
function move() {
    imgs[now].classList.add("leftout");//加类名
    btns[now].classList.remove("hong");
    now++;
    if(now==imgs.length){
        now=0;
    }
    imgs[now].classList.add("leftin");
    btns[now].classList.add("hong");
    imgs[now].style.zIndex=z++;
}
//清除图片上加的类名 如果不得话就无法正常循环下去
imgs.forEach(function (img) {
    img.addEventListener("animationend",function () {
        img.classList.remove("leftout");
        img.classList.remove("leftin");
        img.classList.remove("rightout");
        img.classList.remove("rightin");
        flag=true;
    })
})
box.onmouseover=function () {
    clearInterval(t);
}
box.onmouseout=function () {
    t=setInterval(move,3000);
}
//给按钮加js 当点击按钮的时候也会切换
btns.forEach(function (btn,index) {
    btn.onclick=function () {
        if(flag)
        if(now==index){//判断当点击的与自动会切换的是一个时
            return;
        }
        if(index>now){//当点击的比当前的靠后的时
            imgs[now].classList.add("leftout");
            btns[now].classList.remove("hong");
            imgs[index].classList.add("leftin");
            btns[index].classList.add("hong");
        }else{//当点击的比当前的靠前的时
            imgs[now].classList.add("rightout");
            btns[now].classList.remove("hong");
            imgs[index].classList.add("rightin");
            btns[index].classList.add("hong");
        }
        imgs[index].style.zIndex=z++; //调节层级
        now=index;//把点击过的赋值为现在的值
    }
})

next.onclick=function () {
    if(flag){
        flag=false;
        move();
    }

}
prve.onclick=function () {
    if(flag){//开关
        flag=false;
    imgs[now].classList.add("rightout");
    btns[now].classList.remove("hong");
    now--;
    if(now==-1){
        now=imgs.length-1;
    }
    imgs[now].classList.add("rightin");
    btns[now].classList.add("hong");
    imgs[now].style.zIndex=z++;
    }
}
//banner图下
var guding=document.querySelector(".banner-xia-main");
var dabox=document.querySelector(".banner-xia-box");
var anniuprev=document.querySelector(".banner-xia-jiantou.zuo");
var anniunext=document.querySelector(".banner-xia-jiantou.you");

var num1=4;
var t1=setInterval(move1,3000);

function move1() {

    dabox.style.transition="all 1s";
    num1++;
    dabox.style.marginLeft=-298*num1+"px";
}
dabox.addEventListener("transitionend", function () {
    if(num1==12){
        num1=4;
        dabox.style.transition="none";
        dabox.style.marginLeft=-298*num1+"px";
    }
    if(num1==0){
        num1=8;
        dabox.style.transition="none";
        dabox.style.marginLeft=-298*num1+"px";
    }
    flag=true;
})
guding.onmouseover=function () {
    clearInterval(t1);
}
guding.onmouseout=function () {
    t1=setInterval(t1);
}
var flag=true;
anniunext.onclick=function () {
    if(flag){
        flag=false;
        move1();
    }
}
anniuprev.onclick=function () {
    if(flag){
        flag=false;

        num1-=2;
        move1();
    }
}
//隐藏
var yin=document.querySelector(".abiaoqian");
var dongxi=document.querySelector(".downmeue");
var dx2=document.querySelector(".topbar-main .dengluxia-box");

    hover(yin,function () {
        dongxi.style.display="block";
        dx2.style.display="block";
    },function () {
        dongxi.style.display="none";
        dx2.style.display="none";
    })
var erweibox=document.querySelector(".erweimabox");
var erwei=document.querySelector(".erweima");
var erweixia=document.querySelector(".erweima-box");
hover(erweibox,function () {
    erwei.style.display="block";
    erweixia.style.display="block";
},function () {
    erwei.style.display="none";
    erweixia.style.display="none";
})
//导航
var index=document.querySelectorAll(".nav .li");
var zhu=document.querySelectorAll(".nav .nav-xia");
index.forEach(function (e,i) {
    hover(e,function () {
        zhu[i].style.display="block";
    },function () {
        zhu[i].style.display="none";
    })
})
//公告
var leftnr=document.querySelectorAll(".gonggao-left-nr-box .gonggao-left-nr");
var rightnr=document.querySelectorAll(".gonggao-left-nr-box1 .gonggao-left-nr");
var num=0;
var newleft=leftnr[0];
var newright=rightnr[0];
setInterval(move3,3000)
function move3() {
    num++;
    if(num==leftnr.length){
        num=0;
    }
    newleft.style.zIndex="1";
    newleft.style.opacity=0;
    leftnr[num].style.zIndex="2";
    leftnr[num].style.opacity=1;
    newleft=leftnr[num];
}
setInterval(move2,3000)
function move2() {
    num++;
    if(num==rightnr.length){
        num=0;
    }
    newright.style.zIndex="1";
    newright.style.opacity=0;
    rightnr[num+1].style.zIndex="2";
    rightnr[num+1].style.opacity=1;
    newright=rightnr[num+1];
}
var btnleft=document.querySelector(".jiantou-zuo");
var btnright=document.querySelector(".jiantou-you");
btnleft.onclick=function () {
        move2();
        move3();

}
