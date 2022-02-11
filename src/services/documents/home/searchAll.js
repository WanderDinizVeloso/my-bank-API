module.exports = () => {
  const home = {
    nomeDoProjeto: 'my-bank-API',
    descrição: 'Projeto criado visando colocar em prática os conhecimentos adquiridos em Back-end, onde crio uma API REST para cadastro/leitura de contas, depósitos e transferências entre contas',
    autor: 'Wander Diniz Veloso',
    repositórioDoGitHub: 'https://github.com/wanderdinizveloso/my-bank-API',
    rotas: {
      accounts: {
        create: {
          descrição: 'Responsável pela criação de contas dos usuários.',
          método: 'POST',
          rota: '/accounts',
        },
        searchById: {
          descrição: 'Responsável pela leitura dos dados da conta do usuário.',
          método: 'GET',
          rota: '/accounts',
        }, 
      },
      deposits: {
        create: {
          descrição: 'Responsável por efetuar a entrada de valores, podendo qualquer usuário, cadastrado ou não efetuar o deposito em uma conta desejada.',
          método: 'POST',
          rota: '/deposits',
        },
      },
      transfers: {
        create: {
          descrição: 'Responsável por criar as transferências de valores entre contas dos usuários.',
          método: 'POST',
          rota: '/transfers',
        },
      },
    },
  };

  return home;
};
