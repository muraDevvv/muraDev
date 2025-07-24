import {
  block7,
  block7Faq1,
  block7Faq2,
  block7Faq3,
  block7Faq4,
  block7Faq5,
  block7Faq6,
  block7Faq7,
  block7Faq8,
  block7FaqOtvet1,
  block7FaqOtvet2,
  block7FaqOtvet3,
  block7FaqOtvet4,
  block7FaqOtvet5,
  block7FaqOtvet6,
  block7FaqOtvet7,
  block7FaqOtvet8,
  block7FaqClose1,
  block7FaqClose2,
  block7FaqClose3,
  block7FaqClose4,
  block7FaqClose5,
  block7FaqClose6,
  block7FaqClose7,
  block7FaqClose8
} from "../../variables.js";

block7FaqOtvet1.classList.remove("block7__faq-otvet_closed");
block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

block7FaqClose1.classList.remove("block7__faq-vopros-button_opened");
block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
block7FaqClose8.classList.add("block7__faq-vopros-button_opened");

block7Faq1.addEventListener("click", function() {
  if (block7FaqOtvet1.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.remove("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.remove("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  } else if (!block7FaqOtvet1.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  }
});

block7Faq2.addEventListener("click", function() {
  if (block7FaqOtvet2.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.remove("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.remove("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  } else if (!block7FaqOtvet2.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  }
});

block7Faq3.addEventListener("click", function() {
  if (block7FaqOtvet3.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.remove("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.remove("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  } else if (!block7FaqOtvet3.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  }
});

block7Faq4.addEventListener("click", function() {
  if (block7FaqOtvet4.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.remove("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.remove("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  } else if (!block7FaqOtvet4.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  }
});

block7Faq5.addEventListener("click", function() {
  if (block7FaqOtvet5.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.remove("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.remove("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  } else if (!block7FaqOtvet5.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  }
});

block7Faq6.addEventListener("click", function() {
  if (block7FaqOtvet6.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.remove("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.remove("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  } else if (!block7FaqOtvet6.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  }
});

block7Faq7.addEventListener("click", function() {
  if (block7FaqOtvet7.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.remove("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.remove("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  } else if (!block7FaqOtvet7.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  }
});

block7Faq8.addEventListener("click", function() {
  if (block7FaqOtvet8.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.remove("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.remove("block7__faq-vopros-button_opened");
  } else if (!block7FaqOtvet8.classList.contains("block7__faq-otvet_closed")) {
    block7FaqOtvet1.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet2.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet3.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet4.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet5.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet6.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet7.classList.add("block7__faq-otvet_closed");
    block7FaqOtvet8.classList.add("block7__faq-otvet_closed");

    block7FaqClose1.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose2.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose3.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose4.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose5.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose6.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose7.classList.add("block7__faq-vopros-button_opened");
    block7FaqClose8.classList.add("block7__faq-vopros-button_opened");
  }
});