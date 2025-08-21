// Recuperer les elements html requis
const inputValue = document.getElementById("todo-input")
const list = document.getElementById("todo-list")
const btn = document.getElementById("ajouter")

// Fonction a executer lorsque l'on clique sur le bouton ajouter

btn.addEventListener("click", ()=>{
    if(inputValue.value === ""){
        alert('IMPOSSIBLE !!!')
    }
    else{
    // Recuperer la valeur de l'input
        const textContent = inputValue.value

    // Creer un nouvel element LI 
        const li = document.createElement('li')

    // Creer le bouton supprimer
        const supprimer = document.createElement('button')
        supprimer.innerHTML = "<i class='fas fa-trash'></i> Supprimer"

    // Ajouter le texte de l'input dans le li et inserer le bouton dans le li
        li.textContent = textContent
        li.appendChild(supprimer)

    // Fonction pour supprimer le li
        supprimer.addEventListener("click", () => {
            list.removeChild(li)
        })
    // Inserer le li dans le ul avec l'attribut list
        list.appendChild(li)

    // Effacer le contenu de l'input
        inputValue.value = ""   
        }

})

// Ajouter un gestionnaire d'événement pour la touche "Entrée"
inputValue.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêcher le comportement par défaut de la touche Entrée
        btn.click(); // Simuler un clic sur le bouton Ajouter
    }
});

