#!/usr/bin/env node
const mdLinks = require("./index.js")
const caminhoDoarquivo = process.argv[2]
const opcao = {
    validate: process.argv.includes('--validate'),
}
   

  function executarMdlinks (caminhoDoarquivo,opcao){
     return mdLinks(caminhoDoarquivo, opcao)
    .then((resultado) => {
      console.log('Resultado:', resultado);
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
  }
  

executarMdlinks(caminhoDoarquivo, opcao)