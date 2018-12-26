const gameLogic = {
  jouer: false,
  play: function(){
      const boule = document.getElementById('circle');
      let positionner, cacher;
      let score = 0;

      const btnPlay = document.getElementById('btn-play');
      const htmlScore = document.getElementById('score');

      btnPlay.addEventListener("click", function(){

        // modifier état du jeu suivant état initial quant utilisateur clique
        if(this.jouer == true) this.jouer = false;
        else this.jouer=true;

        if(this.jouer==true){
          btnPlay.textContent = 'Arrêter';

          // toutes les une seconde cacher la boule
          cacher = setInterval(function(){
            boule.style.display = 'none';
          }, 1000);

          // toutes les 2 secondes changer la position de la boule
          positionner = setInterval(function(){
              boule.style.left = Math.random()*450+"px";
              boule.style.top = Math.random()*450+"px";
              boule.style.display = 'block';
            }, 2000);

          // augmenter le score de 5 quand l'utilisateur clique sur la boule
          boule.addEventListener("click", function(){
            score += 1;
            htmlScore.textContent = `Score: ${score}`;
          })

        }else{
          btnPlay.textContent = 'Commencer';
          boule.style.display = 'block';

          // quand l'utilisateur ne joue pas, cesser l'animation de la boule
          clearInterval(positionner);
          clearInterval(cacher);

        }

      })

  }

}
