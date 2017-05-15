var boxs1=document.querySelector(".bannertu");
var buttons1=document.querySelectorAll(".yuana");
var contents1=document.querySelectorAll(".bannertu-nr");
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
    newbtn1.style.background="#DDDDDD";
    newcons1.style.zIndex="1";
    newcons1.style.opacity="0";
    buttons1[num1].style.background="#A10000";

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
