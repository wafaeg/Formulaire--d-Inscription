function enregistrer(){
    var txtNom      =document.getElementById("txtNom").value;
    var txtPrenom   =document.getElementById("txtPrenom").value; 
    var txtAdress   =document.getElementById("txtAdress").value;
    var txtTelephone=document.getElementById("txtTelephone").value;
    var txtEmail    =document.getElementById("txtEmail").value;

    // if (txtNom == ""||txtPrenom == ""||txtAdress == ""||txtTelephone == ""||txtEmail == "") {
    //     alert("Remplire les champs");
    // }
    document.getElementById("smile").innerHTML+="<b>Nom &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:</b>&nbsp&nbsp"+txtNom+"<br>";
    document.getElementById("smile").innerHTML+="<b>Prénom &nbsp&nbsp&nbsp&nbsp:</b>&nbsp&nbsp"+txtPrenom+"<br>";
    document.getElementById("smile").innerHTML+="<b>Adress &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:</b>&nbsp&nbsp"+txtAdress+"<br>";
    document.getElementById("smile").innerHTML+="<b>Telephone :</b>&nbsp&nbsp&nbsp"+txtTelephone+"<br>";
    document.getElementById("smile").innerHTML+="<b>Mail &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:</b>&nbsp&nbsp"+txtEmail+"<br><br>";

}

