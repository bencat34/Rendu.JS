function nb_aleatoire(min, max)

{

     var nb = min + (max-min+1)*Math.random();

     return Math.floor(nb);

}

var nb = nb_aleatoire(0, 9);  // nb a deviner

var cpt = 3;    // nb de coups

var saisie;

var msg = 'Le nombre à deviner est compris entre 0 et 9.';


do

{
    if (cpt === 0)
        {
            alert("vous avez perdu ");
        }

     saisie = prompt(msg);

     cpt--;

     // message a afficher au prochain tour :

     if(saisie > nb)

          msg = "C'est moins";

     else

          msg = "C'est plus";
}

while(saisie != nb);


alert("Bravo, tu as gagne en " + cpt + " coups !");

