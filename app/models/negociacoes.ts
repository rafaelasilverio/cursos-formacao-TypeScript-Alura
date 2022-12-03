import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];
                        //^ é a mesma coisa que Array<Negociacao>

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{
            //^ é a mesma coisa que ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}
