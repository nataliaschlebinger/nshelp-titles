let titleh1s = document.body.querySelectorAll(".nshelp_title");

if(titleh1s) {
    document.getElementsByTagName('title')[0].innerText = titleh1s[0].innerText + ' - Netsuite Help Center';
}