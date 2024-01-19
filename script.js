function calcularValorTotal() {
    // Obtém os valores dos inputs
    var pesoPrato = document.getElementById('pesoPrato').value;
    var precoQuilo = document.getElementById('precoQuilo').value;

    // Calcula o valor total
    var valorTotal = (pesoPrato / 1000) * precoQuilo; // Convertendo gramas para quilos

    // Limita o resultado a duas casas decimais
    valorTotal = valorTotal.toFixed(2);

    // Insere o resultado no input correspondente
    document.getElementById('resultado').value = valorTotal;
}