export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //^ é a mesma coisa que Array<Negociacao>
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //^ é a mesma coisa que ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}
