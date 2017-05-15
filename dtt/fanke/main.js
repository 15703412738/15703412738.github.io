var boxs1=document.querySelector(".bannertu");
var buttons1=document.querySelectorAll(".yuana");
var contents1=document.querySelectorAll(".bannertu-nr");
var prve=document.querySelector(".jiantouzuo");
var next=document.querySelector(".jiantouyou");
var  newbtn1=buttons1[0];
var newcons1=contents1[0];
Array.from(buttons1).forEach(function (ele,index) {
    ele.onmouseover=function () {
        num1=index;
        newbtn1.style.background="#DDDDDD";
        newcons1.style.zIndex="1";
        newcons1.style.opacity="0";
        buttons1[index].style.background="#A10000";
       
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
    if(num1==-1){
        num1=buttons1.length-1;
    }
    newbtn1.style.background="#DDDDDD";
    newcons1.style.zIndex="1";
    newcons1.style.opacity="0";
    buttons1[num1].style.background="#A10000";
    
    contents1[num1].style.zIndex=2;
    contents1[num1].style.opacity="1";
    newbtn1=buttons1[num1];
    newcons1=contents1[num1];


}
next.onclick=function () {
    move1();
}
prve.onclick=function () {

    num1-=2;
    move1();
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
//下拉框
var lis=document.querySelectorAll(".list1 .seclists");//获取的点击的盒子
var xialas=document.querySelectorAll(".xiala");//获取的下拉框


var arr=[];//创建新数组 放入长度
Array.from(xialas).forEach(function (ul) {//遍历ul
    let li=ul.querySelectorAll("li");//获取li
    let height=li.length*30-20;//得到下拉框的长度
    arr.push(height);

})
Array.from(lis).forEach(function (vi,index) {
    vi.onmouseover=function () {
        xialas[index].style.height=arr[index]+"px";
    }
    vi.onmouseout=function () {
        xialas[index].style.height=0;
    }
})
//二维码
var erwei1=document.querySelector(".erweima");
var weixin1=document.querySelector(".weixin");
weixin1.onmouseover=function () {
    erwei1.style.display="block";
}
weixin1.onmouseout=function () {
    erwei1.style.display="none";
}
//获取购物车框
var buy=document.querySelector(".buy");
var yincangkuang=document.querySelector(".yincangkuang");
console.log(erwei1)
buy.onmouseover=function () {
    yincangkuang.style.display="block";
}
buy.onmouseout=function () {
    yincangkuang.style.display="none";
}
//
var fanhuitop=document.querySelector(".fanhui-top-zhezhao");
fanhuitop.onclick=function () {
    window.animate(document.body,{scrollTop:0});
}
