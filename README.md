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
  - [Rodando no servidor heroku e Atlas](#rodando-no-servidor-heroku-e-Atlas)
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

## Rodando no servidor heroku e Atlas

  Não quer rodar localmente? Você pode acessar o projeto hospedado no heroku!`:)`

  O deploy da API foi hospedada no heroku e o banco mongoDB hospedado no Atlas.

  - link: [https://my-bank-deploy.herokuapp.com](https://my-bank-deploy.herokuapp.com)

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

# Orientações detalhadas de como utilizar

## accounts

 - Descrição: Responsável pela criação e leitura das contas de usuários da API. 

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchId` é necessário efetuar login pelo /login
>
>    Vide: [authentication](#authentication).
     
### accounts create
<img src="https://img.shields.io/static/v1?label=Metodo&message=POST&color=4DC31A&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/accounts'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=NAO&color=119CE1&style=flat-square&logo="/>

- Descrição: Responsável pela criação de contas dos usuários.

- Body:

    ```json
    {
      "fullName": " ",
	    "cpf": " ",
	    "password": " "
    }
    ```

- Retorno:

    ```json
    {
      "message": "'account' created successfully.",
      "createdAccount": {
        "_id": " ",
        "fullName": " ",
        "cpf": " ",
        "value": " "
      }
    }
    ```
    >⚠️ ATENÇÃO ⚠️
    > - Os campos `"_id"` e `"value"` são gerados automaticamente pelo sistema;
    >
    > - No retorno, para proteção dos dados, o campo cpf será mascarado com `*`.
    > Exemplo: cpf: `***.000.000-**`.
 
- Campos obrigatórios:

  - `fullName`:

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser uma string`;
      - `Deve conter no mínimo 6 caracteres`;

    - Erro retornado:

    ```json
    {
      "error": {
      "message": "The fullName must meet the following requirements:"
        "- Is required;"
        "- Must be a string;"
        "- Must contain at least 6 characters."
      }
    }
    ```

  - `cpf`:

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser uma string`;
      - `Deve conter o formato xx.xxx.xxx-xx.`;

    - Erro retornado:

    ```json
    {
      "error": {
      "message": "The cpf must meet the following requirements:"
        "- Is required;"
        "- Must be a string;"
        "- Must contain the format xx.xxx.xxx-xx."
      }
    }
    ```

  - `password`:

  >⚠️ ATENÇÃO ⚠️
  > - Visando maior segurança as senhas:
  > - São encriptadas antes de armazenadas no banco de dados, através do [bcrypt](https://www.npmjs.com/package/bcrypt);
  > - Não são retornadas em no `create` e `searchId`.

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser uma string`;
      - `Deve conter no mínimo 10 caracteres`;
      - `Deve conter ao menos uma letra maiúscula, um número e um caractere especial (!, $, #, %, _).`.

    - Erro retornado:

    ```json
    {
      "error": {
      "message": "The password must meet the following requirements:"
        "- Is required"
        "- Must be a string;"
        "- Must contain at least 10 characters;"
        "- must contain at least a capital letter, a number and a special character (!, $, #, %, _)."
      }
    }
    ```

### accounts searchById
<img src="https://img.shields.io/static/v1?label=Metodo&message=GET&color=9002FF&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/accounts'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela leitura dos dados da conta do usuário. 

- Retorno:

    ```json
    {
      "account": {
        "_id": " ",
        "fullName": " ",
        "cpf": " ",
        "value": " "
      }
    }
    ```
    >⚠️ ATENÇÃO ⚠️
    > - Para a execução de `searchId` é necessário efetuar login pelo /login>
    > Vide: [authentication](#authentication).
    >
    > - Visando maior segurança, o id é acessado através do token encaminhado no authentication, não sendo assim possível o acesso dos dados por outro usuário.
    > - No retorno, para proteção dos dados, o campo cpf será mascarado com `*`.
    > Exemplo: cpf: `***.000.000-**`.

## login
<img src="https://img.shields.io/static/v1?label=Metodo&message=POST&color=4DC31A&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/login'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=NAO&color=119CE1&style=flat-square&logo="/>

- Descrição: Responsável por dar autorização para acesso ao sistema pelo usuário da conta. 

- body:

    ```json
    {
      "cpf": " ",
      "password": " ",
    }
    ```

- Retorno:

    ```json
    {
      "token": " "
    }
    ```

- Campos obrigatórios:

  - `cpf`:

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser uma string`;
      - `Deve conter o formato xx.xxx.xxx-xx.`;    

  - `password`:

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser uma string`;
      - `Deve conter no mínimo 10 caracteres`;
      - `Deve conter ao menos uma letra maiúscula, um número e um caractere especial (!, $, #, %, _).`.

  - Erro retornado ao desobedecer os requisitos de cpf ou password:

    ```json
    {
      "error": {
        "message": "The invalid 'cpf or password' field."
      }
    }
    ```


## deposits

 - Descrição: Responsável por efetuar a entrada de valores nas contas de usuários da API. 
     
### deposits create
<img src="https://img.shields.io/static/v1?label=Metodo&message=POST&color=4DC31A&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/deposits'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=NAO&color=119CE1&style=flat-square&logo="/>

- Descrição: Responsável por efetuar a entrada de valores, podendo qualquer usuário, cadastrado ou não efetuar o deposito em uma conta desejada.

- Body:

    ```json
    {
      "destinationCpf": " ",
	    "value": 00.00
    }
    ```

- Retorno:

    ```json
    {
      "message": "'deposit' created successfully.",
      "createdDeposit": {
        "_id": " ",
        "destination": {
          "_id": " ",
          "fullName": " ",
          "cpf": " "
        },
      "value": " ",
      "date": " "
      }
    }
    ```
    >⚠️ ATENÇÃO ⚠️
    > - Os campos `"_id"` e `"date"` são gerados automaticamente pelo sistema;
    >
    > - No retorno, para proteção dos dados, o campo cpf será mascarado com `*`.
    > Exemplo: cpf: `***.000.000-**`.
 
- Campos obrigatórios:

  - `destinationCpf`:

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser uma string`;
      - `Deve conter o formato xx.xxx.xxx-xx.`;

    - Erro retornado:

    ```json
    {
      "error": {
      "message": "The destinationCpf must meet the following requirements:"
        "- Is required;"
        "- Must be a string;"
        "- Must contain the format xx.xxx.xxx-xx."
      }
    }
    ```

      - `Deve existir uma conta que contenha o cpf correspondente ao destinationCpf`;
      
    - Erro retornado:

    ```json
    {
      "error": {
        "message": "'account' not found."
      }
    }
    ```

  - `value`:

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser um número positivo`;
      - `Para maior segurança, cada depósito está limitado ao valor de 2000.00`;

    - Erro retornado:

    ```json
    {
      "error": {
        "message": "The value must meet the following requirements:"
          "- Is required;"
          "- Must be a positive number;"
          "- Is Limited to 2000 per transaction"
      }
    }
    ```

## transfers

 - Descrição: Responsável por efetuar transferência de valores entre contas dos usuários. 
     
### transfers create
<img src="https://img.shields.io/static/v1?label=Metodo&message=POST&color=4DC31A&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/transfers'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável por criar as transferências de valores entre contas dos usuários.

- Body:

    ```json
    {
      "destinationCpf": " ",
	    "value": 00.00
    }
    ```

- Retorno:

    ```json
    {
      "message": "'transfer' created successfully.",
      "createdTransfer": {
        "_id": " ",
        "origin": {
          "_id": " ",
          "fullName": " ",
          "cpf": " "
        },
        "destination": {
          "_id": " ",
          "fullName": " ",
          "cpf": " "
        },
        "value": " ",
        "date": " "
      }
    }
    ```
    >⚠️ ATENÇÃO ⚠️
    > - Os campos `"_id"` e `"date"` são gerados automaticamente pelo sistema;
    >
    > - No retorno, para proteção dos dados, o campo cpf será mascarado com `*`.
    > Exemplo: cpf: `***.000.000-**`.
    >
    > - Para efetuar a transferência é necessário estar logado.
    >   Vide: [authentication](#authentication)
 
- Campos obrigatórios:

  - `destinationCpf`:

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser uma string`;
      - `Deve conter o formato xx.xxx.xxx-xx.`;

    - Erro retornado:

    ```json
    {
      "error": {
      "message": "The destinationCpf must meet the following requirements:"
        "- Is required;"
        "- Must be a string;"
        "- Must contain the format xx.xxx.xxx-xx."
      }
    }
    ```

      - `Deve existir uma conta que contenha o cpf correspondente ao destinationCpf`;
      
    - Erro retornado:

    ```json
    {
      "error": {
        "message": "'account' not found."
      }
    }
    ```

  - `value`:

    - Requisitos do campo:

      - `Obrigatório`;
      - `Deve ser um número positivo`;
      - `Para maior segurança, cada transferência está limitado ao valor de 2000.00`;

    - Erro retornado:

    ```json
    {
      "error": {
        "message": "The value must meet the following requirements:"
          "- Is required;"
          "- Must be a positive number;"
          "- Is Limited to 2000 per transaction"
      }
    }
    ```

---

## authentication

 - Para efetuar a autenticação, é necessário seguir os seguintes passos:
    - Criar uma conta. Vide [acconts create](#accounts-create);
    - Efetuar o login com dos dados do usuário criado. Em caso de sucesso você receberá um `token`. Vide [login](#login);
    - Incluir no Header, o campo `authorization` (exatamente assim, tudo com letras minúsculas) o `token` recebido ao efetuar o login. 
  
  >⚠️ ATENÇÃO ⚠️
  > - Em todas as requisições que contenha <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> será necessário a inclusão do token.

---

# Contribuição

Bora entrar para esta lista? `;)` [AQUI](#pré-requisitos) 

---

# Agradecimentos

Agradeço:
 - À minha família por me apoiar nos estudos em minha transição de carreira;
 - À [Trybe](https://www.betrybe.com) por me dar a oportunidade de aprender uma nova carreira, com seu Curso de Desenvolvimento WEB Full-Stack, na modalidade [MSC](https://www.betrybe.com/msc-modelo-de-sucesso-compartilhado#investimento-como-functiona-mobile-section).
 - Toda a equipe Trybe, em especial:
    - [Jadezita](https://www.linkedin.com/in/jade--vieira/) e [Rê](https://www.linkedin.com/in/renata-nazar%C3%A9-magalh%C3%A3es/), pelo carinho e apoio em [softs skills](https://www.youtube.com/watch?v=yA3sc5mnctg&t=1s);
    - [Pedro](https://www.linkedin.com/in/phramos07/), [Nato](https://www.linkedin.com/in/renato-alvares/), [Ricci](https://www.linkedin.com/in/henriquericci/) e [Rafa Guimarães](https://www.linkedin.com/in/rafaelmguimaraes/), pelo belíssimo apoio e ensinamentos em back-end;
    - [Daniel](https://www.linkedin.com/in/marciodanielll/) e [Rafa Medeiros](https://www.linkedin.com/in/rafael-medeiros-gomes/), monitores Summer de Instrução, pelo apoio, principalmente na introdução de novos conteúdos.     

---

# Autor

 <img src="https://avatars.githubusercontent.com/u/82230642?v=4" width="100px;" alt="minha foto"/>
 <br />
  Wander Diniz Veloso
<br />
  Estudante de Desenvolvimento WEB e a cada dia mais apaixonado por tecnologia!

Entre em contato!

<section align="center"> 
  <a href="https://www.linkedin.com/in/wander-diniz-veloso" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</section>

---