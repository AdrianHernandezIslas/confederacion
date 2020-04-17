const main = (() => {
    const {$form_agremiado} = elementos;
    $form_agremiado.onsubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);

        fetch('http://192.168.1.72/AgremiadoController/registrarAgremiado', {
            method: 'POST',
            body: form
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
        };

})();
