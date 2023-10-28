// https://api.whatsapp.com/send?phone=77772038035

let link = 'https://api.whatsapp.com/send?phone=';

$('button').click(function(){
    alert('Hi!');
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
