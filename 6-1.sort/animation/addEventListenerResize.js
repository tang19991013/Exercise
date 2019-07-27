let addEventListennerResize = {}
addEventListennerResize.addEventListennerResize = function () {
    var divImg = document.querySelectorAll('div>img');
    if (window.matchMedia('(max-width:430px)').matches) {
        for (let i = 0; i < divImg.length; i++)
            divImg[i].setAttribute('width', '90%');
    } else {
        //当前设备宽度大于300px像素
        for (let i = 0; i < divImg.length; i++)
            divImg[i].setAttribute('width', '');
    }
}
window.addEventListener('resize', addEventListennerResize.addEventListennerResize, false);
