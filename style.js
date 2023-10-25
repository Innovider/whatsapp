// https://api.whatsapp.com/send?phone=77772038035

let link = 'https://api.whatsapp.com/send?phone=';

$('button').click(function(){
    let field = $('input').val();
    let fField = field.replace('(','').replace(')','').replace('+','').replace('-','').replace(/ /g,'');
    
    $(location).attr('href',link + fField);

})
