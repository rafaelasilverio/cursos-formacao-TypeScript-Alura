export function logarTempoDeExecucao(emSegundos: boolean = false) {//decorator foi implementado dentro de uma outra função pra permitir receber parametros
  return function (
    target: any, //construtor ou prototype da classe
    propertykey: string, //nome do metodo
    descriptor: PropertyDescriptor //descricao do metodo
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
      let divisor = 1;
      let unidade = 'milisegundos';
      if(emSegundos)
      {
        divisor = 1000;
        unidade = 'segundos';
      }
        const t1 = performance.now();
        const retorno = metodoOriginal.apply(this, args);
        const t2 = performance.now();
        console.log(`${propertykey}, tempo de execução do método  ${(t2 - t1) / divisor} ${unidade}`);
        retorno;
    };
    return descriptor;
  }
}
