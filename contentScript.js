let titleh1s = document.body.querySelectorAll(".nshelp_title")[0];

let pgtitle = document.getElementsByTagName('title')[0];

if(titleh1s && pgtitle) {
    pgtitle.innerText = titleh1s.innerText + ' - Netsuite Help Center';
}