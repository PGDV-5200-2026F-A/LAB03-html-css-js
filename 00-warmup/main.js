const DATA_URL = "https://raw.githubusercontent.com/PGDV-5200-2026F-A/LAB03-html-css-js/refs/heads/main/00-warmup/data/projects.json"

/* DATA FORMAT:
  {
    "client": string,
    "name": string,
    "year": int,
    "image": string
  }
*/

document.addEventListener("DOMContentLoaded", async () => {
  // fetch data: this is a two-step process
  // we first get a http response: it has data and information about the
  //   file we are fetching and the server we're fetching from.
  const dataResponse = await fetch(DATA_URL);

  // this is what actually grabs the content of the file.
  // in this case it's json, so we use the response.json()
  const data = await dataResponse.json();

  // TODO: sort data by year

  // grab the html parent element
  // this is the element that will hold all of our other elements
  const projectsContainer = document.querySelector("#projects");

  // iterate: go through all elements in the list (data variable)
  //          create a div to hold our projects's info
  for (let idx = 0; idx < data.length; idx = idx + 1) {
    // grab one item from list, the project at index idx
    const projectData = data[idx];

    // create the outer div for holding a project's info elements
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectsContainer.appendChild(projectItem);

    // create the project title element
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.innerHTML = projectData.name;
    projectItem.appendChild(projectTitle);

    // TODO: create the project client element

    // create the project image elements
    // first, the wrapper, to help with sizing
    const projectImgContainer = document.createElement("div");
    projectImgContainer.classList.add("project-image-container");
    projectItem.appendChild(projectImgContainer);

    // then, the actual image element
    const projectImg = document.createElement("img");
    projectImg.classList.add("project-image");
    projectImg.src = projectData.image + (200+idx);
    projectImgContainer.appendChild(projectImg);
  }
});
