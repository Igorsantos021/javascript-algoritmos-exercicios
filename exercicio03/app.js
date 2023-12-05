function calcularsoma(){
    let numero1, numero2, media
    numero1 = document.getElementById("numero1").value
    numero2 = document.getElementById("numero2").value
    media = (parseFloat(numero1) + parseFloat(numero2))/2
    document.getElementById("resultado").innerText = "Sua média é: " + media
}