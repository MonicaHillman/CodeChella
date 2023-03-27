const formulario = document.querySelector('.formulario-ingresso');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // previne o comportamento padrão do form

    // pega os valores dos campos
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const ticketType = document.querySelector('#ticket-type').value;
    const birthdate = document.querySelector('#birthdate').value;

    // armazena os valores no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('ticketType', ticketType);

    // redireciona para a página de ingresso
    window.location.href = '/pages/ingresso-custom.html';
});