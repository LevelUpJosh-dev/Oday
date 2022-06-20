function Sherlock() {
  return {
    "Get": (selector, returnAll) => {
      returnAll = returnAll || false;
      if (returnAll) {
        return document.querySelectorAll(selector);
      } else {
        return document.querySelector(selector);
      }
    },
    "Patch": (selector, property, value) => {
      const elements = Sherlock.Get(selector);
      for (let index = 0; index < elements.length; index++) {
        elements[index][property] = value;
      }
    },
    "Remove": (selector) => {
      const elements = Sherlock.Get(selector);
      for (let index = 0; index < elements.length; index++) {
        elements[index].remove();
      }
    },
    "Listen": (selector, property, callback) => {
      const elements = Sherlock.Get(selector);
      for (let index = 0; index < elements.length; index++) {
        elements[index].addEventListener(property, callback);
      }

      return elements;
    },
    "Watch": (selector, property) => {
      const elements = Sherlock.Get(selector);
      for (let index = 0; index < elements.length; index++) {
        new MutationObserver(function (mutations) {
          const mutationEvent = new Event(`suspicious-activity-${property}`);
          this.dispatchEvent(mutationEvent, mutations);
        });
      }

      return elements;
    },
  };
}

window.Sherlock = Sherlock();
