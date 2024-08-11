const product=document.getElementById('product');
const icon=document.getElementById('icon');
const profilCaret=document.querySelector('.profil');

let height = window.innerHeight;
if (height<860){
    profil.classList.add('show');
}
product.addEventListener('click',() =>{
    const collapse=document.getElementById('collapse').classList.contains('collapsed');
    
    if (collapse) {
        icon.classList.add('fa-angle-down')
        icon.classList.remove('fa-angle-up')
    }else{
        icon.classList.add('fa-angle-up')
        icon.classList.remove('fa-angle-down')
    }
})

