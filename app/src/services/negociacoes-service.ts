import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{
    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())//retorna dados em json
        .then((dados: NegociacoesDoDia[]) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(//cria um array de negociações pra cada item do json
                    new Date(), 
                    dadoDeHoje.vezes, 
                    dadoDeHoje.montante
                )
            })
        });
    }
}