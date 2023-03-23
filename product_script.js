const links = document.querySelectorAll('.small-img .col-3');


for (let link of links) {
  link.addEventListener('click', function() {
    // Remove the active class from all links
    for (let lnk of links) {
      lnk.classList.remove('border-active');
    }

    // Add the active class to the clicked link
    link.classList.add('border-active');
  });
}