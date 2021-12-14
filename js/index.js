var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var submit = document.getElementById("submit");

var bookmarkContainer;
if (localStorage.getItem("Files") == null) {
  bookmarkContainer = [];
}
else {
  bookmarkContainer = JSON.parse(localStorage.getItem("Files"));
  bookmarkData();

}

submit.onclick = function () {
  addBookmark();
  bookmarkData();
  clerData();
}

function addBookmark() {
  var bookmark =
  {
    name: siteName.value,
    url: siteUrl.value,
  }
  bookmarkContainer.push(bookmark);
  localStorage.setItem("Files", JSON.stringify(bookmarkContainer));
}

function bookmarkData() {

  var datas = "";
  for (var i = 0; i < bookmarkContainer.length; i++) {
    datas += `<div class="container py-3 w-75 bg my-3 d-flex" >
        <h2 class="pr-5">`+ bookmarkContainer[i].name + `</h2>
        <a href="`+ bookmarkContainer[i].url + `" target="_blank"  class="btn btn-primary mr-3">vist</a>
        <button class="btn btn-danger" onclick="deletBookmark(`+ i + `)">Delete</button>
        </div>`
  }
  document.getElementById("dataShow").innerHTML = datas;
}

function deletBookmark(id) {
  bookmarkContainer.splice(id, 1);
  localStorage.setItem("Files", JSON.stringify(bookmarkContainer));
  bookmarkData();


}

function clerData() {
  var input = document.querySelectorAll(".form-control")
  for (var i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}

