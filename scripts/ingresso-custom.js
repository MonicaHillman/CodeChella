const ingressoDescricao = document.querySelector('.ingresso__descricao');

// pega os valores armazenados no localStorage
const name = localStorage.getItem('name');
const ticketType = localStorage.getItem('ticketType');
const birthdate = localStorage.getItem('birthdate');

// cria o conteúdo dinâmico do elemento .ingresso__informacoes
const descricaoHtml = `
  <h3>${name}</h3>
  <p>Ingresso ${ticketType}</p>
  <p>Data: 11/03</p>
  <p>Local: São Paulo-SP</p>
`;

// insere o conteúdo dinâmico no elemento .ingresso__informacoes
ingressoDescricao.querySelector('.ingresso__informacoes').innerHTML = descricaoHtml;