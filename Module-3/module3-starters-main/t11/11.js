"use strict";
const picArray = [
  {
    title: "Title 1",
    caption: "Caption 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
    image: {
      large: "img/pic1.jpg",
      medium: "thumbnails/pic1.jpg",
    },
  },
  {
    title: "Title 2",
    caption: "Caption 2",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
    image: {
      large: "img/pic2.jpg",
      medium: "thumbnails/pic2.jpg",
    },
  },
  {
    title: "Title 3",
    caption: "Caption 3",
    description:
      "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
    image: {
      large: "img/pic3.jpg",
      medium: "thumbnails/pic3.jpg",
    },
  },
  {
    title: "Title 4",
    caption: "Caption 4",
    description:
      "Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    image: {
      large: "img/pic4.jpg",
      medium: "thumbnails/pic4.jpg",
    },
  },
  {
    title: "Title 5",
    caption: "Caption 5",
    description:
      "Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ",
    image: {
      large: "img/pic5.jpg",
      medium: "thumbnails/pic5.jpg",
    },
  },
  {
    title: "Title 6",
    caption: "Caption 6",
    description:
      "Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.",
    image: {
      large: "img/pic6.jpg",
      medium: "thumbnails/pic6.jpg",
    },
  },
  {
    title: "Title 7",
    caption: "Caption 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
    image: {
      large: "img/pic7.jpg",
      medium: "thumbnails/pic7.jpg",
    },
  },
  {
    title: "Title 8",
    caption: "Caption 8",
    description:
      "Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ",
    image: {
      large: "img/pic8.jpg",
      medium: "thumbnails/pic8.jpg",
    },
  },
  {
    title: "Title 9",
    caption: "Caption 9",
    description:
      "Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ",
    image: {
      large: "img/pic9.jpg",
      medium: "thumbnails/pic9.jpg",
    },
  },
];

// add your code here
// hope you enjoy Italian food because I'm about serve some spaghetti

function createArticle(num) {
  let article = document.createElement('article');
  article.classList.add('card');
  
  let h2 = document.createElement('h2');
  let header = document.createTextNode(picArray[num].title);
  h2.appendChild(header);
  article.appendChild(h2);

  let figure = document.createElement('figure');
  article.appendChild(figure);

  let img = document.createElement('img');
  img.setAttribute('src', picArray[num].image.medium);
  img.setAttribute('alt', picArray[num].title);
  figure.appendChild(img)
    
  let figcaption = document.createElement('figcaption');
  let caption = document.createTextNode(picArray[num].caption);
  figcaption.appendChild(caption);
  figure.appendChild(figcaption);

  let p = document.createElement('p');
  let text = document.createTextNode(picArray[num].description);
  p.appendChild(text)
  article.appendChild(p);

  document.getElementById("pictures").appendChild(article);

 const dialog = document.querySelector("dialog");

  const dialogImg = dialog.querySelector("img");
  
  const span = dialog.querySelector("span");
  article.addEventListener("click", (e) => {
    dialog.showModal();
    dialogImg.setAttribute('src', picArray[num].image.large);
    dialogImg.setAttribute('alt', picArray[num].title);
  });

  span.addEventListener("click", (e) => {
    dialog.close();
  });
  return article;
}

for( let i = 0; i < picArray.length; i++ ) {
  createArticle(i)
}
