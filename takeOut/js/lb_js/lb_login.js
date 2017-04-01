var mima=document.querySelector(".lb-login-int");
var yan=document.querySelector(".lb-login-yan");
var cha=document.querySelector(".lb-login-cha");
var btn=$(".lb-login-btn1")[0];
mima.onfocus=function(){
    yan.style.display="block";
    cha.style.display="block";
}
mima.onblur=function(){
    yan.style.display="none";
    cha.style.display="none";
}
cha.onclick=function(){
    mima.value="";
}
btn.onclick=function(){
    btn.style.background="url('./images/lb_images/login-btn.png') no-repeat center center/cover";
    setTimeout(function(){
        btn.style.background="url('./images/lb_images/login-btn1.png') no-repeat center center/cover";
    },3000)
}

// 自动登录
var anniu=document.querySelector(".lb-login-mima2-yuan");
var anniudi=document.querySelector(".lb-login-anniudi");
var anniuflag=true;
anniu.onclick=function(){
    if(anniuflag){
        this.style.transform="translateX(-0.48rem)";
        anniudi.style.background="#ccc";
        anniuflag=false;
    }else{
        this.style.transform="translateX(0)";
        anniudi.style.background="#e60033";
        anniuflag=true;
    }

}