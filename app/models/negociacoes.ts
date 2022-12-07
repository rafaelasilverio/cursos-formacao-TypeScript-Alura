import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];
                        //^ é a mesma coisa que Array<Negociacao>

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[]{
            //^ é a mesma coisa que ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}
