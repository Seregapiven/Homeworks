const ACTIVE_CLASS = 'active';

class Accordion {
  
    #el = null;
    #title=null;
    #body=null;
      
    constructor(el) {
      this.#el = el;
      this.#getEl();
      this.#bindEventListeners();
    }

    #getEl() {
      this.#title = this.#el.querySelectorAll('.accordion-title');
      this.#body = this.#el.querySelectorAll('.accordion-body');
    }
    
    #bindEventListeners() {
      this.#el.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordion-title')) {
        const index = this.#findTitleIndex(e.target);
  
        this.#body[index].classList.toggle(ACTIVE_CLASS);
        this.#hide(index);
        }
      });
    }
  
    #findTitleIndex(val) {
      for (let i = 0; i < this.#title.length; i++) {
      if (this.#title[i] === val) {
      return i;
      }
      }
      return null;
    }
          
    #hide(index) {
      for (let i = 0; i < this.#body.length; i++) {
        if (this.#body[i] !== this.#body[index]) {
          this.#body[i].classList.remove(ACTIVE_CLASS);
        }
      }
    }
  }
              
  
      