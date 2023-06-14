const fs = require('fs');
const assert = require('assert');
const { readMarkdownFile } = require('../index.js');

describe('readMarkdownFile', function() {
  it('deve retornar uma array de links extraídos do arquivo Markdown', function(done) {
    const filePath = 'files/test.md'; 

    readMarkdownFile(filePath)
      .then(result => {
        assert.deepStrictEqual(result, [
          { text: 'Link 1', url: 'https://curriculum.laboratoria.la/pt/topics/javascript//04-arrays'},
          { text: 'Link 2', url: 'https://nodejs.org/docs/latest/api/modules.html'},
        ]);
        done();
      })
      .catch(error => {
        done(error);
      });
  });

  it('deve retornar uma array vazia se o arquivo Markdown não contiver links', function(done) {
    const filePath = 'files/arquivovazio.md'; // Substitua pelo caminho de um arquivo Markdown sem links

    readMarkdownFile(filePath)
      .then(result => {
        assert.deepStrictEqual(result, []);
        done();
      })
      .catch(error => {
        done(error);
      });
  });
});
