const { mdLinks } = require("../index.js");
const fetch = require('node-fetch');
jest.mock('node-fetch', ()=>jest.fn())
describe('mdlinksvalidate',function() {
    it('deve retornar validação ok, para retornar links validos', async function() {
      const opcao={validate:true}
      const caminhoDoarquivo='./files/test.md'
      fetch.mockImplementation(()=> Promise.resolve({
        ok: true,
        status: 200,
       }))
     const resposta = await mdLinks (caminhoDoarquivo,opcao)
    expect(resposta).toStrictEqual([
        { text: 'Link 1', url: 'https://curriculum.laboratoria.la/pt/topics/javascript//04-arrays',ok:true,status:200},
        { text: 'Link 2', url: 'https://nodejs.org/docs/latest/api/modules.html',ok:true,status:200},
      ])
    });
  
    test('devera devolver o caso de erro,porque o arquivo não existe', async() => {
      let erro = 'sucesso'
      await mdLinks('.arquivo inexistente.md').catch(() => {
          erro = 'erro'
      })
      expect(erro).toEqual('erro')
      });
   });
  
 
  
  
  
  