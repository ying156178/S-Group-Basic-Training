//event loop


// const API_URL ='https://pokeapi.co/api/v2/pokemon/ditto'
// //fetch: web api, phai chay tren web server moi thuc thi mot so ham
// const pokemondata=fetch(API_URL)
// pokemondata.then(res=>{
//     // console.log(res.json()); //bo cai nay di
//     return res.json()
// }).then(data =>{
//     console.log('Fulfilled',data);
// })



//fetch(url, callback)
//xmlhttprequest
//callback hell 
//neu dung fetch thì có 2 bước: 1 là get data .json() bước 2 là xử lý data => nhét vào 1 promise 


// .finally chạy cuối và kết thúc, luôn luôn chạy bất kể là lỗi 
// thường dùng để cuối cùng xử lý kết quả như thế nào 
// cấu trúc
//.then .catch .finally 


//Promise.all():ví dụ thực hiện 2 promise 1 lúc nhưng muốn log ra cùng 1 lượt
//xử lý toàn bộ bất đồng bộ 
// đối số của nó là 1 mảng, chứa những promise khác nhau và kể cả k phải promise 
//chờ cho tất cả promise chạy xong nó mới báo fulfill or reject 
//fulfill khi tất cả fulfill
//reject khi tồn tại 1 rệct
// k phải promise k ảnh hưởng tới then và catch
//catch bắt lỗi cái đầu tiên


    // function batdongbo1(){
    //     return new Promise((resolve, reject) =>{
    //         setTimeout(()=>{
    //             //resolve('Tai du lieu 2s thanh cong')
    //             reject('Tai du lieu 2s that bai')
    //         },2000)
    //     })
    // }
    // function batdongbo2(){
    //     return new Promise((resolve, reject) =>{
    //         setTimeout(()=>{
    //             //resolve('Tai du lieu 3s thanh cong')
    //             reject('Tai du lieu 3s that bai')
    //         },3000)
    //     })
    // }
    // const promise2s =batdongbo1()
    // const promise3s =batdongbo2()
    // const notpromise='k phai promise'
    // Promise.all(
    //     [
    //         promise3s,
    //         promise2s,
    //         notpromise
    //     ]
    // ).then(function (value){
    //     console.log(value);
    //     value.foreach(value =>{
    //         console.log(value);
    //     })
    // })


//test btvn
    // var h1=document.querySelector('h1')
    // setTimeout(function(){
    //     h1.innerText='Pikachu'
    //     let newele=document.createElement('img')
    //     document.body.appendChild(newele)
    //     newele.src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
    // },3000)


//thuc hanh real
api_url='https://pokeapi.co/api/v2/pokemon/pikachu'
var h1=document.querySelector('h1')
setTimeout(()=>{
    fetch(api_url)
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        return data
    })
    .then(data=>{
    h1.innerText='Pikachu'
    let ele=document.createElement('img')
    document.body.appendChild(ele)
    ele.src=data.sprites.front_default
    ele.style.display='block'
    ele.style.margin='0 auto'
    ele.style.width='20%'
    })    
    },3000)

// btvn 
// render cai bang thong tin sau khi loading 3s, api se duoc cung cap sau


const API_URL = "https://pokeapi.co/api/v2/pokemon/ditto"

const pokemonData = fetch(API_URL)

pokemonData.then(res => {
    return res.json()
}).then(data => {
    console.log('fulfilled',data)
})

function fetch(url, callback){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = () => {
        if (xhr.status === 200){
            callback(xhr.responseText, undefined)
        } else {
            callback(undefined, 'Error: ' + xhr.status)
        }
    }
    xhr.send()
}
// lan 1 - fetch pikachu
fetch('https://pokeapi.co/api/v2/pokemon/pikachu', function (data, error) {
    if (error){
        console.error(error)
    } else {
        data = JSON.parse(data)
        console.log(data)
        fetchData = data
        // lan 2 - fetch species
        fetch(data.species.url, function (data, error) {
            if (error){
                console.error(error)
            } else {
                data = JSON.parse(data)
                console.log(data)

                // lan 3 - fetch evolution_chain
                fetch(data.evolution_chain.url, function (data, error) {
                    if (error){
                        console.error(error)
                    } else {
                        data = JSON.parse(data)
                        console.log(data)

                        // lan 4 - fetch pichu
                        fetch(data.chain.species.url, function (data, error) {
                            if (error){
                                console.error(error)
                            } else {
                                data = JSON.parse(data)
                                console.log(data)
                            }
                        })
                    }
                })
            }
        })
    }
})

function promiseFetch(url){
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onload = () => {
            if (xhr.status === 200){
                resolve(xhr.responseText)
            } else {
                reject('Error: ' + xhr.status)
            }
        }
        xhr.send()
    })

    return promise
}

promiseFetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function (data) {
        data = JSON.parse(data)
        console.log('then 1', data)
        return promiseFetch(data.species.url)
    })
    .then(function (data) {
        data = JSON.parse(data)
        console.log('then 2', data)
        return promiseFetch(data.evolution_chain.url)
    })
    .then(function (data) {
        data = JSON.parse(data)
        console.log('then 3', data)
        return promiseFetch(data.chain.species.url)
    })
    .then(function (data) {
        data = JSON.parse(data)
        console.log('then 4', data)
    })
    .catch(function (error) {
        console.error(error)
    })

function rewriteFetch(url){
    const promise = new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                console(data)
            })
            .catch(error => {
                reject(error)
            })
    })

    return promise
}

rewriteFetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function (data) {
        console.log('then 1', data)
        return rewriteFetch(data.species.url)
    })
    .then(function (data) {
        console.log('then 2', data)
        return rewriteFetch(data.evolution_chain.url)
    })
    .then(function (data) {
        console.log('then 3', data)
        return rewriteFetch(data.chain.species.url)
    })
    .then(function (data) {
        console.log('then 4', data)
    })
    .catch(function (error) {
        console.error(error)
    })

const h1s = document.querySelectorAll('h1')
let message = 'dang tai du lieu...'
function batDongBo() {
    h1s[0].textContent = message
    console.log('dang tai du lieu...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject()
        }, 3000)
    })
}

batDongBo()
.then(
    function() {
        console.log('tai du lieu thanh cong')
        message = 'tai du lieu thanh cong'
        h1s[1].style.color = 'green'
    }
)
.catch(
    function() {
        console.error('tai du lieu that bai')
        message = 'tai du lieu that bai'
        h1s[1].style.color = 'red'
    }
)
.finally(
    function() {
        console.log('da tai xong')
        h1s[0].style.display = 'none'
        h1s[1].style.display = 'block'
        h1s[1].textContent = message
    }
)

function batDongBo1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('tai du lieu 2s')

            reject('tai du lieu  2s that bai')
        }, 2000)
    })
}
function batDongBo2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('tai du lieu 3s')
            reject('tai du lieu 3s that bai')
        }, 3000)
    })
}

const promise2s = batDongBo1()
const promise3s = batDongBo2()
const notPromise = 0
Promise.all(
    [
        promise3s,
        promise2s,
        notPromise,
    ]
)
.then(function (values) {
    console.log(values)
    values.forEach(value => {
        console.log(value)
    })
})
.catch(function (error) {
    console.error(error)
})
