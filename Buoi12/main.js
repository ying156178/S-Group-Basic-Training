//array prototype 
//property ngang prototype chu k phai nam trong prototype

// const a=[]
// console.log(a);

//this
//object constructor
    // const user ={
    //     name:'hhheeheh',
    //     age: 13,
    //     id: 231124,
    //     get getName2(){
    //         return this.name;
    //     },
    //     getName: function(){
    //         return this.name;
    //     },
    //     set setAge(age){
    //         this.age = age;
    //     },
    //     setAge2: function(age){
    //         this.age =age;
    //     }
    // }
    // console.log(user.getName);
//get có trước tên hàm thì lúc gọi hàm k cần có dấu ()
//k có thì gọi hàm cần có dấu ()
//set có ít nhất 1 para truyền vào

//k dung setter
// user.setAge2(14)
// console.log(user.age);
// //dung setter 
// user.setAge =16
// console.log(user.age);

//demo ve callstack
    // console.log('1');
    // setTimeout(function(){
    //     console.log('2');
    // },2000)
    // console.log('3');
    // setTimeout(function(){
    //     console.log('4');
    // },1000)


    // phân rã: destructuring
    // const data={
    //     userName: 'hello',
    //     pass: '123',
    //     id: 'tr343r2',
    //     age: 5,
    // }
    // console.log(data.userName);
    // console.log(data.pass);
    // console.log(data.id);

    //cach ngan hon
    // const {userName,pass, id,age}=data

    
    //dien giai no ra la nhu nay 
        // userName=data.userName
        // pass=data.pass;
        // id=data.id;

    //log dua vao key, k dua vao vi tri 
    // console.log(userName.id);
    // console.log(userName.age);

    // const {userName,pass, id,age =12}=data //du log age thi no van ra 5

    // const arr=[1,2,3,4,5]
    // const [e,v,f,g,h] = arr   //lay het bien
    // console.log(e,v,f,g,h);
    // const [e,,f,g,h] = arr   //lay gia tri 1345 

    //lay 2 so dau sau do gop thanh 1 array
    //rest ele phai nằm cuối cái phân rã, k cho nằm giữa 
    // const[a,b,...c]=arr
    // console.log(a,b,c);

    // const[a,b,c,d,e,...f]=arr
    // console.log(a,b,c,d,e,f)

    //...spread 
    // const arr1=[1,2]
    // const arr2=[3,4]
    // const arr_tong=[...arr1,...arr2]  //giup copy array vao 
    // console.log(arr_tong);


    const user2={
        name: 'hello',
        age: 12,
        gender: 1,
    }
    //user3 co cung tuoi gioi tinh nhung khac ten 
    //thu cong: nhin tren cop xuong 
    //cach dung spread
    const user3= {
        ...user2, 
        name: 'define again'
    }
    console.log(user3);


    const data1={
        name: '',
        age: '',
        id: '',
        email: '',
    }
    const {name,age,id,email}=data