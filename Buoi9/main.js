    // function h(tag, props,children) {
    //     return {
    //         tag,
    //         props,
    //         children
    //     }
    // }
    // const a=h(1,2,3)
    // console.log(a);
    // console.log(a);
    // console.log(a);
    // console.log(a);
    // console.log(a);

//dong bo: code chạy từ trên xuống dưới từ trái qua phải 

//bat dong bo: hàm chờ, 
//setTimeout(): code da chay nhung chua xu ly, thu tu code chay k dung thu tu 
    // setTimeout(function(){
    //     console.log('setTimeout');
    // },1000)
    // console.log('no setTimeout');
//call stack: nang cao tu tim hieu them 


//array method
//callback: la 1 function duoc truyen vao 1 function khac duoi dang doi so
//setTimeout(callback, delay)   call back se chay sau khi delay xong, unit of delay: 1/1000s
    // function abc(){
    //     console.log('a');
    // }
    // setTimeout(abc,1000)
    // setTimeout(function(){
    //     console.log('b');
    // },3000)

//setInterval: vong lap thoi gian, sau 1 khoang thoi gian thi no chay lai
    // let i=0
    // setTimeout(function(){
    //     console.log(i);
    //     i++
    // },1000)


//hai cai nay can dừng, vì sao

    // const file=FileSystem.getFile('main.js')
    // setTimeout(function(){
    //     if (!file) console.log('File not found');
    // },30000)

//giả dụ get được file trong 1s thì sẽ có settimeout trong bộ nhớ chờ 29s => đầy bộ nhớ 


//clearInterval: xoa interval
//viết vòng lặp k nên dùng so sánh bằng vì đôi khi có trường hợp nó nhảy nhanh sẽ bị lặp vô hạn
    // let i=0;
    // const vonglap= setInterval(function(){
    //     console.log(i);
    //     i++

    //     if (i>=5){                  
    //         clearInterval(vonglap);
    //         console.log('Ket thuc Interval');
    //     }
    // },500)  

//clearTimeout: xoa Timeout
    // const timeout=setTimeout(function(){
    //     console.log('set Timeout');
    // },100)
    // setTimeout(function(){
    //     clearTimeout(timeout);
    // },99)
    // let i=0;
    // while (i<1000){
    //     console.log(i);
    //     i++;
    //     clearTimeout(timeout);
    //     timeout=setTimeout(function(){
    //         console.log('set timeout');
    //     },100)
    // }

//viet 1 ham interval in ra 1 so sau 1 s
//clear interval sau 5s
    // let j=0;
    // const exer= setInterval(function(){
    //     console.log(j);
    //     j++;
    // },1000)
    // setTimeout(function(){
    //     clearInterval(exer);
    //     console.log('ket thuc');
    // },5000)

//ngoài lề
// for (i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },0)
// }
//call stack again
//nếu muốn code mình chạy cuối cùng thì có thể nhét hàm trong setTimeout 
//xuất ra 3 3 3 vì nó chia ra 2 vùng thực thi, nó chạy vòng lặp tăng i rồi mới chạy setTimeout mà lúc đó i trong bộ nhớ = 3 nên xuất ra 333 
// for (let i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },0)
// }
//cái này xuất ra 0 1 2 
//hoisting 
//implement js 
//do khai bao let i trong vòng for nên khi vòng lặp for kết thúc mấy cái i bị dọn sạch trong bộ nhớ
//giờ nó in ra nhờ implement trong js (chuyển qua C)

//Promise: là 1 object 
    // let randomNumber;
    // const myPromise= new Promise((resolve, reject) => {    
    //     //resolve va reject la 2 callback, k dung duoi then and catch 

    //     //tam comment
    //     // setTimeout(() => {
    //     //     received = true;
    //     // },1000)
    //     //ung dung thuc te 
    //     // const file =FileSystem.getFile(pathtofile)


    //     randomNumber=Math.random()*10

    //     //fulfilled
    //     if (randomNumber>5) resolve (randomNumber)   //value trong resolve se duoc truyen vao then
    //     //rejected
    //     else reject (randomNumber)  //value trong reject se duoc truyen vao catch 
    // })

    // myPromise
    // .then(function(fulfilledNumber){
    //     console.log('fulfill: ',fulfilledNumber);
    // })
    // .catch(function(rejectedNumber){
    //     console.log('reject: ',rejectedNumber);
    // })


    //doan nay la dang chung minh gia tri cua resolve vo then, reject vao catch 
    // myPromise
    // .then(
    //     function(value){
    //         console.log('Resolved value', value);
    //     }
    // )
    // .catch(
    //     function(value){
    //         console.log('Rejected Value', value);
    //     }
    // )

    //vì sao có 2 trường hợp, vì k biết thất bại hay thành công
    // nên viết code xử lý cả 2 trường hợp 

    // fetch()

    //btvn
//viết hàm promise randomNumber, thành công khi randomNumber>50 thì trả về số random gốc ban đầu
//thất bại khi randomNumber <10 trả về lỗi 'Số nhỏ quá' 
    let randomNumber_exer;
    const myPromise= new Promise((resolve,reject)=>{
        randomNumber_exer=Math.random()*100
        //fulfilled 
        if (randomNumber_exer>50) resolve(randomNumber_exer)
        //rejected
        else if (randomNumber_exer<10) reject(randomNumber_exer)
    })
    myPromise
    .then(function(randomNumber_exer){
        console.log('Fulfilled value: ',randomNumber_exer/100)})
    .catch(function(randomNumber_exer){
        console.log('So nho qua');
        console.log('Rejected value: ',randomNumber_exer/100)
    });


// event loop: tu tim them





        