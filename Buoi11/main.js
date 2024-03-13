//async/ await 

// function rewriteFetch(url){
//     const promise = new Promise((resolve, reject) => {
//         fetch(url)
//             .then(res => {
//                 return res.json()
//             })
//             .then(data => {
//                 resolve(data)
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })

//     return promise
// }

// rewriteFetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(function (data) {
//         console.log('then 1', data)
//         return rewriteFetch(data.species.url)
//     })
//     .then(function (data) {
//         console.log('then 2', data)
//         return rewriteFetch(data.evolution_chain.url)
//     })
//     .then(function (data) {
//         console.log('then 3', data)
//         return rewriteFetch(data.chain.species.url)
//     })
//     .then(function (data) {
//         console.log('then 4', data)
//     })
//     .catch(function (error) {
//         console.error(error)
//     })

// giải quyết callback hell


    // async function fetchData2(){
    //     const data =fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //     console.log(data);
    // }

    // fetchData2()
//=> đoạn này xuất promise + ten trạng thái gio phải thêm await vô, so sánh hai đoạn code 
   
    // let data
    // async function fetchData2(){
    //     const data =await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //     console.log(data);
    // }

    // fetchData2()

//test 
    // fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    // .then(res => {
    //     return res.json()
    // })
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.log(error);
    // })


//async await code 
    // let data
    // async function fetchData2(){
    //     //lan 1
    //     data =await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //     data=await data.json()   //json() là một promise nên phải await trước 
    //     console.log(data);
    //     //lan 2
    //     data =await fetch(data.species.url)
    //     data=await data.json()
    //     console.log(data);
    //     //lan 3
    //     data =await fetch(data.evolution_chain.url)
    //     data=await data.json()
    //     console.log(data);
    //     //lan 4
    //     data =await fetch(data.chain.species.url)
    //     data=await data.json()
    //     console.log(data);
    // }
    // fetchData2()

//json() là một promise nên phải await trước 
//fetch cung la 1 promise 


//viet lai cai batdongbo1 2 theo async await


        // function batDongBo1() {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             console.log('tai du lieu 2s');
        //             resolve('resolve');
        //             // reject('tai du lieu  2s that bai')
        //         }, 2000)
        //     })
        // }
        // function batDongBo2() {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             console.log('tai du lieu 3s');
        //             resolve('resolve')
        //             // reject('tai du lieu 3s that bai')
        //         }, 3000)
        //     })
        // }


// async function handleBdb(){
//     const bdb1= await batDongBo1()
//     console.log(bdb1);
//     const bdb2= await batDongBo2()
//     console.log(bdb2);
// }
// handleBdb()

// async function handleBdb2(){
//     const pr= await Promise.all(
//         [batDongBo1(),
//         batDongBo2()]
//     )
//     console.log(pr);
//     console.log('done');
// }
// handleBdb2()

//doan nay doi code hai ham batdongbo1 2 thanh reject de test 
    
// async function handleBdb3(){
//         await batDongBo1();
//         await batDongBo2();
//     }
//     handleBdb3()


//try catch : xử lý ngoại lệ

    // async function handleBdb4(){
    //     try{
    //         // const pr= await Promise.all(
    //         //     [batDongBo1,
    //         //     batDongBo2]
    //         // )
    //         // console.log(pr);
    //         // console.log('done');
    //         console.log(1+2);
    //         if (3!==4) throw new Error('sai')
    //         console.log('hehehe');
    //     }
    //     catch (err){
    //         console.log('loi',err);
    //         // console.log('loi',err);

    //     }
    // }
//catch cho phép phát hiện lỗi và báo cho người dùng biết 
//lỗi trong he thong in ra trong console -> lấy lỗi trong console vào file riêng -> báo về để xử lý 
    // handleBdb4()

    // api_url='https://pokeapi.co/api/v2/pokemon/pikachu'
    // var h1=document.querySelector('h1')
    // setTimeout(()=>{
    //     fetch(api_url)
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data);
    //         return data
    //     })
    //     .then(data=>{
    //     h1.innerText=data.name
    //     let ele=document.createElement('img')
    //     document.body.appendChild(ele)
    //     ele.src=data.sprites.front_default
    //     ele.style.display='block'
    //     ele.style.margin='0 auto'
    //     ele.style.width='20%'
    //     })    
    //     },3000)

//code tren sang async await 
// ve viet de

//local storage: nếu có key, value ở local thì đổi browser vẫn có, 
//lưu vĩnh viễn chỉ có delete chứ k có expired 
//stop server thì sẽ mất 
// lưu giá trị string 

//session storage: chỉ tồn tại trong 1 tab, nếu tắt tab bật lên lại thì nó cũng biến mất



    api_url='https://pokeapi.co/api/v2/pokemon/pikachu'


    // var h1=document.querySelector('h1')
    // setTimeout(()=>{
    //     fetch(api_url)
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data);
    //         return data
    //     })
    //     .then(data=>{
    //     h1.innerText=data.name
    //     let ele=document.createElement('img')
    //     document.body.appendChild(ele)
    //     ele.src=data.sprites.front_default
    //     ele.style.display='block'
    //     ele.style.margin='0 auto'
    //     ele.style.width='20%'
    //     localStorage.setItem('name',data.name)
    //     localStorage.setItem('src',data.sprites.front_default)
    //     })    
    //     },3000)
    // const name1 =localStorage.getItem('name')  //đối số truyền vào là key 
    // console.log(name1);
    // const src=localStorage.getItem('src')
    // console.log(src);



    const name1 =localStorage.getItem('name')  //đối số truyền vào là key 
    console.log(name1);
    const src=localStorage.getItem('src')
    console.log(src);
    var h1=document.querySelector('h1')
    if (name1 && src) {
        console.log('hhheheh',src);
        h1.innerText=name1
        let ele=document.createElement('img')
        document.body.appendChild(ele)
        ele.src=src
        el.style.display='block'
        ele.style.margin='0 auto'
        ele.style.width='20%'
    } else{
        setTimeout(async function(){
            const response = await fetch(api_url)
            data = await response.json()
            console.log(data);
            localStorage.setItem('name',data.name)
            localStorage.setItem('src',data.sprites.front_default)
            h1.innerText=name1
            let ele=document.createElement('img')
            document.body.appendChild(ele)
            ele.src=src
            el.style.display='block'
            ele.style.margin='0 auto'
            ele.style.width='20%'
        },3000)
    }


    //tim them session storage 

//JSON.stringtify() 
async function fetchapi2(){
    const response = await fetch(api_url)
    data = await response.json()
    console.log(data);
    console.log(data,'gihihi');
    localStorage.setItem('data',JSON.stringify(data))
    console.log(JSON.parse(localStorage.getItem('data')).name);    
}
fetchapi2()

//cac phuong thuc trong local storage
//clear or remove pair key and value 
//remove theo key
//clear het tat ca 