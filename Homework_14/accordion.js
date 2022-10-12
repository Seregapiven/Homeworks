class Accordion {
    #el = null;
    #title=null;
    #body=null;
      
    constructor(el) {
      this.#el = el;
      this.#title = document.querySelectorAll('.accordion-title');
      this.#body = document.querySelectorAll('.accordion-body');
      this.#bindEventListeners();
    }
    
    #bindEventListeners() {
      this.#el.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordion-title')) {
        const index = this.#findTitleIndex(e.target);
  
        this.#body[index].classList.toggle("active");
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
          this.#body[i].classList.remove('active')
        }
      }
    }
  }
              
  
      