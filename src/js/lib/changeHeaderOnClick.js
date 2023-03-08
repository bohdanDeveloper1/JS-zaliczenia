export default () => {
    const buttonEl = document.querySelector('#js-button-test button');
    if (buttonEl) {
        const headerEl = document.getElementById('js-header');
        if (headerEl) {
            buttonEl.addEventListener('click', () => {
                headerEl.innerText = `Hello @ ${(new Date()).toLocaleString()}`;
            });
        }
    }
};
