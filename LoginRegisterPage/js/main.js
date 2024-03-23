document.addEventListener('DOMContentLoaded', function() {
    var head11 = document.getElementById('head11');
    var head22 = document.getElementById('head22');
    var loginInputUser = document.getElementById('login-input-user');
    var loginInputPassword = document.getElementById('login-input-pass');
    var registerInputUser = document.getElementById('register-user');
    var registerInputPassword = document.getElementById('register-password');
    var buttonLogin = document.getElementById('button-login');
    head22.addEventListener('click', function() {
        head11.style.border = 'none';
        head22.style.borderBottom = '2px solid #11698E';
        loginInputUser.id = 'register-user';
        loginInputPassword.id = 'register-password';
        buttonLogin.innerHTML='Register'
    });

    head11.addEventListener('click', function() {
        registerInputUser = document.getElementById('register-user');
        registerInputPassword = document.getElementById('register-password');
        head22.style.border = 'none';
        head11.style.borderBottom = '2px solid #11698E';
        registerInputUser.id = 'login-input-user';
        registerInputPassword.id = 'login-input-pass';
        buttonLogin.innerHTML='Login'
    });
});
// tao tk
// var userCreate, passwordCreate
function createAccount (userCreate, passwordCreate) {
    //check xem local storageq is empty
    var keys = JSON.parse(localStorage.getItem('keys'));
    if (keys===null){
        keys=[];
    }
    //create a new account
    const objKey={
        'username':userCreate,
        'password':passwordCreate,
    };
    keys.push(objKey);
    const setJSONKeys=JSON.stringify(keys);
    localStorage.setItem('keys',setJSONKeys);
}
//lang nghe su kien click vao nut register va check xem rong hay day du
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('button-login').addEventListener('click',function(){
        var userCreate=document.getElementById('register-user').value;
        var passwordCreate=document.getElementById('register-password').value;
        if ((userCreate != null && /\S/.test(userCreate)&&
        (passwordCreate != null && /\S/.test(passwordCreate)))){
            createAccount(userCreate,passwordCreate);
            alert('Successfully registered')
            window.location.href='../html/index.html'
        } else alert('Please enter your username and password')
    });
})

//XU LY O TRANG LOGIN
//check thong tin dang nhap o trang login
function login(usernameLogin, passwordLogin){
    const keyLogin={
        'username':usernameLogin,
        'password':passwordLogin,
    }
    const parseKeys=JSON.parse(localStorage.getItem('keys'));
    //check xem keyLogin co trong keys trong parseKeys hay k
    check=false;
    for (var i=0; i<parseKeys.length; i++){
        if (parseKeys[i].username==keyLogin.username &&
            parseKeys[i].password==keyLogin.password){
                check=true;
                break;
            }
    }
    if(check){
        redirectToFinalPage()
    } else alert('Wrong pass or unexisted account')
}
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('button-login').addEventListener('click',function(){
        var usernameLogin=document.getElementById('login-input-user').value;
        var passwordLogin=document.getElementById('login-input-pass').value;
        if ((usernameLogin != null && /\S/.test(usernameLogin)&&
        (passwordLogin != null && /\S/.test(passwordLogin)))){
            login(usernameLogin,passwordLogin);
        } else alert('Please enter your username and password')
    });
})
function redirectToFinalPage(){
    window.location.href='../html/index1.html'
}

//main page
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('logoutbutton').addEventListener('click',function(){
        if (confirm('Are you sure you want to log out')){
        window.location.href='../html/index.html'}
    })})

