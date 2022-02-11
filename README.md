# my-bank-API
<img src="https://img.shields.io/static/v1?label=Version&message=1.0.0&color=FF2102&style=for-the-badge&logo="/> <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=119CE1&style=for-the-badge&logo="/> <img src="https://img.shields.io/static/v1?label=PR&message=YES&color=4DC31A&style=for-the-badge&logo="/>

Projeto criado visando colocar em prática os conhecimentos adquiridos em Back-end, onde crio uma API REST para cadastro/leitura de contas, depósitos e transferências entre contas, composta de:

 - :white_check_mark: accounts:
    - [x] Criação;
    - [x] Leitura por Id;

 - :white_check_mark: deposits: 
    - [x] Criação;

 - :white_check_mark: transfers:
    - [x] Criação;

---

# Sumário

- [Status](#status)
- [Licença](#licença)
- [Habilidades desenvolvidas](#habilidades-desenvolvidas)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Organização e Estruturação do Projeto](#organização-e-estruturação-do-projeto)
- [Pré-requisitos](#pré-requisitos)
  - [Ferramentas necessárias](#ferramentas-necessárias)
  - [Rodando no servidor local](#rodando-no-servidor-local)
  - [Quer contribuir com o projeto?](#quer-contribuir-com-o-projeto)
- [Orientações detalhadas de como utilizar](#orientações-detalhadas-de-como-utilizar)
  - [accounts](#accounts)
    - [accounts create](#accounts-create)
    - [accounts searchById](#accounts-searchById)
  - [login](#login)
  - [deposits](#deposits)
    - [deposits create](#deposits-create)
  - [transfers](#transfers)
    - [transfers create](#transfers-create)
  - [authentication](#authentication)
- [Contribuição](#contribuição)
- [Agradecimentos](#agradecimentos)
- [Autor](#autor)

---

# Status

Este projeto será utilizado em um teste técnico, mas pretendo continuar sua atualização, visando aprimoramento de suas funcionalidades além de melhorar sua performance e escalabilidade.

---

# Licença

Este projeto esta sobe a licença [MIT](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT).

---

# Habilidades desenvolvidas

- Entender os conceitos básicos de como o JavaScript funciona;
- Realizar operações assíncronas utilizando async/await;
- Realizar chamadas de funções de forma consciente;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares;
- Entender o funcionamento das camadas Model, Service, Controller;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada camada;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código;
- Entender e aplicar os padrões REST;
- Escrever assinaturas para APIs intuitivas e facilmente entendíveis;
- Autenticar rotas do Express, usando o token JWT;
- Gerar tokens a partir de informações como login e senha;
- Entender como utilizar o bcrypt para criptografar senhas de usuários;
- Entender e aplicar os conceitos de markdown na criação de um README estruturado.

---

# Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [nodemon](https://nodemon.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [eslint-config-trybe-backend](https://www.npmjs.com/package/eslint-config-trybe-backend)
- [http-status-codes](https://www.npmjs.com/package/http-status-codes)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongodb](https://www.npmjs.com/package/mongodb)

---

# Organização e Estruturação do Projeto

O projeto está organizado e estruturado da seguinte maneira:

```bash
├── .env
├── .gitignore
├── .eslintrc.json
├── README.md
└── src
    ├── api
    │   ├── app.js
    │   └── server.js
    ├── controllers
    │   ├── documents
    │   │   ├── accounts
    │   │   │   ├── create.js
    │   │   │   ├── index.js
    │   │   │   └── searchById.js
    │   │   ├── deposits
    │   │   │   ├── create.js
    │   │   │   └── index.js
    │   │   ├── login
    │   │   │   ├── index.js
    │   │   │   └── login.js
    │   │   └── transfers
    │   │       ├── create.js
    │   │       └── index.js
    │   ├── middlewares
    │   │   ├── auth
    │   │   │   └── index.js
    │   │   ├── error
    │   │   │   └── index.js
    │   │   ├── index.js
    │   │   ├── validations
    │   │   │   ├── validateCpf.js
    │   │   │   ├── validateDestinationCpf.js
    │   │   │   ├── validateFullName.js
    │   │   │   ├── validatePassword.js
    │   │   │   └── validateValue.js
    │   │   └── wrapper
    │   │       └── index.js
    │   ├── routers
    │   │   ├── accounts.js
    │   │   ├── deposits.js
    │   │   ├── login.js
    │   │   ├── root.js
    │   │   └── transfers.js
    │   └── statusAndMessage
    │       └── index.js
    ├── models
    │   ├── connection.js
    │   ├── documents
    │   │   ├── create.js
    │   │   ├── remove.js
    │   │   ├── searchAll.js
    │   │   ├── searchByField.js
    │   │   ├── searchById.js
    │   │   └── update.js
    │   └── index.js
    └── services
        ├── auth
        │   ├── getToken.js
        │   ├── index.js
        │   └── verifyToken.js
        ├── documents
        │   ├── accounts
        │   │   ├── create.js
        │   │   ├── index.js
        │   │   └── searchById.js
        │   ├── deposits
        │   │   ├── create.js
        │   │   └── index.js
        │   ├── login
        │   │   ├── index.js
        │   │   └── login.js
        │   └── transfers
        │       ├── create.js
        │       └── index.js
        ├── functions
        │   ├── index.js
        │   ├── protectAccountData.js
        │   ├── protectCpf.js
        │   ├── protectDepositData.js
        │   ├── protectTransferData.js
        │   ├── setToTwoDecimalPlaces.js
        │   ├── stringInNumber.js
        │   └── updateAccountValue.js
        ├── magicNumbers
        │   └── index.js
        ├── strings
        │   └── index.js
        └── validations
            ├── cpfVerify.js
            ├── fullNameVerify.js
            ├── index.js
            ├── passwordVerify.js
            └── valueVerify.js

```

---

# Pré-requisitos

## Ferramentas necessárias

Para rodar o projeto, você vai precisar instalar as seguintes ferramentas:
 - [Git](https://git-scm.com);
 - [Node.js](https://nodejs.org/en/);
 - Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou outro de sua preferência;
 - Um cliente de API REST como [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou outro de sua preferência;

## Rodando no servidor local

 - Clone do Projeto e instale as dependências

    ```bash
    # Clone este repositório
    $ git clone `https://github.com/WanderDinizVeloso/my-bank-API.git`

    # Acesse a pasta do projeto no terminal/cmd
    $ cd my-bank-API

    # Instale as dependências
    $ npm install
    ```
 - Crie um arquivo chamado `.env` na raiz do projeto com as seguintes configurações:
    
    ### .env

    - PORT: Porta que rodará localmente o projeto (ex. 3000);
    - DB_NAME: nome desejado para seu banco local
    - URL: URL do banco MongoDB (ex. mongodb://localhost:27017)
    - SECRET: Segredo utilizado na autenticação.
    - EXPIRES_IN: tempo de duração dos tokens gerados. (ex. `1d`)
    - ALGORITHM: algoritmo de criptografia do token. (ex. `HS256`)
    - BCRYPT_SALT_ROUNDS: utilizado para proteção do password. (ex. 8)

  >⚠️ ATENÇÃO ⚠️
  > - Para mais detalhes sobre SECRET, EXPIRES_IN e ALGORITHM vide: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)


 - Inicie o sistema:

    ```bash
    # Inicie o sistema
    $ npm start
    ou
    $ npm run dev # para ambiente de desenvolvimento
    ```

 - Faça as requisições pelo [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou outro de sua preferência;

## Quer contribuir com o projeto?

  - Crie uma branch e faça sua contribuição:

    ```bash
    # Crie uma branch a partir da branch main
    $ git checkout -b nome-da-nova-branch

    # Adicione as mudanças desejadas com os devidos commits
    $ git add . # adiciona as mudanças ao stage do Git
    $ git commit -m 'informação do conteúdo do commit' # salvando as alterações de cada pequena alteração em um commit
    $ git push -u origin nome-da-nova-branch # adiciona a nova branch no repositório remoto do Projeto
    ```
  - Crie um novo `Pull Request` (PR):
     - Vá até a página de `Pull Requests` do repositório no GitHub
     - Clique no botão verde `"New pull request"`
     - Clique na caixa de seleção `"Compare"` e escolha a sua branch com atenção
     - Clique no botão verde `"Create pull request"`
     - Adicione uma descrição para o Pull Request
     - Clique no botão verde `"Create pull request"`
     - Me marque para revisar. `:)` [Wander](https://github.com/WanderDinizVeloso)

// Fonte utilizada na criação do `Pré-requisitos`: [Trybe](https://www.betrybe.com)

---