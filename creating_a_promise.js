/**
 * Usamos o new Promise para criar a promise,
 * ela recebe como parâmetro uma função.
 * Essa função têm dois parâmetros, resolve e
 * reject.
 * Usamos resolve quando queremos retornar o
 * sucesso e reject quando queremos demonstrar
 * a falha.
 * https://dio.dev/usando-promises-com-fetch-no-javascript
 */

const promise = new Promise((resolve, reject) => {
    /**
     * Adicionei um setTimeout para falar que
     * essa promise precisa esperar 300
     * milisegundos para retornar (resolve)
     * o seu resultado
     */
    setTimeout(() => {
      resolve('Mundo !');
    }, 300)
  });

/**
 * O .then() é um código padrão para quando
 * a promise finalizar, com sucesso ou falha.
 * Isso vai executar o que você quer fazer 
 * com o resultado quando sua promise retornar
 * o resultado esperado.
 */

promise.then(response => {
    console.log(response);
  });

/**
 * Executando uma operação para criar um
 * console, apenas para exemplo de que,
 * como a promise está esperando 300
 * milisegundos para terminar, esse código
 * vai ser executado antes do término da
 * resolução da promise.
 */

console.log('It is printed FIRST ===> Olá');

// https://dio.dev/usando-promises-com-fetch-no-javascript