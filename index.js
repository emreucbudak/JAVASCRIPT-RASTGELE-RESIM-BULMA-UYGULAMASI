const rastgele = document.querySelector(".deneme");
const imagelist = document.querySelector(".imagelist");
const sil = document.querySelector("#sil");
sil.addEventListener("click",silme)
rastgele.addEventListener("click",deneme)
function deneme(e) {
  e.preventDefault();
  let a = Math.floor(Math.random()*1000 +1)
  fetch(`https://api.unsplash.com/photos?page=${a}`, {
    method : "GET",
    headers : {
      Authorization: "Client-ID kAZX_tvkdL30CRyjDUt9-Jq9RPGhRcAVemaOpeFErck"
    }
  })
  .then((response) => {
    return response.json();
  })
  .then ((data) => {
    Array.from(data).forEach ((elements) => {
      const b = elements.urls.small
      addElementsUI(b);
    })
  })
  .catch ((err) => {
    console.log(err);
  })
}
function addElementsUI(linked) {
  //          <div class="card" style="width: 18rem;">
  // <img src="indir.png" class="card-img-top" alt="...">
  // </div>
  const div = document.createElement("div")
  div.className= "card";
  const img = document.createElement("img")
  img.src = linked;
  img.className = "card-img-top"
  div.append(img);
  imagelist.append(div);

}
function silme (e) {
  e.preventDefault();
  Array.from(imagelist.children).forEach((datas) => {
    console.log(datas);
    datas.remove();
  })
}