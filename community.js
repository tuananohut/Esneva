document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("shareForm");
  const postList = document.querySelector(".post-list");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("input[placeholder='Your name...']").value;
    const title = form.querySelector("input[placeholder='Post title...']").value;
    const content = form.querySelector("textarea").value;
    const category = form.querySelector("select").value;

    const article = document.createElement("article");
    article.classList.add("post-preview");
    article.innerHTML = `
      <h3>${title}</h3>
      <p class="meta">By ${name} • just now</p>
      <p class="excerpt">${content.slice(0, 100)}...</p>
      <div class="post-footer">
        <span><i class="fas fa-thumbs-up"></i> 0</span>
        <span><i class="fas fa-comment"></i> 0</span>
        <span class="tag">${category}</span>
      </div>
    `;
    postList.prepend(article);
    form.reset();
  });
});

postList.addEventListener("click", (e) => {
  const article = e.target.closest(".post-preview");
  if (!article) return;

  const isExpanded = article.classList.toggle("expanded");
  if (isExpanded) {
    const fullText = document.createElement("p");
    fullText.textContent = "Full content of the post goes here..."; // Gerçek veri ile değiştir
    fullText.classList.add("full-text");
    article.appendChild(fullText);
  } else {
    const fullText = article.querySelector(".full-text");
    if (fullText) fullText.remove();
  }
});
