const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


// show sidebar
menuBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'block';
}) 

// show sidebar
closeBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'none';
})  

// change theme
themeToggler.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    
}) 


const links = document.querySelectorAll('.sidebar a');


for (let link of links) {
  link.addEventListener('click', function() {
    // Remove the active class from all links
    for (let lnk of links) {
      lnk.classList.remove('active');
    }

    // Add the active class to the clicked link
    link.classList.add('active');
  });
}

  
