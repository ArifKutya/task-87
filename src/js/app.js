import "../scss/app.scss";
import * as R from 'ramda'
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const extractedClasses = R.pluck("class", arrayToPluck)
  const articles = document.querySelectorAll("article");
  articles.forEach((article, index) => {
    article.classList.add(extractedClasses[index]);
  })
});
