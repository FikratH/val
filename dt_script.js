const datetimeInput = document.querySelector(".date");

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  var date = new Date(datetimeInput.value);
  if (date < new Date() || date.getMonth() > new Date().getMonth()) {
    alert("nooo");
  } else {
    location.href = "./thanks.html";
  }
});
