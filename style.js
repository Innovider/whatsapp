document.getElementById("button").addEventListener("click", () => {
  let number = document.getElementById("number");
  let cNum = number.value;
  cNum = cNum
    .replaceAll(" ", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("-", "")
    .replaceAll("+", "");
  let fNum = [];
  fNum.push(cNum);

  if (fNum[0] !== "") {
    if (fNum[0][0] === "8") {
      fNum[0] = fNum[0].replace("8", "7");
    }
  }

  let formLink = window.location.href;
  // let link = `https://api.whatsapp.com/send?phone=${fNum}`;
  // let link = `https://wa.me/${fNum}?text=Перейдите по этой ссылке ${formLink}`;
  let link = `https://wa.me/${fNum}`;
  document.getElementById("link").setAttribute("href", link);
  document.getElementById("link").click();
});
