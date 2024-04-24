
document.getElementById("formulaire").addEventListener("submit", function Envoyer(enven){
    enven.preventDefault()

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let objet = document.getElementById("objet").value;
    let message = document.getElementById("message").value;

    console.log("le nom est : " + nom);
    console.log("l'email est : " + email);
    console.log("l'objet du message est : " + objet);
    console.log("le message est : " + message);
})