export function openSidebar(sidebar, openButton, sidebarOpenClass, overlay, hiddenClass) {
    openButton.addEventListener('click', () => {
        sidebar.classList.add(sidebarOpenClass);
        overlay.classList.remove(hiddenClass);
    });
}

export function closeSidebar(sidebar, closeButton, sidebarOpenClass, overlay, hiddenClass) {
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove(sidebarOpenClass);
        overlay.classList.add(hiddenClass);
    });
}
