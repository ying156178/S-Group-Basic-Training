
// function createAccount () {
//     const userCreate=document.getElementById('username-create').value;
//     const passwordCreate=document.getElementById('password-create').value;
//     const objKey={
//         'username':userCreate,
//         'password':passwordCreate,
//     };
//     const setJSONKey=JSON.stringify(objKey);
//     localStorage.setItem('key',setJSONKey);
//     redirectToLoginPage()
// }
// //lang nghe su kien click vao nut create de dieu huong den trang login
// document.addEventListener('DOMContentLoaded',function(){
//     document.getElementById('create-button').addEventListener('click',createAccount);
// })
// //dieu huong toi trang login
// function redirectToLoginPage () {
//     window.location.href='./login.html'
// }


// //XU LY O TRANG LOGIN
// //check thong tin dang nhap o trang login
// function login(){
//     const usernameLogin=document.getElementById('username-login').value;
//     const passwordLogin=document.getElementById('password-login').value;
//     const keyLogin={
//         'username':usernameLogin,
//         'password':passwordLogin,
//     }
//     const parseKey=JSON.parse(localStorage.getItem('key'));
//     if (is2ObjectEqual(parseKey,keyLogin)) {
//         redirectToFinalPage()
//     } else console.log('Wrong password');
// }
// //so sanh thuoc tinh trong 2 object keyLogin va parseKey
// function is2ObjectEqual(parseKey,keyLogin){
//     if (parseKey.username==keyLogin.username && parseKey.password==keyLogin.username){
//         return true
//     } else false
// }
// //lang nghe su kien click vao nut login de check 
// document.addEventListener('DOMContentLoaded',function(){
//     document.getElementById('login-button').addEventListener('click',login);
// })
// //dieu huong toi final page
// function redirectToFinalPage(){
//     window.location.href='./nextpage.html'
// }