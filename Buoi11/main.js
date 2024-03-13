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
