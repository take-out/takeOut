var yonhu=document.querySelector(".lb-register-int1");
var mima=document.querySelector(".lb-register-int2");
var bg=$(".lb-register-bg");
var user=$(".lb-register-usererror");
var word=$(".lb-register-worderror");
var yan=document.querySelector(".lb-register-yan");
var cha=document.querySelector(".lb-register-cha");
yonhu.onfocus=function(){
    bg.addClass("lb-register-hover");
    user.addClass("lb-register-usererror-hover");
    word.removeClass("lb-register-worderror-hover");
}
mima.onfocus=function(){
    yan.style.display="block";
    cha.style.display="block";
    bg.addClass("lb-register-hover");
    user.removeClass("lb-register-usererror-hover");
    word.addClass("lb-register-worderror-hover");
}
mima.onblur=function(){
    yan.style.display="none";
    cha.style.display="none";
}
cha.onclick=function(){
    mima.value="";
}

// 自动登录
var anniu=document.querySelector(".lb-register-mima2-yuan");
var anniudi=document.querySelector(".lb-register-anniudi");
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