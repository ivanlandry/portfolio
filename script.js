var url = window.location.href;
document.querySelectorAll('nav a').forEach(function (element,index) {
    if(index>0)
        element.classList.remove('active');
});

function removeActive(el) {
    document.querySelectorAll('nav a').forEach(function (element,index) {
        if(element.classList.contains('active'))
            element.classList.remove('active');
    });
    el.classList.add('active');
};

