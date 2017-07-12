var mySlider = 0; // réglé a 0 (première image)//
carousel();

//On cache chaque image et quand on fait apparaitre la première on cache les autres, quand on fait apparaitre la deuxième on cache les autres ect//

function carousel() {
    var i;
    var x = document.getElementsByClassName("Slide"); //On va récuperer les images avec la class et on les stocks//
    var y= document.getElementsByClassName("text");//On va récuperer les titres avec la class et on les stocks//
    for (i = 0; i < x.length; i++) { //on crée la boucle qui part du premier élement(image) au dernier du tableau//
       x[i].style.display = "none";//On se refère à chaque élément du tableau et le fait disparaitre//
       y[i].style.display= "none";//on fait disparaire chaque titre//
    }

    mySlider++;//On incrémente le slider

    if (mySlider+1 > x.length) {
      mySlider = 0
    }// Si la dernière image (9+1=10) est > à la fin du tableau(9) =revenir à la première image//

    x[mySlider].style.display = "block";//On fait réapparaitre chaque image//
    y[mySlider].style.display="block";//On fait réapparaitre chaque titre//
    setTimeout(carousel, 2000); // Change l'image toute les 2 secondes//
}
