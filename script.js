function carregar(){
var msg - window.document.getElementById('msg') 
  var ing -window. document.getElementById("imagem')
  var data - new Date()
  var hora = data.gethours()
  msg.innerHTL = `Agora sao $(hora) horas.'
  if (hora >=0 && hora < 12){  //Bom dia  img.src = '3292e2078a6a7d8bce24d19361dd413b.jpg'
  } else if(hora >=12 && hora <18){  //Boa tarde  img.src = 'tarde.jpeg'  
  } else {  //Boa noite  img.src = 'noite.jpg'  
  }
