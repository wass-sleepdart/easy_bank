const navSlide=()=>{
    const burger=document.querySelector('.hamburger')
    const navLinks=document.querySelector('.nav-links');
    const links=document.querySelectorAll('.links')
    burger.addEventListener('click', ()=>{
        navLinks.classList.toggle('burger-clicked');
    })
    links.forEach((link,index)=>{
        link.style.animation=`navLinksFade 0.5s ease forwards ${index/5 +2}s`
    })

}
navSlide();
