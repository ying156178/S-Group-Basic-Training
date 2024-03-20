
function createAccount () {
    //check xem local storageq is empty
    var keys = JSON.parse(localStorage.getItem('keys'));
    if (keys===null){
        keys=[];
    }
    //create a new account
    const userCreate=document.getElementById('username-create').value;
    const passwordCreate=document.getElementById('password-create').value;
    const objKey={
        'username':userCreate,
        'password':passwordCreate,
    };
    keys.push(objKey);
    const setJSONKeys=JSON.stringify(keys);
    localStorage.setItem('keys',setJSONKeys);
    redirectToLoginPage()
}
//lang nghe su kien click vao nut create de dieu huong den trang login
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('create-button').addEventListener('click',createAccount);
})
//dieu huong toi trang login
function redirectToLoginPage () {
    window.location.href='./login.html'
}


//XU LY O TRANG LOGIN
//check thong tin dang nhap o trang login
function login(){
    const usernameLogin=document.getElementById('username-login').value;
    const passwordLogin=document.getElementById('password-login').value;
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


//lang nghe su kien click vao nut login de check 
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('login-button').addEventListener('click',login);
})
//dieu huong toi final page
function redirectToFinalPage(){
    window.location.href='./nextpage.html'
}
