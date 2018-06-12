// -------------------------------------------------------------------------
window.onload = function(){

    getId('openFormAuth').addEventListener('click' , function(){
        popupWindow.element = 'formAuth';
        popupWindow.open();
        document.formAuth.userName.focus();
    });

    getId('openFormRegistration').addEventListener('click' , function(){
        popupWindow.element = 'formRegistration';
        popupWindow.open();
        document.formRegistration.userName.focus();
    });

    getId('open').addEventListener('click' , function(){
        popupWindow.element = 'layer-post';
        popupWindow.open();
    });

    getId('shadow-layer').addEventListener('click' , function(){
        popupWindow.close();
    });

    getId('shadow-layer').addEventListener('click' , function(){
        popupWindow.close();
    });

    window.addEventListener('keydown', function(e){ e.keyCode === 27 ?  popupWindow.close() : false });


    document.formRegistration.userName.addEventListener('input', validate.userName);
    document.formRegistration.password.addEventListener('input', validate.password);
    document.formRegistration.rePassword.addEventListener('input', validate.rePassword);
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
    let eWidth = e.clientHeight

    let el = document.querySelector('.layer-left');
    e.style.marginTop = (el.clientHeight / 2) - (eWidth / 2) + 'px';
}


//  view====================================


var switcher = {
    // --------------------------------
    runShadowLayer: function(el){
        getId(el).hidden = false;       
    },
    exitShadowLayer: function (el){
        getId(el).hidden = true;                      
    },
    // --------------------------------
    // --------------------------------
    runPopupWindow: function(el){
        let winX = document.documentElement.clientWidth;
        let winY = document.documentElement.clientHeight;

        let sTop = document.documentElement.scrollTop;

        let e = getId(el);
        e.hidden = false;

        let eX = e.offsetWidth;
        let eY = e.offsetHeight;

        if(popupWindow.element === 'layer-post'){
            e.style.top = 10 + 'px';
            e.style.left = (winX / 2) - ( eX / 2 ) + 'px';
            e.style.height = winY - 20 + "px";
            imgLayerPost();

        }else{
            e.style.top =  (winY / 2) - ( eY / 2 ) + 'px';
            e.style.left = (winX / 2) - ( eX / 2 ) + 'px';
        }


    },
    closePopupWindow: function (el){
        let elem = getId(el);
        elem.hidden = true;
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
    element: 'shadow-layer',   //нужно сделать проверочная функция что-бы для каждого элемента проверил 
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
