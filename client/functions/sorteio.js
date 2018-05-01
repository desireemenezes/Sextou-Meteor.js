Template.sorteio.events( {
  "click button": function(event, template) {

    min = Math.ceil(1);
    max = Math.floor(100);
    num = Math.floor(Math.random() * (max - min)) + min;

    if(num<33){
      document.getElementById('headlineText').textContent = "VAI TRABALHAR NO SÁBADO!";
      document.getElementById('content').style.backgroundImage = "url('images/toca-pro-inferno.jpg')";
    }else if(num>33 && num<66){
      document.getElementById('headlineText').textContent = "ME CHAMARAM PRA SAIR E EU DISSE: SÓ MAIS UM EPISÓDIO!";
      document.getElementById('content').style.backgroundImage = "url('images/serie.jpg')";
    }else if(num>66){
      document.getElementById('headlineText').textContent = "VAI DAR UM PT TÃO GRANDE QUE OS AMIGOS VÃO PEDIR SEU IMPEAACHMENT!";
      document.getElementById('content').style.backgroundImage = "url('images/pt.jpg')";
    }

    }
});
