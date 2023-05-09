export function inspect(//aqui o decorator foi exportado diretamente, porque esse não precisa receber parametros
        target: any,
        propertykey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            console.log(`---Método: ${propertykey}`);
            console.log(`------Parâmetros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        }
        return descriptor;
    }