window.addEventListener('load', init); 



function init (){
	getId('openFormAuth').addEventListener('click', showLayer.nonEffects);
	getId('swipeBarOpenFormAuth').addEventListener('click', showLayer.nonEffects);
	getId('open').addEventListener('click', showLayer.nonEffects);
	getId('open-swipe-bar').addEventListener('click', swipeBar.nonEffects);


	var setting = new XMLHttpRequest();
	setting.onreadystatechange = jsonData
	setting.open("GET", "../json/setting.json", true);
	setting.send();

	var data = new XMLHttpRequest();
	data.onreadystatechange = function(){}
	data.open("GET", "../json/data.json", true);
	data.send();

}


// functions =============================
getId = (attr) => document.getElementById(attr);

(function(){
	let el1 = document.querySelectorAll(".one-in-one");
	for(let i = 0; i < el1.length; i++){
		let w = el1[i].clientWidth;
		el1[i].style.height = w * 40 / 100 + "px";
	}
	
	let el2 = document.querySelectorAll(".two-in-one");
	for(let i = 0; i < el2.length; i++){
		let w = el2[i].clientWidth;
		el2[i].style.height = w * 60 / 100 + "px";
	}

	let el3 = document.querySelectorAll(".three-in-one");
	for(let i = 0; i < el3.length; i++){
		let w = el3[i].clientWidth;
		el3[i].style.height = w * 80 / 100 + "px";
	}

})()

// functions =============================




var showLayer = {
	nonEffects: function(){
		var dataShowEl = this.dataset.showLayer;
		var dataCloseEl = this.dataset.closeLayer;
		
		if(dataShowEl === undefined && dataCloseEl === undefined) return alert('ссылка не связана с элеиентом!');
		
		dataShowEl = getId(dataShowEl);
		dataCloseEl = getId(dataCloseEl);
		dataShowEl.style.display = 'flex';
	
		dataCloseEl.addEventListener('click', function(){dataShowEl.style.display = 'none'})
		dataShowEl.addEventListener('click', function(ev){ if(ev.target == dataShowEl)  dataShowEl.style.display = 'none'})
		window.addEventListener('keydown', function(e){ e.keyCode === 27 ?   dataShowEl.style.display = 'none' : false });
	}
}


var swipeBar = {
	state: '',
	elem: '',
	
	nonEffects: function(el){
		var dataShowEl = this.dataset.showLayer;
		var dataCloseEl = this.dataset.closeLayer;
		
		if(dataShowEl === undefined && dataCloseEl === undefined) return alert('ссылка не связана с элеиентом!');
		
		this.elem = getId(dataShowEl);
		dataCloseEl = getId(dataCloseEl);
		this.elem.style.right = 0;
		this.state = 'open';

		if(this.state == 'open'){
			let th = this;
			dataCloseEl.addEventListener('click', function(){th.elem.style.right = -310 + 'px'})
		}
	}	
}



function jsonData(){
	if(this.readyState == 4){
		var res = JSON.parse(this.responseText);
		
		(function(){
			for(var i = 0; i < res.nav.length; i++){
				var el = document.querySelector("div.centered>ul.nav");
				let li = document.createElement('li');
				let a = document.createElement('a');
				li.appendChild(a);
				el.appendChild(li);
				
				let nav = res.nav[i];
				a.setAttribute('href', nav.href)
				a.innerHTML = nav.text;
			}	
		})();
		(function(){
			for(var i = 0; i < res.nav.length; i++){
				var el = document.querySelector("div.cont-bar>ul.nav");
				let li = document.createElement('li');
				let a = document.createElement('a');
				li.appendChild(a);
				el.appendChild(li);
				
				let nav = res.nav[i];
				a.setAttribute('href', nav.href)
				a.innerHTML = nav.text;
			}	
		})();
		
	}
}
