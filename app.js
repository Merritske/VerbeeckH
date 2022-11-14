let logo = document.getElementById('logo')
let nav = document.querySelector('.nav')

logo.addEventListener('click', ()=>{
    console.log('yep')
    if( nav.style.display == 'block'){
        nav.style.display = "none"
    }else{
        nav.style.display = 'block'
    }

})
nav.addEventListener('click', ()=>{
    nav.style.display = "none"
})

