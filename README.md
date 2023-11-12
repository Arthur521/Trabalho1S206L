Aluno: Arthur de Paula Assis - GES 122
Para executar, abra o terminal:
npm install cypress
./node_modules/.bin/cypress open

Para gerar o relatório:
npm i --save-dev cypress-mochawesome-reporter
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
O relatório estará em: "..\testes\cypress\reports\html\index.html"

*Observação: A página é extremamente lenta e por isso certos testes podem dar erro enquanto o relatório é produzido, porém, se acessados diretamente pelo cypress não levam ao erro.
