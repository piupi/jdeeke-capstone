
import { Header, Main } from "./components";
import * as state from "./store";


function render(st = state.User) {
    document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Main(st)}
    `;
    addNavEventListeners();
}

render();

// state.User


function addNavEventListeners() {
    document.getElementById("contact").addEventListener("click", event =>
    {event.preventDefault();
    render(state[event.target.textContent])});
    document.querySelector(".user-name").addEventListener("click", event =>
    {event.preventDefault();
    render(state.User)});
};