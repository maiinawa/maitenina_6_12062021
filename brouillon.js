

// emmener sur une autre page au clic
const handleClick = (e) => {
    alert("click")
    window.location = ('https://openclassrooms.com')
    console.log(window.location)
  }
document.getElementById("test").addEventListener('click',handleClick)

//utiliser les event listenenr pour "changer de page"
// récupère l'ID
// afficher les elements comme homescreen via router
