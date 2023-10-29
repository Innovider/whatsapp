document.getElementById("button").addEventListener("click", () => {
  let number = document.getElementById("number");
  let cNum = number.value;
  let fNum = "";
  for (let i = 0; i < cNum.length; i++) {
    if (i === 0 && cNum[i] === "8") {
      fNum = fNum + 7;
    } else if (
      cNum[i] === "+" ||
      cNum[i] === "(" ||
      cNum[i] === ")" ||
      cNum[i] === "-" ||
      cNum[i] === " "
    ) {
      fNum = fNum + "";
    } else {
      fNum = fNum + cNum[i];
    }
  }
  // let link = `https://api.whatsapp.com/send?phone=${fNum}`;
  let formLink = window.location.href;
  let link = `https://wa.me/${fNum}?text=Перейдите по этой ссылке ${formLink}`;
  document.querySelector(".toWhatsApp").setAttribute("href", link);
  document.querySelector(".toWhatsApp").click();
});
