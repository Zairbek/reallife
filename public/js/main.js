window.addEventListener('load', init); 



function init (){
	verticalLine()

	getId('openFormAuth').addEventListener('click', showLayer.nonEffects)
	getId('swipeBarOpenFormAuth').addEventListener('click', showLayer.nonEffects)

	getId('open').addEventListener('click', showLayer.nonEffects)
	getId('open1').addEventListener('click', showLayer.nonEffects)


	getId('open-swipe-bar').addEventListener('click', swipeBar.nonEffects)



}


// functions =============================
getId = (attr) => document.getElementById(attr);

function verticalLine(){
	var contentCentered = getId('contentCentered');
	var contentHeight = contentCentered.clientHeight;

	var verticalLine = getId('vertical-line');
	verticalLine.style.height = contentHeight + 'px';
}
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