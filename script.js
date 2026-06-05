function addNote() {
    const input = document.getElementById("noteInput");
    const text = input.value.trim();

    if (text === "") return;

    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        ${text}
        <span class="delete" onclick="this.parentElement.remove()">X</span>
    `;

    document.getElementById("notesContainer").appendChild(note);

    input.value = "";
}
