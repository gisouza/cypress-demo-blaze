# cypress-demo-blaze
# Automação de Testes E2E com Cypress - DemoBlaze
Projeto desenvolvido com a finalidade de praticar e demonstrar conhecimento em automação de testes End-to-End utilizando [Cypress](https://www.cypress.io/). O sistema testado é o site [DemoBlaze](https://www.demoblaze.com/), um e-commerce fictício ideal para estudos de automação.

## Funcionalidades automatizadas
- Cadastro de novo usuário com username dinâmico
- Login de usuário
- Inclusão de produtos ao carrinho
- Remoção de produtos do carrinho
- Verificação de alertas
- Testes com variáveis dinâmicas e comandos reutilizáveis


## Tecnologias utilizadas
- [Cypress 14.2.1](https://docs.cypress.io/)
- JavaScript (ES6)
- GitHub Actions (CI/CD)
- Cypress Cloud (Dashboard de execução)

## Pré-requisitos
- Node.js instalado (versão 18+ recomendada)
- Git instalado

## Como executar o projeto (bash)
1. Clonar o repositório:
```bash
git clone https://github.com/gisouza/cypress-demo-blaze
cd cypress-demo-blaze
```

2. Instalar de dependências
```bash
npm install
```

3. Executar em modo interativo
```bash
npx cypress open
```

4. Executar em modo headless
```bash
npx cypress run
```

## Como executar o projeto no Cypress Cloud
1.  Acesse o dashboard:
https://cloud.cypress.io/projects/mid55i/runs 

## Execução via GitHub Actions
Toda vez que um push é feito na branch main, os testes automatizados são executados automaticamente via GitHub Actions.

O fluxo de trabalho está configurado no arquivo:

.github/workflows/cypress.yml

## Licença
Este projeto está sob a licença MIT.