import "./scss/index.scss";
// import * as wasm from "wasm-test";

const button = document.getElementById("btn");

async function test() {
  const { Item } = await import(/* webpackChunkName: "item" */ "./models/item");
  const item = new Item(10);
  console.log(item);
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("dckaspodkop");
  test();
});

// button.addEventListener("click", () => {
//    wasm.greet();
// });
