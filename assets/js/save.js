const save = (()=>{
    fetch('http://localhost:4000/api/red/perfil?query=*', {
        method: 'GET'
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

})();