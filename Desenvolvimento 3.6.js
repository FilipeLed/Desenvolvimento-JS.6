// Definindo o objeto Carro
var carro = {
    marca: "Toyota",
    cor: "Azul",
    ano: 2022,
    ligar: function() {
        console.log("Carro ligado.");
    },
    acelerar: function(velocidade) {
        console.log("Carro acelerando para " + velocidade + " km/h.");
    },
    parar: function() {
        console.log("Carro parado.");
    }
};

// Definindo o objeto Livro
var livro = {
    titulo: "Aventuras de Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    numPaginas: 320,
    abrir: function() {
        console.log("Livro aberto na primeira página.");
    },
    virarPagina: function() {
        console.log("Virando a próxima página do livro.");
    },
    fechar: function() {
        console.log("Livro fechado.");
    }
};

// Definindo o objeto Conta Bancária
var contaBancaria = {
    titular: "João Silva",
    saldo: 1500,
    tipoConta: "Corrente",
    verificarSaldo: function() {
        console.log("Saldo atual: R$" + this.saldo);
    },
    depositar: function(valor) {
        this.saldo += valor;
        console.log("Depósito de R$" + valor + " realizado. Novo saldo: R$" + this.saldo);
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$" + valor + " realizado. Novo saldo: R$" + this.saldo);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }
};

// Definindo o objeto Usuário
var usuario = {
    nome: "Alice",
    email: "alice@example.com",
    senha: "senha123",
    login: function() {
        console.log("Usuário " + this.nome + " fez login.");
    },
    logout: function() {
        console.log("Usuário " + this.nome + " fez logout.");
    },
    alterarSenha: function(novaSenha) {
        this.senha = novaSenha;
        console.log("Senha alterada com sucesso para " + novaSenha);
    }
};

// Exemplos de uso
carro.ligar();
carro.acelerar(60);
livro.abrir();
contaBancaria.verificarSaldo();
contaBancaria.depositar(500);
usuario.login();
usuario.alterarSenha("novasenha456");
usuario.logout();
