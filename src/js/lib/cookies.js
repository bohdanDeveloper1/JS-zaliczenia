import Cookies from 'js-cookie';

const cookieExpirationDays = 365 * 5;
const cookieName = 'cookiesConfirmed';
const sectionEl = document.getElementById('cookies');

export default () => {
    if (Cookies.get(cookieName)) {
        sectionEl?.remove();
    }

    const buttonEl = document.querySelector('#cookies button');
    if (buttonEl) {
        buttonEl.addEventListener('click', () => {
            Cookies.set(cookieName, 'confirmed', { expires: cookieExpirationDays });
            sectionEl?.remove();
        });
    }
}
