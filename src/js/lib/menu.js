export default () => {
    const buttonEl = document.getElementById('js-toggle-menu');
    const menuEl = document.getElementById('js-togglable-menu');

    buttonEl.addEventListener('click', () => {
        menuEl.classList.toggle('active');
    });

    const desktopModeBreakpoint = window.matchMedia('(min-width: 768px)');
    desktopModeBreakpoint.addEventListener('change', () => {
        if (desktopModeBreakpoint.matches) {
            menuEl.classList.remove('active');
        }
    });
}
