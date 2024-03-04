// merge array concat()
console.log('--------merge array concat');
const a=['a','b','c']
const b=[1,2,3]
const c=a.concat(b)
console.log(c);
// every()
console.log('--------every');
const data_every=[1,2,3,4,5]
function check_every(element) {
    return element%2==0
}
if (data_every.every(check_every)){
    console.log('Yes');
} else{
    console.log('No');
}
//some()
console.log('--------some');
const data_some=[1,2,3,4,5]
function check_some(ele) {
    return ele%2==0
}
if (data_some.some(check_some)) {
    console.log('Yes');
} else{
    console.log('No');
}
//filter
console.log('--------filter');
const  data_filter=[1,-2,3,4,-5]
function check_positive(ele){
    return ele>0
}
const filter_arr=data_filter.filter(check_positive)
console.log(filter_arr);

//find() and findIndex()
console.log('--------find and findIndex');
const data_find=[-1,-2,3,4,-5]
const find=data_find.find(check_positive)
const findIndex=data_find.findIndex(check_positive)
console.log(findIndex, find);

//forEach
console.log('----------forEach method');
const data_forEach = [1, 5, 30, 26];
data_forEach.forEach(myFunction);
function myFunction(element) {
    if (element % 5 === 0) {
        console.log(element);
    }
}

//lastIndexof() and firstIndexof()
console.log('----- lastIndexof');
const data_l_index=[-1,2,3,4,2,6]
console.log(data_l_index.indexOf(2));
console.log(data_l_index.lastIndexOf(2));
//join()
console.log('--------join method');
const data_join1=['a','b','c']
console.log(data_join1.join(', ')); 
//map()
console.log('--------map method');
const data_map=[1,-2,-9]
const map_abs=data_map.map(Math.abs)
console.log(map_abs);

//viet lai ham 
// ham map
console.log('--------viet lai ham map');
console.log('----for');
const dmap=[1,2,3,4,5,6]
var map_res=[]
for (let index = 0; index < dmap.length; index++) {
    const element = dmap[index]+2;
    map_res.push(element)
    
}
console.log(map_res);
console.log('----while');
let map_res1=[]
let index_map=0
while (index_map<dmap.length){
    const element1=dmap[index_map]+2;
    map_res1.push(element1)
    index_map++
}
console.log(map_res1);
//ham forEach
console.log('---------viet lai ham forEach');
console.log('----for');
let sum=0;
const arr_forEach=[2,3,5,6,4,6]
for (let index = 0; index < arr_forEach.length; index++) {
    sum+=arr_forEach[index]    
}
console.log('Sum: ',sum);
console.log('----while');
let sum1=0
let index_foreach=0
while (index_foreach<arr_forEach.length){
    sum1+=arr_forEach[index_foreach]
    index_foreach++
}
console.log('Sum1: ',sum1);
//ham find va findIndexof
console.log('---------viet lai ham find va findIndexof');
console.log('----for');
const arr_find=[-2,3,2,5,6,4,6]
let find_re=0
let findIndex_re=0
for (let index = 0; index < arr_find.length; index++) {
    if (arr_find[index]==2) {
        find_re=arr_find[index];
        findIndex_re=index
        {break;}
    }
}
console.log(findIndex_re, find_re);
console.log('----while');
let find_re1=0
let findIndex_re1=0
let index_find=0
while (index_find<arr_find.length){
    if (arr_find[index_find]==2){
        find_re1=arr_find[index_find]
        findIndex_re1=index_find
        break;
    }
    index_find++
}
console.log(findIndex_re1, find_re1);
//ham reduce 
console.log('---------viet lai ham reduce');
console.log('-----for');
const data_reduce = [5, 10, 15, 20, 25];
let res = 0;
for (let index = 0; index < data_reduce.length; index++) {
  res += data_reduce[index];
}
console.log(res);
console.log('-----while');
let index_reduce=0
let res1=0;
while (index_reduce<data_reduce.length){
    res1+=data_reduce[index_reduce]
    index_reduce++
}
console.log(res1);
//ham filter
console.log('---------viet lai ham filter');
console.log('---for');
const data_filter1 = [5, 13, 15, 26, 25];
var res_filter = []
for (let index = 0; index < data_filter1.length; index++) {
    if (data_filter1[index]%5==0){
        res_filter.push(data_filter1[index])
    }
}
console.log(res_filter);
console.log('----while');
let res_filter1 = [];
let index_filter = 0;
while (index_filter < data_filter1.length) {
    if (data_filter1[index_filter] % 5 == 0) {
        res_filter1.push(data_filter1[index_filter]);
    }
    index_filter++;
}

console.log(res_filter1);



