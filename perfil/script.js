document.addEventListener('DOMContentLoaded', function() {
    const inicioLink = document.getElementById('inicioLink');
    
    if (inicioLink) {
        inicioLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = 'http://127.0.0.1:5500/Clientes/In%C3%ADcio/index.html'; // Redirect to the dashboard page
        });
    }
});

 // Função para logout (a lógica de logout pode ser ajustada conforme necessário)
 document.getElementById('logoutBtn').addEventListener('click', function() {
    // Aqui você pode adicionar a lógica para logout, como limpar dados de sessão, redirecionar para a página de login, etc.
    alert('Logout efetuado com sucesso.');
    window.location.href = 'http://127.0.0.1:5500/Clientes/Login/index.html'; // Altere para o caminho correto do arquivo de login
});