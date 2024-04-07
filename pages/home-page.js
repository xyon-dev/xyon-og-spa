import { state } from "../state.js";

export let homepage = `
    <h1>hello ${state["username"]}</h1>
    <div>${state["id"]}</div>
    <div>${state["permission"]}</div>
    `;