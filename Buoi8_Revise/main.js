    // //getElementById
    // const a= document.getElementById('hello');
    // console.log(a);
    // //getElementsByClassName
    // const b=document.getElementsByClassName('item-spec');
    // console.log(b);
    // //querySelector
    // const c=document.querySelector('#hello');
    // console.log(c);
    // //querySelectorAll
    // const d=document.querySelectorAll('#hello');
    // console.log(d);
    // //getElementsbyTagName
    // const e=document.getElementsByTagName('li')
    // console.log(e);



//thay doi text cua phan tu
//innerHTMl, outerHTMl
// var f=document.getElementById('hello');
// f.innerHTML='<p>huhuuhuuh</p>'  //them the p vao ben trong the co id la hello
// f.outerHTML='<p>helllllll</p>'   //thay doi the dang co id la hello thanh the p co noi dung trong p


//innerText, textContent deu dung de thay doi phan text ben trong the 
//innertext 
// var g=document.getElementById('hello');
// g.innerText='<p>khum</p>'    

//textContent
    // var t1=document.getElementsByClassName('test');
    // var t2=document.getElementsByClassName('test');
    // // t1[0].textContent="<p>heofwrheo</p>"
    // console.log('textContent ',t1[0].textContent);   //cho phep lay noi dung k bi anh huong css van ban an
    // // t2[0].innertext="<p>heofwrheo</p>"
    // console.log('innerText ',t2[0].innertext); //k lay duoc noi dung neu do la van ban an (vd display none, visiablility hidden, opacity 0)


//them phan tu
//them phan tu vao cuoi danh sach
//appendChild

    // //b1: Tao element
    // var e1= document.createElement('button')
    // //b2 thiet lap noi dung
    // e1.textContent='Click me'
    // //b3 lay phan tu cha muon them vao
    // const in_but=document.getElementById('elee')
    // //b4 them vao cuoi
    // elee.appendChild(e1)

//them phan tu vao dau danh sach

    //b1: Tao element
    // var e1= document.createElement('button')
    // //b2 thiet lap noi dung
    // e1.textContent='Click me'
    // //b3 lay phan tu cha muon them vao
    // const in_but=document.getElementById('elee')
    // //b4 lay phan tu con dau tien cua phan tu cha
    // const in_but1child=in_but.firstChild
    // //b5 them phan tu moi vao truoc phan tu con thu nhat cua phan tu cha
    // in_but.insertBefore(e1,in_but1child)


//mot so phuong phap khac
//insertAdjacentElement
    // var newele=document.createElement('button');
    // newele.textContent='Dont touch me'
    // var parent=document.getElementById('elee')
    // parent.insertAdjacentElement('afterbegin',newele)  //them vao sau the mo
    // parent.insertAdjacentElement('afterend',newele)  //them vao sau the dong
    // parent.insertAdjacentElement('beforeend',newele) //truoc the dong
    // parent.insertAdjacentElement('beforebegin',newele) //truoc the mo


//xoa phan tu 
    // let re_child=document.getElementById('list');
    // //removeChild dung remove con cua ban than
    // re_child.removeChild(e[2])   //trong nay la e k quan tam ten phia ngoai no la gi, syntax no the
    // //phuong thuc remove tu remove ban than
    // re_child.remove()

//ATTRIBUTES
//lay ra attribute
    // var atri= document.getElementById('link')
    // console.log(atri);
    // console.log(atri.href);
    // atri.title='link face ying' //phai la attribute co ho tro moi duoc them
    // atri.setAttribute('moe','hu') //k can phai la attribute duoc ho tro, sao cung duoc them ca
    // console.log(atri.moe);  

//xoa attribute
    // var atri= document.getElementById('link')
    // atri.removeAttribute('title')   //xoa thuoc tinh

//classList   
    // atri.classList.add('imlink')   //them thuoc tinh class cho the 
    // atri.classList.remove('link')  //xoa text trong attribute class cua the, neu co thi xoa, k thi thoi

//lay gia tri cua thuoc tinh
    // var atri= document.getElementById('link')
    // console.log(atri.className);  //muon log class thi xai className
    // console.log(atri.id);

//them gia tri cho thuoc tinh
    // var atri= document.getElementById('link') 
    // atri.className += 'huhu'

// JS STYLES: js k ho tro dau gach ngang




//DOM EVENTS


//Event Listeners
    var event=document.getElementById('imbut');
    event.addEventListener('click', function(event){
        alert('Button clicked!!!')
        console.log(event.type);
        console.log(event.target);
    })


//Event Type
//click kich chuot len phan tu
//dblclick: nhan dup chuot
//change xay ra khi co su thay doi cua gia tri dau vao vd: select, input text hoac input checkbox
//submit khi mot bieu mau <form></form> duoc gui di 
//keydown nhan phim
//keypress nhan giu phim
//keyup nha phim
//mouseover di chuyen chuot vao 1 phan tu
//mouseout di chuyen chuot ra khoi 1 phan tu
//load khi trang web hay 1 phan tu dang load
//scroll noi dung trang duoc cuon

    // var inn=document.getElementById('input');
    // inn.addEventListener('keyup', function(event){
    //     input.style.border='5px solid black'
    //     console.log('key pressed: ',event.key);
    // })


//Event Propagation

    var propa=document.getElementById('parent');
    propa.addEventListener('click',function(event){
        propa.style.border='5px groove pink'
        event.stopPropagation();
    })