let button = document.querySelector("#button");
let title = document.querySelector("#title-input");
let note = document.querySelector("#note-input");

title.addEventListener("change", stateHandle);
note.addEventListener("change", stateHandle);

function stateHandle() {
    if (title.value.length > 0 && note.value.length > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}