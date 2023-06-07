const fs = require('fs');
//mconst fetch = require('node-fetch');
const { link } = require('fs/promises');
const { resolve } = require('path');


function readMarkdownFile(filePath, opcao) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const matches = data.match(regex);
        const result = [];

        if (matches) {
          for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            const linkText = match.replace(regex, '$1');
            const linkUrl = match.replace(regex, '$2');
            const item = {
              text: linkText,
              url: linkUrl
            };
            result.push(item);
          }
        }
      if (opcao) {
        console.log('opa precisa validar')
      } else{
       resolve(result);
      }
      }
    });
  });
}

 function mdLinks(caminhoDoarquivo, opcao = {}) {
  return new Promise ((resolve, reject)=> {
    readMarkdownFile(caminhoDoarquivo)
    .then((links) =>{
      if (opcao.validate) {
        const linkMap = links.map((link)=>{
          return fetch (link.url)
          .then((response)=>{
            link.status = response.status;
            link.ok = response.ok;
            return link;
          }).catch((error)=> {
        console.log(error)
        })})
        
        
        Promise.all(linkMap)
        .then((resultado)=>{
        resolve(resultado)
        })
      } else {
        resolve (links)
      }
    })
    .catch((error)=> {
      reject(error)
      })
    })
}







module.exports = mdLinks;
