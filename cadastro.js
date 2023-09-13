class Funcionario {
    constructor(nome, sobrenome, cargo, salario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cargo = cargo;
        this.salario = salario;
    }
}

// Função para interagir com o usuário e cadastrar um novo funcionário
function cadastrarFuncionario() {
    const nome = prompt("Digite o nome do funcionário:");
    const sobrenome = prompt("Digite o sobrenome do funcionário:");
    const cargo = prompt("Digite o cargo do funcionário:");
    const salario = prompt("Digite o salário do funcionário:");

    const novoFuncionario = new Funcionario(nome, sobrenome, cargo, salario);

    return novoFuncionario;
}

// Exemplo de uso:
const funcionarios = [];

while (true) {
    const novoFuncionario = cadastrarFuncionario();
    funcionarios.push(novoFuncionario);

    const continuar = prompt("Deseja cadastrar outro funcionário? (S/N)").toUpperCase();
    if (continuar !== "S") {
        break;
    }
}

// Exibir a lista de funcionários cadastrados
console.log("Funcionários cadastrados:");
for (const funcionario of funcionarios) {
    console.log(funcionario);
}
