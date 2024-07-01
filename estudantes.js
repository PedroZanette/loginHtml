document.getElementById('editStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //function gravarEstudante() {
    
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('password').value;
    const messageElement = document.getElementById('messageEst');

    //axios.post('http://localhost:8010/biblioteca/estudante/login', {
    axios.post('http://localhost:8010/biblioteca/estudante', {
        nome: nome,
        matricula: matricula,
        email: email,
        telefone: telefone,
        senha: senha
    })
    .then(function (response) {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Estudante salvo com sucesso!';
        document.getElementById('but-clear-form-estudante').click();
        console.log("Resposta cadastro estudante: " + response.data);
        setTimeout(function() {
            messageElement.textContent = '';
          }, 3000);
    })
    .catch(function (error) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Erro ao salvar estudante.';
        console.error(error);
    });
});

document.getElementById("estudantebar").addEventListener('click', function() {
    axios.get('http://localhost:8010/biblioteca/estudante/pag/1')
        .then(function (response) {
            const students = response.data;
            const tbody = document.querySelector('#studentsTable tbody');
            students.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.nome}</td>
                    <td>${student.matricula}</td>
                    <td>${student.email}</td>
                    <td>${student.telefone}</td>
                `;
                tbody.appendChild(row);

            });
        })
        .catch(function (error) {
            console.error('Erro ao carregar a lista de estudantes:', error);
        });
});