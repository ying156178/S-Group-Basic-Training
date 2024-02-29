//es5
    // var as=10;

//es6 dang dung cai nay
    // let a=10;
    // const ab=1;
    // var abc=10;

//kieu du lieu js
//number (int, float) - có giới hạn xử lí
//string
//bigint (integer dùng xử lí dữ liệu số lớn)
//boolean (true, false) 
//undefined (khởi tạo k gán giá trị)
//null ()
//symbol (khai báo giá trị duy nhất trong system)
//object (chứa các cặp key và value)

// comment  // or /* */
    // const sys=Symbol('heheehehheheh')
    // const sys2=Symbol('fffrs')
    // const data={
    //     name: 'nha',
    //     age: '12',
    //     address: '123'
    // }
// in ra console 
// console.log(a)
    // const v1=2;
// console.log('heeheeh'+v1);
// let a=10;
// const ab=1;
// var abc=10;
    // console.log(typeof(a))


// thể hiện đặc tính duy nhất của Symbol 
    // const sym1=Symbol('hehe');
    // const sym2=Symbol('hehe')
    // console.log(sym1==sym2)

// khai bao 
/*
const: hằng số khởi tạo thì k thể thay đổi giá trị 
var: scope global (k thể dùng trong function khác), nếu khai báo trong function thì ở ngoài k xài được 
let: scope nhỏ hơn 
*/

    // if (true){
    //     let ex1=1;
    //     var ex2=2;
    // }
    // ex1=ex1+1;
    // ex2=ex2+1;
    // console.log('ex1 ='+ex1+',ex2 =' +ex2) //chỗ này lỗi vì let ex1 chỉ hoạt động trong scope if (true)đó
// in ra lỗi
//var cho phép thực hiện khai báo lại
//let k cho phép
// if (true){
//     let ex1=1;
//     let ex1=1; 
//     console.log(ex1) //err
//     var ex2=2;
//     var ex2=5;
//     console.log(ex2)
// }
// hoisting
    // console.log(h1);
    // let h1=10;
/* may se hieu thanh
let h1;
console.log(h1)
h1=10;
*/
    // console.log(h2);
    // var h2=12;
/* may se hieu thanh
var h1;
console.log(h2)
h2=12;
*/


// type: const
// tương tự như let, block scope 
// hoisting nhưng k được khởi tạo giá trị
// let có thể cập nhật giá trị còn const k cho cập nhật giá trị

// undefined and null
// bản chất tất cả mọi thứ trong js đều là object 

// operator (toán tử)
// +-*/ ++ -- 
    // let b1=1;
    // let b2=2;
    // let b3=b2+b1;
    // console.log(--b3)

// so sanh
// === | == | !==
/*
== so sanh gia tri
=== so sanh gia tri va kieu du lieu
*/
    // let b1=1;
    // let b2='1';
    // let b3 = b2 ==b1;
    // // let b3 = b2 ===b1;
    // console.log(b3)

    // //condition? md true: md false  //check cond, neu dung thuc hien md true, neu sai thuc hien md false
    // b1==b2? console.log('dung'):console.log('sai')

// number+string -> string
// from string -> number: parseInt(namevar), parseFloat(namevar)
// pro hon c= +b
// from number -> string: name.toString()
    // let a=2;
    // let b='2.7';
    // let c=parseFloat(b); //chi chuyen gia tri hop le thanh float
    // console.log(c)


// toan tu logic, dung trong condition clause
//  && and
//  || or
//  ! not

//  so sanh bit (chuyen qua he nhi phan) 
// xem hinh o obsidian 
// 1 true 0 false 
// not thi dao nguoc lai 
// XOR giống nhau -> false, khác nhau -> true
// left shift 5<<1  dich chuyen qua trai 1 bit 
// right shift 
// unsigned right shift 

// dieu kien
// switch case neu co nhieu statement thi co dau {}

// from other types -> boolean 
// false, 0, "", undefined, null, NaN 
    // let a=2;
    // let b='2.7';
    // Boolean(a) //k thay doi gia tri
    // a= Boolean('') //number to boolean, nen su dung
    // a=!!a; //cach 2 of num to boolean
    // // console.log(typeof (a))
    // console.log(a)

// chuyen sang bigInt
    // let c=2n;
    // console.log(typeof(c))

// kieu du lieu string 
    // let str="hehehe";
    // let str2='              huhu          '
    // console.log(str);
    // console.log(str.length);
    // console.log(str.charCodeAt(0)); //chuyen qua bang ma ascii
    // console.log(str.concat(str2));
    // console.log(str.startsWith('hehe'));
    // console.log(str.endsWith('hehe'));


// các tiêu chí so sánh
// - scope
// - hoisting

// method trim: cắt những kí tự trắng bị dư, k thay doi du lieu goc, muon thay doi thi gan lai
    // console.log(str2.length);
    // console.log(str2.trim());
    // str2=str2.trim() //gán gia tri 
    // console.log(str2.length);

// method split: tach string thanh array dua vao ki tu dua vao trong ham
    // let text='a, b, c; d, e, f, g, h, i'
    // const data=text.split(',')
    // console.log(data);

// substring: cat chuoi con tu chuoi me
    // let str='Apple, Banana, Kiwi'
    // const test=str.substring(3,10) 
    // console.log(test);


// JS ARRAYS 

// cac phan tu trong array js co the khac kieu du lieu
    // const arr=[12,'hehe']
// push them phan tu vao cuoi mang
// unshif them phan tu vao dau mang
    // arr.push(123)
    // console.log(arr);
// method pop() k tryen doi so, xoa phan tu cuoi cung cua mang 
// shift xoa phan tu dau tien cua mang 
    // arr.pop()
    // console.log(arr);
// method find() 
    // const arr=[12,'hehehehe',44,656,342,'353','rewe']
    // arr.find(1)
    // console.log(arr.find(string));

// join: chuyen tu arr sang str, neu muon bo dau phay trong array goc thi bo cai do vao trong ham 
    // const arr=[12,'hehehehe',44,656,342,'353','rewe']
    // console.log(arr.join(','));
//concat noi mang 
//splice: ghi de len  arr
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // At position 2, add 2 elements: 
    // fruits.splice(2, 0, "Lemon", "Kiwi");  //2 là vị trí, 0 là số phần tử muốn xóa, sau đó là các phần tử muốn thêm vào tại vị trí đó
    // console.log(fruits);
    // fruits.splice('ehrhwjwer') //mac dinh xoa het cac phan tu hien co va them phan tu moi vao
    // fruits.splice(1,'rfrerf',3432) //so 1 la vi tri, para2 neu la string thi mac dinh para 2 = 0 sau do them cac phan tu mong muon vao

//slice: cho phep lay sub-array tu array me, chi copy tu arr,k anh huong arr goc
    // console.log(fruits.slice(1,3));



// JS OBJECT
    // const obj={
    //     name:'Oanh',
    //     age: 12,
    //     email: 'hehe'
    // } //dinh nghia theo cach thuan tuy, truc tiep

// keyword: CONSTRUCTOR: khởi tạo 
// object constructor: khởi tạo đối tượng 
// cach 1: khoi tao truc tiep
    // const ab={
    //     name: 'hehe',
    //     age: 12,
    //     email: 'huhu'
    // }
// cach 2: dua tren function

    // let flex='heoheo'
    // function User(name,age,id) { //bảng mẫu: this.mau, this.dong co 
    //     this.name=name;
    //     this.age=age; //con tro this chi dung doi tuong me cua chung
    //     this.id=id;
    //     this.getName =function (){
    //         return this.name
    //     },
    //     [flex];'hhiihgghdgf'
    // }
    // let p1=new User('oanh',12,1212313)
    // let p2=new User('hooo',13,2342349)
    
    // console.log(p1);
    // console.log(User);


    // console.log(p1);
    // console.log(p1.age); //cach 1
    // console.log(p1['age']); // cach 2
    // console.log(p1.getName());
    // console.log(`p1: ${p1}`); //dung de truyen bien vao
    // console.log(`p2: ${p2}`);
    // console.log(p1);
    // console.log(p2);
// cach them cap key value vao 1 object
    // p1.namekey='valuename'
    // p1.gender='0';
    // console.log(p1);
// cach xoa
    // delete p1.namekey
// -> viec thay doi tac dong den p1 k anh huong den p2 
// method chuyen str sang object 
// method chuyen object sang str


// OBJECT PROTOTYPE: nguyên mẫu: những chi tiết tạo nên khuôn mẫu, từ khuôn mẫu có thể tạo ra các đối tượng khác nhau 
// PROTOTYPE KHÁC PROPERTY: tìm hiểu thêm 
/* prototype là cái khuôn đúc ra các object, 
các object được đúc ra prototype đó thì sẽ được thừa hưởng các property trong prototype đó
nếu có thêm các property cho từng object thì những object đó cũng vẫn sẽ có prototype đó 
nhưng ngoài các thuộc tính được thừa kế từ prototype thì có thêm cái thuộc tính được thêm 
*/
    // User.prototype.gender=0  //phai gan gia tri cho prototype thi no moi thanh cong gan prototype 
    // console.log(p1);
    // p1.gender=1;
    // console.log(p1.gender); 
    // console.log(p1.constructor.prototype.gender);  //lay gia tri prototype
    // console.log(Object.getPrototypeOf(p1).gender);

    // Object.keys(p1)  //truyen ra key cua object


// JS DATE

    // let date = new Date() //kieu du lieu la object, co nhieu ham ho tro nhu getDay(), getMonth(), get
    // let date2= Date() //kieu du lieu la str 
    // console.log(date);
    // console.log(date2);
    // console.log(date.getTime()); //so giay (sec)=thoi gian ban get - 1/1/1970
    // console.log(date.getDate());
    // console.log(date.getMonth()+1); //se bij= thieu 1 thang nen phai cong 1
    // console.log(date.getDay()); //tu 0-6 aka tu cn - t7

// JS MATH
    // let ab=10.875345
    // console.log(Math.floor(ab)); //lam tron xuong duoi nhung lay so nguyen to nhat
    // console.log(Math.trunc(ab)); //lay nguyen

    // console.log(Math.ceil(ab)); //lam tron len tren (lay phan nguyen +1)
    // console.log(Math.round(ab));
    // console.log(Math.min(ab,3432,432,32,32423,324));
    // console.log(Math.min('a','b','c')); //=> trong ham min max chi nhan số học 



// JS LOOP
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // for(let i=0;i<fruits.length;i++){
    //     console.log(fruits[i]);
    // }
    // const obj={
    //     name: 'oanh',
    //     age: 12,
    // }
    // for (let x in fruits){
    //     console.log(obj[x]);
    // }
    // //for of dung duoc voi string, array nhung k dung duoc voi object
    // for(let i of fruits){
    //     console.log(x);
    // }

 // do while: thuc hien truoc kiem tra sau 
// while do: kiem tra dieu kien xong moi thuc hien
//forEach(): ham k return ve
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
//     fruits.splice(2, 0, "Lemon", "Kiwi");
//     function av(index,value,arr){
//         console.log(`index: ${index}, value: ${value}, arr: ${arr}`);
// }
//     fruits.forEach(av);
// //lap qua tung phan tu, hoan thanh phan tu nay den phan tu khac 
//     fruits.forEach((value,index,arr)=>{
//         console.log(value);
//         console.log(index);
//         console.log(arr);
//         console.log(`index: ${index}, value: ${value}, arr: ${arr}`);
//     })
// a round function
    // const av= (a,b) => {
    //     //hehe
    //     return
    // }

    // for (let i in fruits) {
    //     console.log(i);
    //     console.log(fruits[i]);
    //     console.log(fruits);
    // }


// JS ARRAY FIND: tra ve gia tri dau tien thoa man dieu kien, roi out vong lap, co return
    // function av(index,value,arr){
    //     console.log(`index: ${index}, value: ${value}, arr: ${arr}`);
    // }
    // const hihi =[1,3,2,5]
    // const test=hihi.find((value,index,arr) => {
    //     return value>2
    // })
    // console.log(test);
// // find index
    // const test1=hihi.findIndex((value,index,arr) => {
    //     return value>2
    // })
    // console.log(test1);
// // filter : loc gia tri, chayj het tat ca gia tri de duyet 
    // const test2=hihi.filter((value,index,arr) => {
    //     return value>2
    // })
    // console.log(test2);
// includes : so sanh ===
    // const hihi =[1,3,2,5,4]    
    // const test3=hihi.includes('1')
    // console.log(test3);

// // map: co return de  biet tra ve mang nhu the nao, 
//con k return thi tra ve mang undefined 
// map dùng để tạo ra mảng mới dựa trên việc ánh xạ mảng cũ 
    // const test4 =hihi.map((value)=>{
    //     value+=2
    //     console.log(value);
    //     return value+4
    // }) 
    // console.log(test4);

// reduce 
    // const test5=hihi.reduce((preVal,curVal,index,arr)=>{
    //     console.log(`pre-value: ${preVal}`);
    //     console.log(`cur-value: ${curVal}`);
    //     console.log(`index: ${index}`);
    //     console.log(`arr: ${arr}`);
    //     console.log('--------------------------------');
    //     return preVal+curVal
    // },1000)  //1000 la gia tri duoc khoi tao cua bien luu tru 
    // console.log(test5);
    