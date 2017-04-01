var lefta=$(".lb-buy-list-left-a");
var right=$(".lb-buy-list-ul");
var obj=$(".lb-buy-list-right")[0];

for(var i=0;i<lefta.length;i++){
    lefta[i].index=i;
    lefta[i].onclick=function(){
        lefta.removeClass("lb-buy-list-hover");
        lefta.eq(this.index).addClass("lb-buy-list-hover");
        var ot=right[this.index].offsetTop;
        obj.scrollTop=ot-135;
    }
}
obj.onscroll=function(){
    var bh=right[0].offsetHeight;
    var st=obj.scrollTop;
    for(var i=0;i<right.length;i++){
        this.index=i;
        if(right[i].offsetTop<st+bh){
            lefta.removeClass("lb-buy-list-hover");
            lefta.eq(this.index).addClass("lb-buy-list-hover");
        }
    }
}


// 购物袋
var mask=$(".lb-buy-mask")[0];
var gwd=$(".lb-buy-gwd")[0];
var showgwd=$(".lb-buy-xuan-left")[0];
var tx=$(".lb-buy-xuan-toux")[0];

var flag=true;
showgwd.onclick=function(){
    if(flag){
        mask.style.display="block";
        gwd.style.display="block";
        tx.style.marginTop="-3.14rem";
        flag=false;
    }else{
        mask.style.display="none";
        gwd.style.display="none";
        tx.style.marginTop="-0.2rem";
        flag=true;
    }
}

// 购物袋金钱加减
var jia=$(".lb-buy-gwd-jia")[0];
var jian=$(".lb-buy-gwd-jian")[0];
var price=$(".lb-buy-gwd-price")[0]
var zonjia=$(".lb-buy-gwd-bottomm")[0];
var zonjia2=$(".lb-buy-xuan-prices")[0];

var m=2;
var ms='￥'+(m*96)+'.00';
jia.onclick=function(){
    m++;
    ms='￥'+(m*96)+'.00';
    price.innerHTML=m;
    zonjia.innerHTML=ms;
    zonjia2.innerHTML=ms;
}
jian.onclick=function(){
    m--;
    if(m<0){
        m=0;
        xuan.style.display="none";
        gwd.style.display="none";
        mask.style.display="none";
        tx.style.marginTop="-0.2rem";
    };
    ms='￥'+(m*96)+'.00';
    price.innerHTML=m;
    zonjia.innerHTML=ms;
    zonjia2.innerHTML=ms;
}

var show=$(".lb-buy-list-li-middle-bottom");
var xuan=$(".lb-buy-xuan")[0];
for(var i=0;i<show.length;i++){
    show[i].onclick=function(){
        xuan.style.display="block";
    }
}

mask.onclick=function(){
    xuan.style.display="none";
    gwd.style.display="none";
    mask.style.display="none";
    tx.style.marginTop="-0.2rem";
}