const titleh1s = document.body.querySelectorAll(".nshelp_title")[0];

let pgtitle = document.getElementsByTagName('title')[0];

if(titleh1s && pgtitle) {
    pgtitle.innerText = titleh1s.innerText + ' - Netsuite Help Center';
}

const head = document.getElementsByTagName('head')[0];

let mylinktag = document.createElement('link');
mylinktag.rel = 'icon';
mylinktag.href = chrome.runtime.getURL('/images/myfavicon.png');
mylinktag.type = 'image/png';

head.appendChild(mylinktag);