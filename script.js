const contentEl = document.getElementById("content");
const choicesEl = document.getElementById("choices");

function renderPassage(id) {
  const passage = story.passages[id];
  contentEl.innerHTML = `
    <h2>${passage.title}</h2>
    <p>${passage.text.replace(/\n/g, "<br>")}</p>
  `;
  choicesEl.innerHTML = "";
  passage.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => renderPassage(choice.next);
    choicesEl.appendChild(btn);
  });
}

renderPassage(story.start);
