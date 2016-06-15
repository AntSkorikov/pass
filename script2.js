var passw = document.getElementById('CheckPass');
var wrong = document.getElementById('WrongPass');
var ok = document.getElementById('OkPass');

function checkPassword (e) {
    e.preventDefault();

    var password = passw.value;
    if (password != '1') {
        passw.value = '';
        wrong.style.display = "block";

        setTimeout(function () {
            wrong.style.display = "none";
        }, 500);
        return false;
    }

    ok.style.display = "block";
    passw.style.display = "none";
    return false;
}