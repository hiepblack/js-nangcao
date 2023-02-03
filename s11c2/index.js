(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function (e) {
    header.style.color = "blue";
  });
})();
