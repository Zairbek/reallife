window.onload = function () {

    document.getElementById('openFormAuth').addEventListener('click', funcOpenFormAuth);
    document.getElementById('closeFullScreenDiv').addEventListener('click', funcCloseFormAuth);
    document.getElementById('fullScreenDiv').addEventListener('click', funcCloseFormAuth);

    document.getElementById('openFormRegistration').addEventListener('click', funcOpenFormRegistration);
    document.getElementById('closeFullScreenDiv').addEventListener('click', funcCloseFormRegistration);
    document.getElementById('fullScreenDiv').addEventListener('click', funcCloseFormRegistration);


    setVerticalLine();

    var boxBig = document.querySelectorAll('.box-big > a, .box-big > img');
    for (var i = 0; i<boxBig.length; i++){
        boxBig[i].addEventListener('click', viewPostFullScreen)
    }
    document.getElementById('closeFullScreenDiv').addEventListener('click', closeViewPostFullScreen);
    document.getElementById('fullScreenDiv').addEventListener('click', closeViewPostFullScreen);

    


};

























//   Представление Постов
function viewPostFullScreen(e){
    if(this.hasAttribute('src')) {
        var src = this.getAttribute('src');
        var textAndLink = this.previousElementSibling.textContent;
    }else if(this.textContent){
        var textAndLink = this.textContent;
        var src = this.nextElementSibling.getAttribute('src');
    }


    document.body.style.overflow = 'hidden';

    fullScreenDiv();
    getForPostFullScreen(src, textAndLink);

}

function getForPostFullScreen(src, textAndLink){
    var winX = document.documentElement.clientWidth;
    var winScrollTop = document.documentElement.scrollTop;
    var layerPost = document.getElementById('layerPost');

    document.getElementById('imgForPostGlobal').setAttribute('src', src);
    document.getElementById('textAndLinkForPostGlobal').textContent = textAndLink;

    layerPost.style.opacity = 0;
    getOpacity(layerPost, true, 10);

    layerPost.style.top =(winScrollTop + 20) + 'px';
    layerPost.style.left = (winX / 2) - (layerPost.clientWidth / 2) + 'px';
}

function closeViewPostFullScreen(){
    document.body.style.overflow = '';

    var fullScreenDiv = document.getElementById('fullScreenDiv');
    var layerPost = document.getElementById('layerPost');

    getOpacity(fullScreenDiv, false, 10);
    getOpacity(layerPost, false, 10);

}


// формы авторизации/регистрации и проверки на валидности
// форма Авторизация
function funcOpenFormAuth() {
    document.body.style.overflow = 'hidden';
    fullScreenDiv('radial-gradient(circle, rgba(60, 76, 90, 0.9), rgba(113, 143, 169, 0.9))');
    formAuth();
}

function funcCloseFormAuth() {
    document.body.style.overflow = '';
    var fullScreenDiv = document.getElementById('fullScreenDiv');
    var form = document.getElementById('formAuth');

    getOpacity(fullScreenDiv, false, 10);
    getOpacity(form, false, 10);
}

function formAuth() {
    var winX = document.documentElement.clientWidth;
    var winY = document.documentElement.clientHeight;
    var form = document.getElementById('formAuth');

    form.style.opacity = 0;
    getOpacity(form, true, 10);


    form.style.top = (winY / 2) - ((form.clientHeight / 2) + (form.clientHeight / 3)) + 'px';
    form.style.left = (winX / 2) - (form.clientWidth / 2) + 'px';

}


//  форма Регистрация
function funcOpenFormRegistration() {
    document.body.style.overflow = 'hidden';
    fullScreenDiv('radial-gradient(circle, rgba(60, 76, 90, 0.9), rgba(113, 143, 169, 0.9))');
    formRegistration();


}

function funcCloseFormRegistration() {
    document.body.style.overflow = '';
    var fullScreenDiv = document.getElementById('fullScreenDiv');
    var form = document.getElementById('formRegistration');

    getOpacity(fullScreenDiv, false, 10);
    getOpacity(form, false, 10);
}

function formRegistration() {
    var winX = document.documentElement.clientWidth;
    var winY = document.documentElement.clientHeight;
    var form = document.getElementById('formRegistration');

    form.style.opacity = 0;
    getOpacity(form, true, 10);


    form.style.top = (winY / 2) - ((form.clientHeight / 2) + (form.clientHeight / 3)) + 'px';
    form.style.left = (winX / 2) - (form.clientWidth / 2) + 'px';

    document.formRegistration.userName.addEventListener('input', formValidateUserName);
    document.formRegistration.password.addEventListener('input', formValidatePassword);
    document.formRegistration.rePassword.addEventListener('input', formValidateRePassword);
}


// проверка валидностьи Формы регистрации
function formValidateUserName() {
    var invalideMessage = [];
    var input = this;

    if (input.validity.valueMissing) {
        invalideMessage.push('Поля незаполнено!')
    }
    if (input.validity.patternMismatch) {
        invalideMessage.push('Поля должна содержать только английские буквы!');
    }
    if (input.validity.tooLong) {
        var maxLength = input.getAttribute('maxlength');
        invalideMessage.push('Максимально допустимое количество символов: ' + maxLength);
    }
    if (input.validity.tooShort) {
        var minLength = input.getAttribute('minlength');
        invalideMessage.push('Минимально допустимое количество символов: ' + minLength);
    }

    input.addEventListener('input', function(){
        var message = invalideMessage.join(', \n');
        input.setCustomValidity(message);
    });

}

function formValidatePassword() {
    var invalideMessage = [];
    var input = this;

    if (input.validity.valueMissing) {
        invalideMessage.push('Поля незаполнено!');
    }
    if (input.validity.patternMismatch) {
        invalideMessage.push('Пароль должен содержать только английские буквы и одна цифра!');
    }
    if (input.validity.tooLong) { 
        var maxLenth = input.getAttribute('maxlength');
        invalideMessage.push('Максимально допустимое количество символов: ' + maxLenth)
    }
    if (input.validity.tooShort) {
        var minLenth = input.getAttribute('minlength');
        invalideMessage.push('Минимально допустимое количество символов: ' + minLenth)
    }

    input.addEventListener('input', function(){
        var message = invalideMessage.join(', \n');
        input.setCustomValidity(message);
    });

}

function formValidateRePassword() {
    var form = document.formRegistration;
    var inputPassword = form.password;
    var inputRePassword = form.rePassword;

    var valuePassword = inputPassword.value;
    var valueRePassword = inputRePassword.value;

    var invalideMessage = [];

    if (valuePassword != valueRePassword) {
        invalideMessage.push('Пароль неверный!')
    }

    submit.addEventListener('click', function () {
        var message = invalideMessage.join(', \n');
        inputRePassword.setCustomValidity(message);
    })
}

// container-center   vertical-line
function setVerticalLine(){
    var contentCentered = document.getElementById('contentCentered');
    var contentHeight = contentCentered.clientHeight;

    var verticalLine = document.getElementById('vertical-line');
    verticalLine.style.height = contentHeight + 'px';
}






























// Full Screen Div полу прозрачный фоном
// функция должна быть связана с функцией getOpacity
//в параметрах (background) указать свет
//bgDefault - фон поумолчанию.
var bgDefault = 'radial-gradient(circle, rgba(60, 76, 90, 0.9), rgba(113, 143, 169, 0.9))';
function fullScreenDiv(background = bgDefault) {
    var winX = document.documentElement.clientWidth;
    var winScrollTop = document.documentElement.scrollTop;
    var winScrollY = document.documentElement.scrollHeight;

    var fullScreenDiv = document.getElementById('fullScreenDiv');
    fullScreenDiv.style.background = background;
    fullScreenDiv.style.opacity = 0;
    getOpacity(fullScreenDiv, true, 10);

    fullScreenDiv.style.top = winScrollTop + 'px'
    fullScreenDiv.style.width = winX + 'px';
    fullScreenDiv.style.height = winScrollY + 'px';

}


//getOpacity(elem, type, duration
// функция принимает (elem)-элемент (type)-тип (duration)-длительность эффекта появлении.
// (type)=='true'-элемент медленно появится на странице.
// (type)=='false'- элемент медленно исшезает со страницы.
//(duration)== в миллисекундах.
function getOpacity(elem, type, duration) {
    var int;
    if (type) {
        clearInterval(int);
        var n = 0;
        int = setInterval(function () {
            if (n >= 0.9) {
                n = 0.9;
                clearInterval(int);
                return elem.hidden = false;// при достижении opacity к 1 применяется hidden
            }
            n = n + 0.1;
            elem.style.opacity = n;
        }, duration);
        return elem.hidden = false;

    } else {
        clearInterval(int);
        var n = 1;
        int = setInterval(function () {
            if (n <= 0.1) {
                n = 0.1;
                clearInterval(int);
                return elem.hidden = true;// при достижении opacity к 0 применяется hidden
            }
            n = n - 0.1;
            elem.style.opacity = n;
        }, duration);
    }
}





//---------------===
//---------------===
//---------------===
//---------------===
//---------------===
//------------=========
//--------------=====
// ---------------=
// -------------------------------------------------------------------------


// function
getId = (attr) => document.getElementById(attr);

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
        let elem = getId(el);
        elem.hidden = false;
    },
    closePopupWindow: function (el){
        let elem = getId(el);
        elem.hidden = true;
    }
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
    element: 'shadow-layer',   //нужно сделать преверочная функция что-бы для каждого элемента проверил 
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
