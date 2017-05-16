
var boxs=document.querySelector(".banner-main");
var buttons=document.querySelectorAll(".banner-lunbo-yuan");
var contents=document.querySelectorAll(".banner-mian-tu");//当鼠标上去 动画暂停
var bgs=document.querySelector(".banner");
var  newbtn=buttons[0];
var newcons=contents[0];
var colorarr=["#FCD82F","#E8E8E8","#E8E8E8","#E9E7EA","#FFF001","#DDF2E1"];
var to;
var num1=0;
var to;
Array.from(buttons).forEach(function (ele,index) {//按钮变为集合 遍历

    ele.onmouseover=function () {//鼠标经过的事件

        clearTimeout(to);
        to= setTimeout(function () {


        num1=index;
        newbtn.style.background="rgba(0,0,0,0.5)";
        newcons.style.zIndex="1";
        newcons.style.opacity="0";
        buttons[index].style.background="rgba(255,255,255,0.5)";
        buttons[index].style.border="1px soild #bbb";
        contents[index].style.zIndex=2;
        contents[index].style.opacity="1";
        newbtn=buttons[index];//恢复为默认
        newcons=contents[index];
        bgs.style.background=colorarr[index];
            clearInterval(stop);
        },500)


    }
})

var stop=setInterval(move1,2000);
function move1() {
    num1++;
    if(num1==buttons.length){
        num1=0;
    }
    newbtn.style.background="rgba(0,0,0,0.5)";
    newcons.style.zIndex="1";
    newcons.style.opacity="0";
    buttons[num1].style.background="rgba(255,255,255,0.5)";
    buttons[num1].style.border="1px soild #bbb";
    contents[num1].style.zIndex=2;
    contents[num1].style.opacity="1";
    bgs.style.background=colorarr[num1];

    newbtn=buttons[num1];
    newcons=contents[num1];


}


boxs.onmouseover=function () {
    clearInterval(stop);//按住盒子不动
}
boxs.onmouseout=function () {
    stop=setInterval(move1,2000) //离开继续动
}

buttons.onmouseout=function () {
    stop=setInterval(move1,2000)
}

var btns1=document.querySelectorAll(".biaoti-zi");
var maos=document.querySelectorAll(".zbtmain-right-maotou");

Array.from(btns1).forEach(function (ele,index) {
    ele.onmouseover=function () {
        maos[index].style.top="-44px";
    }

    ele.onmouseout=function () {
        maos[index].style.top="0px";
    }
})
//底部字循环
var inner=document.querySelector(".left-bottom-zi");
var num2=0;
setInterval(function () {
    num2++;
    if(num2==3){
        num2=0;
    }
    inner.style.marginTop=-37*num2+"px";

},3000)
//中间图循环
var divs=document.querySelectorAll(".list1");
var masks=document.querySelectorAll(".list1-zhezhao");
Array.from(divs).forEach(function (v,i) {
    v.onmouseover=function () {
        masks[i].style.opacity="0.8";
    }
    v.onmouseout=function () {
        masks[i].style.opacity="0";
    }
})

var divs1=document.querySelectorAll(".banner-xia-top-left-middle-tu");//中间的小图
var masks1=document.querySelectorAll(".middle-tu-zhezhao");

var cons=document.querySelectorAll(".banner-xia-top-left-top-tu");//上边的图
var cont=document.querySelector(".banner-xia-top-left-middle");//中间的盒子
var containers=document.querySelector(".banner-xia-top-left-top");//上边大图的大盒子
var inner2=document.querySelector(".banner-xia-top-left-middle-box");//下边小图大盒子
var prve=document.querySelector(".jiantou-prve");//箭头左
var next=document.querySelector(".jiantou-next");//箭头右
Array.from(divs1).forEach(function(ele,index){
    num=index;

    ele.onmouseover=function () {

        for(var i=0;i<divs1.length;i++){

            cons[i].style.display="none";
        }

        cons[index].style.display="block";
        masks1[index].style.display="block";
    }

    ele.onmouseout=function () {
        masks1[index].style.display="none";
    }

})

masks1[0].style.display="block";
next.style.display="none";
prve.style.display="none";
var num=0;
var t1=setInterval(move,2000);
function move() {

    num++;
    if(num==divs1.length){
        num=0;
        inner2.style.marginLeft=0;
        next.style.display="block";
        prve.style.display="none";
    }
    if(num==3){
        inner2.style.marginLeft=-164*num+"px";
        prve.style.display="block";
        next.style.display="none";
    }
    for(var i=0;i<divs1.length;i++){

        cons[i].style.display="none";
        masks1[i].style.display="none";
    }

    cons[num].style.display="block";
    masks1[num].style.display="block";


}
prve.onclick=function () {
    inner2.style.marginLeft=-164*0+"px";
    prve.style.display="none";

}
next.onclick=function () {
    inner2.style.marginLeft=-164*3+"px";
    next.style.display="none";

};
containers.onmouseover=function () {
    clearInterval(t1);
};
containers.onmouseout=function () {
    t1=setInterval(move,2000);
};
cont.onmouseover=function () {
    clearInterval(t1);
}
cont.onmouseout=function () {
    t1=setInterval(move,2000);
}

var topbar=document.querySelector(".topbar");

//固定导航
var gdbox=document.querySelector(".guding1");
var gdbtns=document.querySelectorAll(".btn");
var floors=document.querySelectorAll(".floor");



window.onscroll=function () {
//固定栏出现
    if(document.body.scrollTop>660){
        gdbox.style.width="36px";
        gdbox.style.height="324px";
    }else{
        gdbox.style.width=0;
        gdbox.style.height=0;
    }
    //头部
    if(document.body.scrollTop>660){
        topbar.style.top=0;
    }else{
        topbar.style.top="-50px";
    }

}
//固定栏颜色的改变

var colorarr1=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#DD2727"];
// console.log(colorarr1)
// console.log($(".guding01.btn"))
// console.log($(".floor"))
/*$(".guding01.btn").click(function () {
    var index=$(this).index();
    var ot= $(".floor").eq(index).offsetTop;
    console.log(ot);
    $("body,html").animate({scrollTop:ot},660,"linear");

}).hover(function () {
    var index=$(this).index();
    $(this).css("background",colorarr1[index]);
},function () {
    $(this).css("background","");
})

var to;
$(window).scroll(function () {
    var st=$(window).scrollTop();
    clearTimeout(to);
    to=setTimeout(function () {
        $(".floor").each(function (index,ele) {
            if(st>=$(ele).offsetTop){
                $(".guding01.btn").eq(index).addClass("active").siblings().removeClass("active");
            }
        })
    },200)
})*/

$(".btn").each(function (i,v) {
    $(this).hover(function () {
        $(this).css("background",colorarr1[i])
    },function () {
        $(this).css("background","")
    }).click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
});
console.log($(".btn:nth-child(8)"))
var to;
$(window).scroll(function () {
    var st=$(this).scrollTop()+50;
    clearInterval(to);
    to=setTimeout(tomove,200);
    function tomove() {
        $(".floor").each(function (i,v) {
            if($(window).scrollTop()<660){
                $(".btn").removeClass("active");
            }
            if(st>$(v).offset().top){
                console.log($(v));
                console.log($(".btn").eq(i))
                $(".btn").eq(i).addClass("active").siblings().removeClass("active");
            }
        })
    }
});
//页面跳转
gdbtns.forEach(function (ele,index) {
    ele.onclick=function () {
        var top=floors[index].offsetTop;
        // console.log(top)
        window.animate(document.body,{scrollTop:top-50})
    }
})
//右侧
var boxs=document.querySelectorAll(".tip");
var tips=document.querySelectorAll(".yidongkuang");
var to;
Array.from(boxs).forEach(function (box,index) {
    box.onmouseover=function () {
        clearTimeout(to)
         to=setTimeout(function () {
             tips[index].classList.add("show");
         },500)


    }
    box.onmouseout=function () {
        clearTimeout(to);
        if(tips[index].classList.contains("show")){
            tips[index].classList.remove("show");
            tips[index].classList.add("hide");
        }
        
    }
/*    hover(box,function () {
        tips[index].style.right=70+"px";
        tips[index].style.display="block";

    },function () {
        tips[index].style.right=40+"px";
        tips[index].style.display="none";
    })*/
})

Array.from(tips).forEach(function (tip,index) {//遍历
    tips[index].addEventListener("animationend",function () {//注册事件
        if(tips[index].classList.contains("hide")){//判断是否含有hide名
            tips[index].classList.remove("hide");
        }
    })
});
//返回顶部
var retop=document.querySelector(".guding01.i");
retop.onclick=function () {
    window.animate(document.body,{scrollTop:0})
}
//头部二维码
var erweibtn=document.querySelector(".erweibox");
var erweitu=document.querySelector(".erweima");
erweibtn.onmouseover=function () {
    erweitu.style.display="block";
}
erweibtn.onmouseout=function () {
    erweitu.style.display="none";
}
//头部淘宝
var ourbtn=document.querySelector(".ours");
var our=document.querySelector(".taobao-box1");
var ourbtn1=document.querySelector(".ours1");
var our1=document.querySelector(".taobao-box2");
var ourbtn2=document.querySelector(".ours2");
var our2=document.querySelector(".shangjia");
ourbtn.onmouseover=function () {
    our.style.display="block";
}
ourbtn.onmouseout=function () {
    our.style.display="none";
}
ourbtn1.onmouseover=function () {
    our1.style.display="block";
}
ourbtn1.onmouseout=function () {
    our1.style.display="none";
}
ourbtn2.onmouseover=function () {
    our2.style.display="block";
}
ourbtn2.onmouseout=function () {
    our2.style.display="none";
}
//侧二维码
var erwebtn=document.querySelector(".erweimace");
var erwcice=document.querySelector(".erweice");
erwcice.onmouseover=function () {
    erwebtn.style.display="block";
}
erwcice.onmouseout=function () {
    erwebtn.style.display="none";
}
//侧栏
console.log($(".celan li"))
$(".celan li").each(function (i,e) {
    // console.log(e,$(this))
    
    $(this).hover(function () {
        $(".twocenav").eq(i).show();
    },function () {
        $(".twocenav").eq(i).hide();
    })

})

////侧栏js颜色动画
var colorArr2=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","#fa5c5c","#f7a831","#f7a831","#427def","#dd2727","#427def","#f7a831","#3bc7b0","#dd2727","#3bc7b0"];
$(".celan>li").each(function (i,v) {
    // console.log($(this))
    $(this).hover(function () {
        $(this).css("color",colorArr2[i]);
        $($(".teocenav-left").eq(i).children().children().children()).filter(".cy").css("color",colorArr2[i]);
        $($(".teocenav-left").eq(i).children().children().children()).filter("a").hover(function () {
            $(this).css("color",colorArr2[i]);
        },function () {
            $(this).not($(".cy")).css("color","");
        });
    },function () {
        $(this).css("color","");
    })
});
//右侧栏
$(".gudinglan .iconfont").hover(function () {
    $(this).css("background","#D32828")
},function () {
    $(this).css("background","")
})








