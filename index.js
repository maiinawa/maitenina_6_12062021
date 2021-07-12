

// emmener sur une autre page au clic
const handleClick = (e) => {
    alert("click")
    window.location = ('https://openclassrooms.com')
    console.log(window.location)
  }
document.getElementById("test").addEventListener('click',handleClick)

