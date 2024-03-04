// getElementById(Id)
    // const a = document.getElementById('hello')
    // console.log(a);
// //getElementsByClassName(className)
//     const b = document.getElementsByClassName('flex-container');
//     // console.log(b);
// //lấy ra 1 elements đầu tiên có selector được truyền vào
//     const c = document.querySelector('#hello')
//     // console.log(c);
//     const d = document.querySelectorAll('.hello')
//     // console.log(d);
//     const e=document.getElementsByTagName('li')
    // console.log(e);
//node list: research

// thay doi text cua element dau tien co id la hello
    // a.textContent = 'hhehehe' //du trong nay co tag name thi no van hieu do chi la string
    // a.innerText='huhu'   //du trong nay co tag name thi no van hieu do chi la string
    // c.innerHTML = "<p>hihihi</p>"


// them xoa cac phan tu
    // let el=document.createElement('button')  //create
    // el.textContent="Click me"  //set text
    // console.log(el);
    // a.appendChild(el)  //gắn vô DOM  append child chi cho them vao la node
    // let el2=document.createElement('button')
    // el2.textContent="Click" 
    // a.insertAdjacentElement("afterbegin",el2)
    // a.insertAdjacentElement("beforebegin",el2)
    //afterbegin
    //
//them 1 element them truoc element nao khac
    // a.insertBefore(el2,el)
//them vao truc tiep vao dom, them string hoac node deu duoc 
    // document.write('<p>hihiihihi</p>') // k khuyến khích dùng 
    //prepend(), after(), before()

// append cho phep them vao la node hoac string

// xoa cac phan tu
    // let b=document.getElementsByTagName('ul')
    // console.log(b);
    // b.removeChild(e[3])
// removeChild: remove ele con cua han 
// muon xoa chinh ban than
    // a.remove()

// cap nhat cac ele
    // a.replaceChild(el2,el)

// thuoc tinh
// lay ra attribute
    // const a = document.getElementById('link')
    // // console.log(a.href);
    // a.title ='link to w3'  //ten cua attribute phai la attribute duoc ho tro con k thi k hien 
    // a.setAttribute('title','heheeheh')   //ten attribute, noi dung cua attribute, co the set ten attribute k duoc ho tro nhung van hien 
    // console.log(a.getAttribute('href'));

// xoa thuoc tinh
    // a.removeAttribute('title')

    // a.classList.add('hihi')
    // a.classList.remove('link-to') //neu texxt cua attribute k ton tai thi thoi, co thi xoa
//tim hieu them class list 

// get gia tri cua 1 thuoc tinh
    // console.log(a.className);  //phai go className chu k phai Class
// them className
    //element.className += " heheh"


// //js style: js k ho tro dau gach ngang 
//     a.style.color= 'pink'
//     a.style.border=' 5px solid black'

// DOM HTML 
// innerHTML 
//inner text
//textContent

// DOM Events

//focus and blur 
// them su kien
// Cach 1 
    // const a = document.getElementsByClassName('button')
    // a.addEventListener("click",function(){
    //     console.log('hello world');
    //     document.getElementsByClassName('button').style.display='block'
    // })

// dang loi coi sua di
//Cach 2
    // function handleClick(){
    //     console.log('hello world');
    //     document.getElementsByClassName('button').style.display='block'
    // }


//xoa su kien 
    const a = document.getElementsByClassName('button')
    a.addEventListener("mouseout",function(){
        console.log('hello world');
        document.getElementsByClassName('button').style.display='block'
    })
//chi an khi them su kien bang cach addEventListener, chon cai hanh dong va phai them ca hanh dong copn k no k xoa
    a.removeEventListener('mouseout',function(){
        console.log('hello world');
        document.getElementsByClassName('button').style.display='block'
    })
//khi co 2 su kien chong len nhau 
//bo cau event.stopPropagation() vao thang con va them event vao cho tham so cua function 
//ngan chan su kien lan truyen ra cha ong cu co 
    a.removeEventListener('mouseout',function(event){
        console.log('hello world');
        document.getElementsByClassName('button').style.display='block'
        event.stopPropagation()
    })
//tim hieu them prevent default 