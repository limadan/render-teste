function getData() {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').textContent = `Dados do Backend:
    ${data.message}`;
        })
        .catch(error => console.error('Erro ao obter dados:', error));
}