
describe('Acessando o dicionario e fazendo pesquisa', () => {
  it('Caso de Teste 1: Pesquisa e exploração de palavra em português', () => {
    cy.visit('https://www.dicio.com.br')
    cy.get('#q').type('cachorro')
    cy.get('.icon-search').click()
    cy.get('h1').should('contain.text', 'cachorro')
    cy.get('sg-speech-button').click()
  })

  //erro
  it('Caso de Teste 2: Pesquisa e exploração de palavra em inglês', () => {
    cy.visit('https://www.dicio.com.br')
    cy.get('#q').type('dog')
    cy.get('.icon-search').click()
    cy.get(':nth-child(1) > ._sugg > .list-link').should('contain.text', 'dog')
    cy.get(':nth-child(1) > ._sugg > .list-link').click()
    cy.get('sg-speech-button').click()
    cy.get('#logo > a > img').click();
  })
})

describe('Teste de navegação pelos links da pagina', () => {
  it('Caso de Teste 3: Acessa as palavras mais pesquisadas pela home', () => {
    for (let i = 2; i <= 5; i++) {
      cy.visit('https://www.dicio.com.br')
      cy.get('a').eq(i).invoke('text').then((texto) => { 
        const palavraDosLinks = texto.trim();
        cy.get('a').eq(i).click()
        cy.get('h1').should('include.text', palavraDosLinks);
      })
    }
  })

  
  it('Caso de Teste 4: Sorteia palavras 10 vezes ', () => {
    cy.visit('https://www.dicio.com.br')
    for (let i = 0; i < 9; i++) {
      cy.get('.word > sg-speech-button').click()
      cy.wait(2000);
      cy.get('#js-btn-sortear').click()
    }

  })

  it('Caso de Teste 5: Acessa as listas das letras', () => {
    cy.visit('https://www.dicio.com.br')
  
    for (let i = 18; i <= 24; i++) {
      cy.get('a').eq(i - 1).invoke('text').then((texto) => {
        const palavraDosLinks = texto.trim().toUpperCase();
  
        cy.get('a').eq(i - 1).click()
        cy.get('h1').should('include.text', palavraDosLinks);
        cy.get('#logo > a > img').click()
      })
    }
  })

  it('Caso de Teste 6: Acessar a palavra do dia', () => {
    cy.visit('https://www.dicio.com.br')
    cy.get('.word-container > sg-speech-button').click()
    cy.get('.word-link').invoke('text').then((texto) => {
      const palavraDosLinks = texto.trim()
      cy.get('.word-link').click()
      cy.get('h1').should('include.text', palavraDosLinks)
      cy.get('#logo > a > img').click()
    })
  })
})
