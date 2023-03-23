const products = document.querySelectorAll(".product");
const previewImg = document.querySelector(".preview .main img");
const preveiwContainer = document.querySelector('.products-preview');
const previewBox = preveiwContainer.querySelectorAll('.preview');
const smallpreviewImg = document.querySelector(".preview .small-img img");

products.forEach(product => {
    product.addEventListener("click", function() {
        let productImg = this.querySelector("img");
        
        previewImg.src = productImg.src;
        smallpreviewImg.src = productImg.src;
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
          let target = preview.getAttribute('data-target');
          if(name == target){
            preview.classList.add('active');
          }
        });
    });
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
};
});