var url = window.location.href;
document.querySelectorAll('nav a').forEach(function (element){
    if (element.href===url){
        element.classList.add('active');
    }
});