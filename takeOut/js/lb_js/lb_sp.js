var imgbox=$(".lb-sp-box")[0];
var imgout=$(".lb-sp-out");
var lis=$(".lb-sp-li");

touch.on(imgout, 'swiperight', function(ev){
    mover();
});

touch.on(imgout, 'swipeleft', function(ev){
    movel();
})
var num=0;
function movel(){
    num++;
    if(num>2){num=2};
    var t=num*(-100)+"%";
    imgbox.style.marginLeft=t;
    imgbox.style.transition="all 0.5s";
    lis.removeClass("lb-sp-li-hover");
    lis.eq(num).addClass("lb-sp-li-hover");
}
function mover(){
    num--;
    if(num<0){num=0};
    var t=num*(-100)+"%";
    imgbox.style.marginLeft=t;
    imgbox.style.transition="all 0.5s";
    lis.removeClass("lb-sp-li-hover");
    lis.eq(num).addClass("lb-sp-li-hover");
}

for(var i=0;i<lis.length;i++){
     lis[i].index=i;
     lis[i].onclick=function(){
         num=this.index-1;
         movel();
     }
}