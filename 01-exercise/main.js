const DATA_URL = "https://ok.surf/api/v1/cors/news-feed"

/* DATA FORMAT:
  {
    "link": string,
    "og": string,
    "source": string,
    "source_icon": string,
    "title": string
  }
*/

document.addEventListener("DOMContentLoaded", async () => {
  // fetch
  const res = await fetch(DATA_URL);
  const newsData = await res.json();

  // parent
  const newsEl = document.querySelector("#news");

  for (const [category, newsList] of Object.entries(newsData)) {
    // category
    const catEl = document.createElement("div");
    catEl.classList.add("news-category-container");

    const catTitleEl = document.createElement("h4");
    catTitleEl.classList.add("news-category-title");
    catTitleEl.innerHTML = `${category}`;
    catEl.appendChild(catTitleEl);

    const catArticlesEl = document.createElement("div");
    catArticlesEl.classList.add("news-category-articles");
    catEl.appendChild(catArticlesEl);

    for (let idx = 0; idx < newsList.length && idx < 9; idx++) {
      // create and add elements
      const newsItemEl = document.createElement("div");
      newsItemEl.classList.add("news-item");

      const withSpan =`<span>${newsList[idx].title.replace(/\s/, "</span> ")}`;
      const newsTitleEl = document.createElement("h4");
      newsTitleEl.classList.add("news-item-title");
      newsTitleEl.innerHTML = `${withSpan}`;
      newsItemEl.appendChild(newsTitleEl);

      const newsSourceEl = document.createElement("h4");
      newsSourceEl.classList.add("news-item-source");
      newsSourceEl.innerHTML = `${newsList[idx].source}`;
      newsItemEl.appendChild(newsSourceEl);

      const newsImageContainerEl = document.createElement("div");
      newsImageContainerEl.classList.add("news-item-image-container");
      newsItemEl.appendChild(newsImageContainerEl);

      const newsImageEl = document.createElement("img");
      newsImageEl.classList.add("news-item-image");
      newsImageEl.src = `${newsList[idx].og}`;
      newsImageContainerEl.appendChild(newsImageEl);

      catArticlesEl.appendChild(newsItemEl);
    }

    newsEl.appendChild(catEl);
  }
});
