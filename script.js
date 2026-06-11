function calcularPreço() {
    // Captura os valores digitados pelo produtor
    const insumos = parseFloat(document.getElementById('insumos').value);
    const logistica = parseFloat(document.getElementById('logistica').value);
    const producao = parseFloat(document.getElementById('producao').value);

    // Validação básica para não dividir por zero ou campos vazios
    if (isNaN(insumos) || isNaN(logistica) || isNaN(producao) || producao <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos maiores que zero.");
        return;
    }

    // Calcula o custo total e o custo por unidade (quilo ou caixa)
    const custoTotal = insumos + logistica;
    const custoUnidade = custoTotal / producao;

    // Calcula os preços de venda com margens de lucro (20% e 40%)
    const venda20 = custoUnidade * 1.20;
    const venda40 = custoUnidade * 1.40;

    // Insere os resultados de volta nas tags do HTML formatando como moeda real (R$)
    document.getElementById('custo-base').innerText = custoUnidade.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('preco20').innerText = venda20.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('preco40').innerText = venda40.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Mostra a seção de resultados que estava escondida
    document.getElementById('resultado').classList.remove('hidden');
}