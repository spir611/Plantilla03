"use strict"

function setLocalStorage(name, value) {
    localStorage.setItem(name,(value || ""));
    console.log(`localStorage: ${name}=${(value || "")}`);
}