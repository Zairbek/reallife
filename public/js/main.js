window.addEventListener('load', init); 



function init (){
	verticalLine()

	getId('openFormAuth').addEventListener('click', showLayer)
	getId('swipeBarOpenFormAuth').addEventListener('click', showLayer)

	getId('open').addEventListener('click', showLayer)
	getId('open1').addEventListener('click', showLayer)


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



function showLayer() {
	var dataShowEl = this.dataset.showLayer;
	var dataCloseEl = this.dataset.closeLayer;
	
	if(dataShowEl === undefined && dataCloseEl === undefined) return alert('ссылка не связана с элеиентом!');
	
	dataShowEl = getId(dataShowEl);
	dataCloseEl = getId(dataCloseEl);
	dataShowEl.style.display = 'flex';

	dataCloseEl.addEventListener('click', function(){dataShowEl.style.display = 'none'})
	window.addEventListener('keydown', function(e){ e.keyCode === 27 ?   dataShowEl.style.display = 'none' : false });
}



var swipeBar = {
	
	nonEffects: function(){
		var dataShowEl = this.dataset.showLayer;
		var dataCloseEl = this.dataset.closeLayer;
		
		if(dataShowEl === undefined && dataCloseEl === undefined) return alert('ссылка не связана с элеиентом!');
		
		dataShowEl = getId(dataShowEl);
		dataCloseEl = getId(dataCloseEl);
		dataShowEl.style.right = 0;
	
		dataCloseEl.addEventListener('click', function(){dataShowEl.style.right = -310 + 'px'})
	}	
}



// ОБЪЕКТ
// func()()

//data-* 








// -------------------------------------------------------------------------
/**********************************
window.onload = function(){

	getId('openFormAuth').addEventListener('click' , function(){
		popupWindow.element = 'formAuth';
		popupWindow.open();
		document.form_auth.user_name.focus();
	});

	getId('open').addEventListener('click' , function(){
		popupWindow.element = 'layer-post';
		popupWindow.open();
	});
	getId('open1').addEventListener('click' , function(){
		popupWindow.element = 'layer-post';
		popupWindow.open();
	});


	getId('form-auth-close').addEventListener('click' , function(){
		popupWindow.close();
	});
	

	window.addEventListener('keydown', function(e){ e.keyCode === 27 ?  popupWindow.close() : false });


	document.form_auth.user_name.addEventListener('input', validate.userName);
	verticalLine();


}






// functions =============================
getId = (attr) => document.getElementById(attr);
// ---------------------------------------------
function verticalLine(){
	var contentCentered = getId('contentCentered');
	var contentHeight = contentCentered.clientHeight;

	var verticalLine = getId('vertical-line');
	verticalLine.style.height = contentHeight + 'px';
}
function imgLayerPost(){
	let e = getId('img-layer-post');
	let eHeight = e.clientHeight

	let el = document.querySelector('.layer-left');
	e.style.marginTop = (el.clientHeight / 2) - (eHeight / 2) + 'px';
}


//  view====================================


var switcher = {
	// --------------------------------
	runShadowLayer: function(el){
		getId(el).style.display = 'flex';       
	},
	exitShadowLayer: function (el){
		getId(el).style.display = 'none';       
	},
	// -------------------------`------
	// --------------------------------
	runPopupWindow: function(el){
		let e = getId(el);

			e.style.display = 'flex';

		if(e === 'layer-post'){
			// imgLayerPost();
		}else{
		}


	},
	closePopupWindow: function (el){
		let elem = getId(el);
		elem.style.display = 'none';

	}
	// -------------------------------

}




//  model=============================================



var popupWindow = {
	element: '',
	state: 'close',

	open: function () {
		if(this.state === 'close'){
			this.state = 'open';
			
			switcher.runPopupWindow(this.element);
			shadowLayer.open();

			return this.state;
		}
	},
	close: function () {
		if(this.state === 'open'){
			this.state = 'close';
			
			switcher.closePopupWindow(this.element);
			shadowLayer.close();
			
			return this.state;                        
		}
	}
} 

// ---------------------------
var shadowLayer = {
	element: '',   //нужно сделать проверочная функция что-бы для каждого элемента проверил 
	state: 'close',  //         что он есть в DOMе и по резултатам изменить значения state!!!!!!!!

	open: function(){
		if(this.state === 'close'){
			switcher.runShadowLayer(this.element)
			this.state = 'open';
			return this.state;
		}
	},
	
	close: function (){
		if(this.state === 'open'){
			switcher.exitShadowLayer(this.element)
			this.state = 'close';
			return this.state;
		}
	}
}

*/