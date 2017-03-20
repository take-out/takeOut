var invite=$(".invite");
var div=$("div",invite);
var inner=$(".inner");
var title=$(".title");
var bt=$("div",title);
var content=$(".section-content");
touch.on('div', 'touchstart', function(e){
    e.preventDefault();
    var index=$(this).index();
    bt.css({color:"#000000"});
    bt.eq(index).css({color:"#E60033"});	
    inner.css({zIndex:1});
    inner.eq(index).css({zIndex:3});
    if(index==0){
    	content.css({background:"#F2F2F2"});
    	invite.css({background:"#F2F2F2"});
    	inner.eq(index).css({background:"#F2F2F2"})
    }
    if(index==1||index==2){
    	content.css({background:"#FFFFFF"});
    	invite.css({background:"#FFFFFF"});
    	inner.eq(index).css({background:"#FFFFFF"})
    };
});