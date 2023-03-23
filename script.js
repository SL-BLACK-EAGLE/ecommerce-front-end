const triggers = document.querySelectorAll('.navbar-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', e => {
    const target = e.target.getAttribute('data-target');
    document.querySelector(target).classList.toggle('visible');
  });
});


const myCarouselElement = document.querySelector('#y')
function m() {

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 3000,
    wrap: true,
    ride: true,
    circle: true,
    Touch: true,

  })


}

$(".size").on('click', function(){
  $(this).toggleClass('focus').siblings().removeClass('focus');
})


