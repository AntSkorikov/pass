var passw = document.querySelector('#CheckPass'),
	wrong = document.querySelector('#WrongPass'),
	ok = document.querySelector('#OkPass');

function checkPassword (e) {
    e.preventDefault();

    var password = passw.value;
    if (password != '1') {
        passw.value = '';
        passw.style.display = "none";
        wrong.style.display = "block";
        setTimeout(function () {
            wrong.style.display = "none";
        }, 300);
        setTimeout(function () {
            passw.style.display = "block";
        }, 300);
        return false;
    }
    ok.style.display = "block";
    passw.style.display = "none";
    return false;
}