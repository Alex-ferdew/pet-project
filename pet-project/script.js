const cookieEl = document.querySelector('.cookie-block');
const okEl = document.querySelector('.ok');
console.log('Work here ')
okEl.addEventListener('click', () => {
    cookieEl.style.display = 'none';
});
console.log(window.Cookies)
let cookies = () => {
    if (!Cookies.get('hide-cookie')) {
        setTimeout(() => {
            cookieEl.style.display = 'flex';
        }, 1000);
    }

    Cookies.set('hide-cookie', 'true', {
        expires: 30
    });
}


cookies();