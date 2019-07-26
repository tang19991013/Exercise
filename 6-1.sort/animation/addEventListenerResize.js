let addEventListennerResize = {}
addEventListennerResize.addEventListennerResize = function () {
    var divImg = document.querySelector('div>img');
    if (window.matchMedia('(max-width:430px)').matches) {
        divImg.setAttribute('width', '90%')
    } else {
        //当前设备宽度大于300px像素
        divImg.removeAttribute('width')
    }
}
window.addEventListener('resize', addEventListennerResize.addEventListennerResize, false);
