
import '../scss/style.scss';

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});

import { openSidebar, closeSidebar } from './sidebar.js';
import { showMore, hide} from './show-more.js';



const hiddenClass = "hidden";

const sidebarLayer = document.querySelector(".sidebar-left-layer");
const menuSidebar = document.querySelector(".sidebar-menu");
const openButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".sidebar-menu__close-button");

const sidebarLeftOpenClass = "sidebar-left_open";

openSidebar(menuSidebar, openButton, sidebarLeftOpenClass, sidebarLayer, hiddenClass);
closeSidebar(menuSidebar, closeButton, sidebarLeftOpenClass, sidebarLayer, hiddenClass);

const sidebarRightLayer = document.querySelector(".sidebar-right-layer");
const feedbackSidebar = document.querySelector(".sidebar-feedback");
const openFeedbackButtons = [document.querySelector(".header__repair-button"), document.querySelector(".title-block__repair-button")];
const closeFeedbackButton = document.querySelector(".sidebar-feedback__close-button");

const sidebarRightOpenClass = "sidebar-right_open";

openSidebar(feedbackSidebar, openFeedbackButtons[0], sidebarRightOpenClass, sidebarRightLayer, hiddenClass);
openSidebar(feedbackSidebar, openFeedbackButtons[1], sidebarRightOpenClass, sidebarRightLayer, hiddenClass);
closeSidebar(feedbackSidebar, closeFeedbackButton, sidebarRightOpenClass, sidebarRightLayer, hiddenClass);

const requestSidebar = document.querySelector(".sidebar-request");
const openRequestButtons = [document.querySelector(".header__search-button"), document.querySelector(".title-block__search-button")];
const closeRequestButton = document.querySelector(".sidebar-request__close-button");

openSidebar(requestSidebar, openRequestButtons[0], sidebarRightOpenClass, sidebarRightLayer, hiddenClass);
openSidebar(requestSidebar, openRequestButtons[1], sidebarRightOpenClass, sidebarRightLayer, hiddenClass);
closeSidebar(requestSidebar, closeRequestButton, sidebarRightOpenClass, sidebarRightLayer, hiddenClass);

const mainText = document.querySelectorAll(".text-section__paragraph");
const showMoreButton = document.querySelector(".text-section__read-more-button");
const hideButton = document.querySelector(".text-section__hide-button");

showMore(mainText[1], showMoreButton, hideButton, hiddenClass);
hide(mainText[1], showMoreButton, hideButton, hiddenClass);




document.addEventListener('DOMContentLoaded', () => {
    const brandsList = document.querySelector('.brands__list');
    const repairList = document.querySelector('.repair__list');
    const brandsShowMoreButton = document.querySelector('.brands__read-more-button');
    const brandsHideButton = document.querySelector('.brands__hide-button');
    const repairShowMoreButton = document.querySelector('.repair__read-more-button');
    const repairHideButton = document.querySelector('.repair__hide-button');

    if (brandsList && showMoreButton && hideButton) {
        brandsShowMoreButton.addEventListener('click', () => {
            brandsList.style.height = '323px';
            brandsShowMoreButton.classList.add('hidden');
            brandsHideButton.classList.remove('hidden');
        });

        brandsHideButton.addEventListener('click', () => {
            brandsList.style.height = '168px';
            brandsHideButton.classList.add('hidden');
            brandsShowMoreButton.classList.remove('hidden');
        });
    }

    if (repairList && showMoreButton && hideButton) {
        repairShowMoreButton.addEventListener('click', () => {
            repairList.style.height = '323px';
            repairShowMoreButton.classList.add('hidden');
            repairHideButton.classList.remove('hidden');
        });

        repairHideButton.addEventListener('click', () => {
            repairList.style.height = '168px';
            repairHideButton.classList.add('hidden');
            repairShowMoreButton.classList.remove('hidden');
        });
    }
});
