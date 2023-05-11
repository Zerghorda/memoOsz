import Kartya from "./kartya.js";
class Jatekter {
  #kepekLista = [];
  #kivalasztotKepekLista = [];
  constructor(KEPEKLISTA) {
    this.#kepekLista = KEPEKLISTA; 
    const ARTICLE = $("article");
    for (let i = 0; i < this.#kepekLista.length; i++) {
      const kartya = new Kartya(ARTICLE, this.#kepekLista[i],i)
    }
}
}
export default Jatekter


/*  //function nemTalalt(KEPEKLISTA) {
    if ($(event.target).attr("scr", KEPEKLISTA[aktivElemID])!=$(event.target).attr("scr", KEPEKLISTA[aktivElemID]);) {
      KEPEKLISTA[aktivElemID].css(img:animation: shake 0.5s,animation-iteration-count:2,
    @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  };)
    } else {
      txt = "talált";
    }
  } */
//random lista
