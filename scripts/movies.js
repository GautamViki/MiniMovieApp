// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// https://www.omdbapi.com/?t=batman&apikey=41c2a909
// let input=document.getElementById("search");
// input.oninput=debounce();

let showMovie = document.getElementById("movies");
let id;

async function searchMovies() {
  try {
    const query = document.getElementById("search").value;

    let res = await fetch(
      `https://www.omdbapi.com/?t=${query}&apikey=41c2a909`
    );
    let data = await res.json();
    // console.log(data.Title)
    return data;
  } catch (err) {
    console.log(" :", err);
  }
}
let bookMovArrr=JSON.parse(localStorage.getItem("movie"))||[];
function appendMovieData(data) {
  showMovie.innerHTML = null;
  // data.foreach(function(el,idx){
  let box = document.createElement("div");

  let poster = document.createElement("img");
  poster.src = data.Poster;

  let title = document.createElement("p");
  title.innerText = data.Title;

  // console.log(title,poster)
  let btn = document.createElement("button");
  btn.innerText = "book now";
//   btn.onclick="bookMovie";
btn.addEventListener("click",bookMovie)

// console.log(data);
  function bookMovie() {
    //   event.preventDefault();
      bookMovArrr.push(data);
      window.open("checkout.html","_blank");
    //   console.log(bookMovArrr);
    localStorage.setItem("movie",JSON.stringify(bookMovArrr));
  }

  box.append(poster, title, btn);
  showMovie.append(box);
  // })
}

async function main() {
  let data = await searchMovies();
  if (data === undefined) {
    return false;
  }
  appendMovieData(data);
}
// // searchMovies();
function debounce(main, delay) {
  // console.log("##############")
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    main();
  }, delay);
}
