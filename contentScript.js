const titleh1s = document.querySelector(".nshelp_title");

const searchInput = document.getElementById("searchfld");

if (titleh1s) {
    document.title = titleh1s.innerText + ' - Netsuite Help Center';
}
else if(window.location.search.includes('search')) {
    document.title = 'Searched: ' + String(searchInput.value).trim() + ' - Nesuite Help Center';
}

searchInput.addEventListener("keypress", function (e) {
    if (e.key == "Enter")
        document.title = 'Searched: ' + String(this.value).trim() + ' - Nesuite Help Center';
});
searchInput.addEventListener("click", function(e){
    let offsetx = e.offsetX || (e.pageX - e.target.offsetLeft);
    let searchInputWidth = this.offsetWidth;
    // 32 = SEARCH_ICON_WIDTH
    if(offsetx + 32 > searchInputWidth)
    {
        document.title = 'Searched: ' + String(this.value).trim() + ' - Nesuite Help Center';
    }
});

const head = document.getElementsByTagName('head')[0];
let mylinktag = document.createElement('link');
mylinktag.rel = 'icon';
mylinktag.href = chrome.runtime.getURL('/images/myfavicon.png');
mylinktag.type = 'image/png';
head.appendChild(mylinktag);
