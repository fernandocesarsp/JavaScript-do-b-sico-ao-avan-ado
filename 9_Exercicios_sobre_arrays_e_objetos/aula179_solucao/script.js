const calculadora = {
    soma: function(a, b) {
        return a + b;
    },

    subtracao: function(a, b) {
        return a - b;
    },

    multiplicacao: function(a, b) {
        return a * b;
    },

    divisao: function(a, b) {
        return a / b;
    }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtracao(5,5));
console.log(calculadora.multiplicacao(8,2));
console.log(calculadora.divisao(5,2));