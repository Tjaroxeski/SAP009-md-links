# Markdown Links

Resumo do projeto
Neste projeto foi criada uma ferramenta de linha de comando (CLI) assim como a sua própria biblioteca (library) em Javascript.

Instalação
O módulo é instalável através do comando:

npm install md-links-cmas
CLI (Interface de Linha de Comando)
Quando apenas entregamos o caminho do arquivo (caminho abaixo), o comportamento esperado é que ele devolva o caminho do arquivo, o nome e o link.

md-links ./caminho-para-o-arquivo/arquivo.md

Sobre as options: --validate e --stats
Ao passar a opção --validate, o módulo, através de uma requisição HTTP verifica se este link é válido e está funcionando:

md-links ./caminho-do-arquivo/arquivo.md --validate

Já com a option --stats recebemos as estatísticas dos links, ou seja o número de links:

md-links ./caminho-do-arquivo/arquivo.md --stats

E inclusive para obter estatísticas que combinem os resultados de ambas as options --stats e --validate:

  md-links ./caminho-do-arquivo/arquivo.md --stats --validate

  Testes
  Os testes alcaçaram mais de 90% de cobertura.
  Considerações gerais
Este projeto foi realizado individualmente.

O projeto foi realizado em 3 semanas.

A biblioteca e script executável (ferramenta de linha de comando - CLI) foram implementados em JavaScript para serem executadas com Node.JS. Foi utilizada a biblioteca externa node-fetch.

Os testes unitários tiveram cobertura acima de 70% dos statements, functions, lines e branches.

A ferramente foi desenvolvida utilizando o modelo de módulos do CommonJs, devido ao ambiente Node.js e para fins de conhecimento.

 Instruçoes para utilização
  npm i tharla-md-links.