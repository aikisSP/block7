export const showMore = (element, showButton, hideButton, hiddenClass) => {
    showButton.addEventListener("click", () => {
      element.classList.remove(hiddenClass);
      showButton.classList.add(hiddenClass);
      hideButton.classList.remove(hiddenClass);
    });
  }
  
  
  export const hide = (element, showButton, hideButton, hiddenClass) => {
    hideButton.addEventListener("click", () => {
      element.classList.add(hiddenClass);
      showButton.classList.remove(hiddenClass);
      hideButton.classList.add(hiddenClass);
    });
  }
