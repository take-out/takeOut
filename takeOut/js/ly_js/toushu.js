var more = document.querySelector(".moreLiyou");
var hidden = document.querySelector(".hidden");
var lists = document.querySelectorAll("li",hidden);
var liyou = document.querySelector(".liyou")

more.addEventListener("touchstart",function(){
	hidden.style.display="block";
})
hidden.addEventListener("touchstart",function(){
	setTimeout(function(){
		hidden.style.display="none";
	},100)
})

lists.forEach(function(ele,i){
	ele.addEventListener("touchstart",function(e){
		// e.stopPropagation();
		var val = this.innerHTML;
		liyou.value= val;
	})
})




