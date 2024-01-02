import { concatination } from "./concatenation";
const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatination(input.value, "hello!");
  });
}
