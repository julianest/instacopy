//---------Swiper code---------//
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//----------Like ----------//

const like = document.getElementById("like");
let liked = false;
like.addEventListener("click", () => {
  let url = "https://res.cloudinary.com/docutv7ug/image/upload/";
  let urlLike = "v1659474585/test_ColoredBytes/Liked_jbhlym.png";
  let urlLiked = "v1659474586/test_ColoredBytes/Like_slk5qt.png";
  !liked
    ? like.setAttribute("src", url + urlLike)
    : like.setAttribute("src", url + urlLiked);
  liked = !liked;
});

//----------Add comment ----------//
const input = document.getElementById("commentAdd");
const divComment = document.getElementById("comment");
const comments = [];

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    catchComment();
  }
});

function catchComment() {
  let commentInput = input.value;
  if (commentInput) {
    comments.push(input.value);
    renderComments();
    input.value = "";
  }
}

function renderComments() {
  let html = "";
  for (let i = 0; i < comments.length; i++) {
    html += `<div><p><strong>Comment </strong>${comments[i]}</p><div>`;
  }
  divComment.innerHTML = html;
}

