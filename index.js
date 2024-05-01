var elements  = document.querySelectorAll('.nft');
elements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        element.classList.add('hover-effect');
    });
    element.addEventListener('mouseleave', function(){
        element.classList.remove('hover-effect');
    });
});