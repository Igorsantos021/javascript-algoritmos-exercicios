function calcularsalario(){
    let hora, hora1, media, nome
    hora = document.getElementById("sal_hora").value
    hora1 = document.getElementById("horas_trabalhadas").value
    media = (hora * hora1)
    document.getElementById("resultado").innerText = "Seu salario será: " + media + "💲"

}





