const MainColor = {
    DayBgColor: '#fff', // 日间背景色
    DayMainColor: '#66a9c9',  // 日间主色调
    NightBgColor: '#000', // 夜间背景色
    NightMainColor: '#fecc11'  // 夜间主色调
};

function showTitileImage() {
    document.getElementById('PageTitle').style.display = 'none';
    document.getElementById('PageTitleSvg').style.display = 'block';
}

function showTitileLink() {
    document.getElementById('PageTitle').style.display = 'block';
    document.getElementById('PageTitleSvg').style.display = 'none';
}

let isDay = true;
function initialize() {
    const body = document.querySelector('body');
    const svgImages = document.getElementsByClassName('navsvg');

    isDay = true;
    body.style.backgroundColor = MainColor.DayBgColor;
    body.style.color = MainColor.NightBgColor;
    document.getElementById('PageTitle').style.display = 'block';
    document.getElementById('PageTitleSvg').style.display = 'none';
    // 遍历 HTMLCollection 来设置每个元素的样式和属性
    for (let i = 0; i < svgImages.length; i++) {
        svgImages[i].style.backgroundColor = MainColor.DayMainColor;
    }

    // 导航栏中心内容
    const NavtITLE = document.getElementById('mediumText');
    var titleElement = document.getElementById('post-title');
    var title = null;
    if ( titleElement != null ){
        title = titleElement.textContent;
    }
    NavtITLE.innerText = title;
}

window.onload = initialize;

// 日转夜效果
function toggleDayToNight() {
    const body = document.querySelector('body');
    const svgImage = document.getElementById('DayToNightSVG');
    const svgImages = document.getElementsByClassName('navsvg'); 
    const links = document.getElementsByTagName('a');
    const moon = document.getElementById('moon');
    let moonBeforeColor = getComputedStyle(document.querySelector('#moon'), ':before').getPropertyValue('background-color');

    if (isDay) {
        // 切换为夜间主题
        body.style.backgroundColor = MainColor.NightBgColor;
        body.style.color = MainColor.DayBgColor;
        svgImage.src = '/img/Night.svg';
        isDay = false;
        // 右上角svg图标背景
        for (let i = 0; i < svgImages.length; i++) {
            svgImages[i].style.backgroundColor = MainColor.NightMainColor;
        }
        // 主页文章杠标题
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = MainColor.DayBgColor;
        }
        // 介绍卡样式替换
        // moonBeforeColor = '#fcc515';
        // document.styleSheets[0].insertRule(
        //     `@keyframes cresent {
        //         0% { transform: translate(-30px, 30px), scale(0.9);box-shadow: none;}
        //         50% { transform: translate(0px, 0px), scale(1.02);box-shadow: 0 0 10px #fcc515, 0 0 80px 8px #fcc515, background-color: #e9d186;}
        //         100% {transform: translate(30px, -30px), scale(0.9);box-shadow: none;}}`,
        // );
        // document.getElementById("moon").style.animation = "3.2s cresent linear" 
    } else {
        // 切换为日间主题
        body.style.backgroundColor = MainColor.DayBgColor;
        body.style.color = MainColor.NightBgColor;
        svgImage.src = '/img/Day.svg';
        isDay = true;
        for (let i = 0; i < svgImages.length; i++) {
            svgImages[i].style.backgroundColor = MainColor.DayMainColor;
        }
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = MainColor.NightBgColor;
        }

        // 介绍卡样式替换
        // moonBeforeColor = '#C7938B'
        // document.styleSheets[0].insertRule(
        //     `@keyframes cresent {
        //         0% { transform: translate(-30px, 30px), scale(0.9);box-shadow: none;}
        //         50% { transform: translate(0px, 0px), scale(1.02);box-shadow: 0 0 10px #C7938B, 0 0 80px 8px #C7938B, background-color: #efdbd8;}
        //         100% {transform: translate(30px, -30px), scale(0.9);box-shadow: none;}}`,
        // );
        // document.getElementById("moon").style.animation = "3.2s cresent linear" 
    }
}