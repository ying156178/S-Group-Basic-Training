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