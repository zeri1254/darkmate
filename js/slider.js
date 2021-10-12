import { Toast } from 'bootstrap.esm.min.js'
$('.carousel').carousel({
    interval: 1000,
    pause: 'hover',
    wrap: true
});
Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))