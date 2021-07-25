const titleh1s = document.querySelector(".nshelp_title");

const searchInput = document.getElementById("searchfld");

if (titleh1s) {
    document.title = titleh1s.innerText + ' - Netsuite Help Center';
}
else if(window.location.search.includes('search')) {
    document.title = makeSearchTitle(searchInput);
}

searchInput.addEventListener("keypress", function (e) {
    if (e.key == "Enter")
        document.title = makeSearchTitle(this)
});
searchInput.addEventListener("click", function(e){
    let offsetx = e.offsetX || (e.pageX - e.target.offsetLeft);
    let searchInputWidth = this.offsetWidth;
    // 32 = SEARCH_ICON_WIDTH
    if(offsetx + 32 > searchInputWidth)
    {
        document.title = makeSearchTitle(this);
    }
});

const head = document.getElementsByTagName('head')[0];
let mylinktag = document.createElement('link');
mylinktag.rel = 'icon';
mylinktag.href = chrome.runtime.getURL('/images/myfavicon.png');
mylinktag.type = 'image/png';
head.appendChild(mylinktag);

function makeSearchTitle (inputObj) {
    return 'Searched: ' + String(inputObj.value).trim() + ' - Nesuite Help Center';
}
