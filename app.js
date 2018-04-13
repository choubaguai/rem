require('./index.scss');

//获取屏幕宽度（viewport）
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

//获取htmlDom
let htmlDom = document.getElementsByTagName('html')[0];


//设置html的fontsize
htmlDom.style.fontSize = htmlWidth / 10 + 'px';


window.addEventListener('resize', (e)=>{
    htmlDom.style.fontSize = htmlWidth / 10 + 'px'; 
})