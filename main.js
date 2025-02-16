const forms = document.getElementById('formId');

forms.addEventListener('submit', function(e){
    e.preventDefault();

    const nomePersonagem = document.getElementById('inputId').value;

    if(nomePersonagem.trim() == ""){
        alert('Você esqueceu de digitar o nome?');
        return;
    }

    const apiUrl = 'https://rickandmortyapi.com/api/character';

    fetch(`${apiUrl}/?name=${nomePersonagem}`)
    .then(function(response){
        if (!response.ok){
            alert('Erro');
            return;
        }
        return response.json();
    })
    .then(function(response){
        const personagem = response.results[0];
        console.log(personagem);
        
        const div = document.getElementById('personagemEscolhido');

        div.innerHTML =

        `
            <div class="card">
            <h2> ${personagem.name} </h2>
            <img src="${personagem.image}" alt="${personagem.name}">
            <p> ${personagem.species} - ${personagem.status} </p>
            <p> Origem: ${personagem.origin.name}</p>
            </div>
        `;
    })  
    
    const input = document.getElementById('inputId');
    input.value = '';
            
});
