// https://api.whatsapp.com/send?phone=77772038035

let link = 'https://api.whatsapp.com/send?phone=';

$('button').click(function(){
    let field = $('input').val();

    for(let i = 0; i < field.length; i++){
        if (i === 0 && field[i] === "8") {
            link = link + 7;
        }else if (
          field[i] === "+" ||
          field[i] === "(" ||
          field[i] === ")" ||
          field[i] === "-" ||
          field[i] === " "
        ){
          link = links + "";  
        }else{
            link = link + field[i];
        }   
    }
    
    $(location).attr('href',link);

})

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
