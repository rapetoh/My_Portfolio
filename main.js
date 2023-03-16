var navlinks = document.querySelectorAll('.navbar a');

navlinks.forEach(function(link){
    link.addEventListener('click',function(event){
        navlinks.forEach(function(link){
            link.classList.remove('active');
        });
        link.classList.add('active');
        var href = link.getAttribute('href');
        setTimeout(function(){
            window.location.href = href;
        }, 1000);

    });
});