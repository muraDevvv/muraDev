import {
  tab1Button,
  tab2Button,
  tab3Button,
  tab4Button,
  tab1Block,
  tab2Block,
  tab3Block,
  tab4Block
} from "../../variables.js";

tab1Button.classList.add("block4__tab-button_active");
tab2Button.classList.remove("block4__tab-button_active");
tab3Button.classList.remove("block4__tab-button_active");
tab4Button.classList.remove("block4__tab-button_active");

tab1Block.classList.remove("block4__tab_disabled");
tab2Block.classList.add("block4__tab_disabled");
tab3Block.classList.add("block4__tab_disabled");
tab4Block.classList.add("block4__tab_disabled");

tab1Button.addEventListener("click", function() {
  tab1Button.classList.add("block4__tab-button_active");
  tab2Button.classList.remove("block4__tab-button_active");
  tab3Button.classList.remove("block4__tab-button_active");
  tab4Button.classList.remove("block4__tab-button_active");

  tab1Block.classList.remove("block4__tab_disabled");
  tab2Block.classList.add("block4__tab_disabled");
  tab3Block.classList.add("block4__tab_disabled");
  tab4Block.classList.add("block4__tab_disabled");
});

tab2Button.addEventListener("click", function() {
  tab1Button.classList.remove("block4__tab-button_active");
  tab2Button.classList.add("block4__tab-button_active");
  tab3Button.classList.remove("block4__tab-button_active");
  tab4Button.classList.remove("block4__tab-button_active");

  tab1Block.classList.add("block4__tab_disabled");
  tab2Block.classList.remove("block4__tab_disabled");
  tab3Block.classList.add("block4__tab_disabled");
  tab4Block.classList.add("block4__tab_disabled");
});

tab3Button.addEventListener("click", function() {
  tab1Button.classList.remove("block4__tab-button_active");
  tab2Button.classList.remove("block4__tab-button_active");
  tab3Button.classList.add("block4__tab-button_active");
  tab4Button.classList.remove("block4__tab-button_active");

  tab1Block.classList.add("block4__tab_disabled");
  tab2Block.classList.add("block4__tab_disabled");
  tab3Block.classList.remove("block4__tab_disabled");
  tab4Block.classList.add("block4__tab_disabled");
});

tab4Button.addEventListener("click", function() {
  tab1Button.classList.remove("block4__tab-button_active");
  tab2Button.classList.remove("block4__tab-button_active");
  tab3Button.classList.remove("block4__tab-button_active");
  tab4Button.classList.add("block4__tab-button_active");

  tab1Block.classList.add("block4__tab_disabled");
  tab2Block.classList.add("block4__tab_disabled");
  tab3Block.classList.add("block4__tab_disabled");
  tab4Block.classList.remove("block4__tab_disabled");
});