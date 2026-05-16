


let menuName=document.querySelectorAll('.menu-list')

menuName.forEach((e) => {
    e.addEventListener('click', ()=>{

   menuName.forEach((list)=>{
    list.classList.remove('active')

   })

   e.classList.add('active')


    let targetId=e.dataset.target;
    

    let section = document.getElementById(targetId);
    
    
    window.scrollTo({
   top: section.offsetTop - 100,
   behavior: "smooth"
});
        
      
    })
});
