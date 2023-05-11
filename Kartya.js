class Kartya {
    #adat;
    #imgElem;
    #divElem;
  constructor(szuloElem, KEPEKLISTA, id) {
    this.id = id;
    szuloElem.append(`<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
        <img src="front.jpg" alt="">
    </div>
    <div class="flip-box-back">
    <img src="${KEPEKLISTA}" alt=""></div>
    </div>
  </div>
</div>`
);
  }
  getAdat() {
    return this.#adat;
  }
  trigger() {
    const ev = new CustomElementEvent("trigger",{detail: this.#adat})
  }
}

export default Kartya;
