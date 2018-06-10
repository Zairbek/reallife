
//  форма Регистрация
function funcOpenFormRegistration() {
    document.body.style.overflow = 'hidden';
    fullScreenDiv('radial-gradient(circle, rgba(60, 76, 90, 0.9), rgba(113, 143, 169, 0.9))');
    formRegistration();


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





