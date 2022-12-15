"use strict";

/*
const form = document.querySelector("form");
const query = form.querySelector("#query");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`https://api.tvmaze.com/search/shows?q=${query.value}`)
      .then((data) => data.json())
      .then((shows) => {
        console.log(shows)
      })});
*/

// code

const dialog = document.querySelector("dialog");
const closeDialog = dialog.querySelector("span");

function createArticle(show) {
  const article = document.createElement("article");

  article.className = "card";
  if(show.name != null) {
    const name = document.createElement("h2")
    const nameTxt = document.createTextNode(show.name)
    name.appendChild(nameTxt)
    article.appendChild(name)
  }
  else {
    const name = document.createElement("h2")
    const nameTxt = document.createTextNode("Name Not Found")
    name.appendChild(nameTxt)
    article.appendChild(name)
  }

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  if (show.image != null) {
    img.setAttribute("src", show.image.medium);
  } else {
    img.setAttribute("src", "./images/No-Image.png");
  }
  img.setAttribute("alt", show.name);
  figure.appendChild(img);

  const genre = document.createElement("figcaption");
  figure.appendChild(genre);
  article.appendChild(figure);
  genre.innerHTML = show.genres.length?show.genres.join(' | '):'<i>Genre Not Found</i>'
 
  article.innerHTML +=
    show.summary != null ? show.summary : "<i>Summary Not Found</i><br>";

  const url = document.createElement("a");
  const urlTxt = document.createTextNode("Details");
  url.appendChild(urlTxt);
  url.setAttribute("target", "blank_");
  article.appendChild(url);

  const iframe = document.createElement("iframe");
  url.addEventListener("click", (e) => {
    iframe.src = show.url;
    dialog.appendChild(iframe);
    dialog.showModal();
  });

  return article;
}

const form = document.querySelector("form");
const input = form.querySelector("#query");
const results = document.querySelector("#results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((data) => data.json())
    .then((shows) => {
      results.innerHTML = "";
      if (shows.length)
        for (const i of shows) results.appendChild(createArticle(i.show));
      else results.innerHTML = "<i>No Results</i>";
    });
});

closeDialog.addEventListener("click", (e) => {
  dialog.close();
  dialog.removeChild(dialog.querySelector("iframe"));
});
