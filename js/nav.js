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

function loadLocationMap(lon,lat) {
    var map = L.map('locationMap', {
        attributionControl: false,
        zoomControl: false // 隐藏 Zoom 控件
    }).setView([lat, lon], 8);

    // OSM加载
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
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

    // 请求用户地理位置信息
    navigator.geolocation.getCurrentPosition(function(position) {
        var lon = position.coords.longitude;
        var lat = position.coords.latitude;
        loadLocationMap(lon, lat);
    });

    // 社交图标样式
    const socialImgs = document.getElementsByClassName('social-img');
    const socialImgsArray = Array.from(socialImgs);
    socialImgsArray.forEach(socialImg => {
        socialImg.addEventListener('mouseover', function() {
            if (isDay) {
                socialImg.style.backgroundColor = MainColor.DayMainColor;
            } else {
                socialImg.style.backgroundColor = MainColor.NightMainColor;
            }
        });

        socialImg.addEventListener('mouseout', function() {
            if (isDay) {
                socialImg.style.backgroundColor = MainColor.DayBgColor;
            } else {
                socialImg.style.backgroundColor = MainColor.DayBgColor;
            }
        });
    });

    // 主页文章样式
    const articlesDiv = document.getElementsByClassName('article-div');
    const articleDivArray = Array.from(articlesDiv);
    articleDivArray.forEach(articleDiv => {
        const articleTitle = articleDiv.querySelector('.article-title');

        articleDiv.addEventListener('mouseover', function() {
            if (isDay) {
                articleDiv.style.borderColor = MainColor.DayMainColor;
                articleDiv.style.color = MainColor.DayMainColor;
                articleTitle.style.color = MainColor.DayMainColor;
            } 
        });

        articleDiv.addEventListener('mouseout', function() {
            if (isDay) {
                articleDiv.style.borderColor = MainColor.DayBgColor;
                articleDiv.style.color = MainColor.NightBgColor;
                articleTitle.style.color = MainColor.NightBgColor;
            } 
        });
    });
}

window.onload = initialize;

// 日转夜效果
function toggleDayToNight() {
    const body = document.querySelector('body');
    const svgImage = document.getElementById('DayToNightSVG');
    const svgImages = document.getElementsByClassName('navsvg'); 
    const links = document.getElementsByTagName('a');

    // 社交图标样式
    const socialImgs = document.getElementsByClassName('social-img');
    const socialImgsArray = Array.from(socialImgs);
    socialImgsArray.forEach(socialImg => {
        socialImg.addEventListener('mouseover', function() {
            if (isDay) {
                socialImg.style.backgroundColor = MainColor.DayMainColor;
            } else {
                socialImg.style.backgroundColor = MainColor.NightMainColor;
            }
        });

        socialImg.addEventListener('mouseout', function() {
            if (isDay) {
                socialImg.style.backgroundColor = MainColor.DayBgColor;
            } else {
                socialImg.style.backgroundColor = MainColor.DayBgColor;
            }
        });
    });

        // 主页文章样式
        const articlesDiv = document.getElementsByClassName('article-div');
        const articleDivArray = Array.from(articlesDiv);
        articleDivArray.forEach(articleDiv => {
            const articleTitle = articleDiv.querySelector('.article-title');
    
            articleDiv.addEventListener('mouseover', function() {
                if (isDay) {
                    articleDiv.style.borderColor = MainColor.DayMainColor;
                    articleDiv.style.color = MainColor.DayMainColor;
                    articleTitle.style.color = MainColor.DayMainColor;
                } 
                else {
                    articleDiv.style.borderColor = MainColor.NightMainColor;
                    articleDiv.style.color = MainColor.DayMainColor;
                    articleTitle.style.color = MainColor.DayMainColor;
                }
            });
    
            articleDiv.addEventListener('mouseout', function() {
                if (isDay) {
                    articleDiv.style.borderColor = MainColor.DayBgColor;
                    articleDiv.style.color = MainColor.NightBgColor;
                    articleTitle.style.color = MainColor.NightBgColor;
                } 
                else {
                    articleDiv.style.borderColor = MainColor.NightBgColor;
                    articleDiv.style.color = MainColor.DayBgColor;
                    articleTitle.style.color = MainColor.DayBgColor;
                }
            });
        });

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
    }
}