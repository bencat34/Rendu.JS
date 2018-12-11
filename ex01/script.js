var operateur = "";
var nb1 = prompt("Rentrez 1er nombre: ");
var nb2 = prompt("Rentrez un 2eme nombre: ");
var operateur = prompt("Rentrez un opérateur + - * /: ");
    switch (operateur) 
    {
      case "+":
        var nbResult = parseInt (nb1) + parseInt (nb2);
        alert(nbResult)
        break;

      case "-":
            var nbResult = nb1 - nb2;
            alert(nbResult)
            break;

      case "*":
            var nbResult = nb1 * nb2;
            alert(nbResult)
            break;

      case "/":
            var nbResult = nb1 / nb2;
            alert(nbResult)
            break;

      default:
        nbResult = nb1;
    }

