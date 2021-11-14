var scriptUrl = "https://script.google.com/macros/s/AKfycbxWiuIzFaNCNyd631mVy_OxTH39DPDYBZoEe_CAUbLqsiYuIEoxx565uAJu9nznqbsa/exec"
var form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(form)
        }).then(response => document.getElementById('form_alert').innerHTML = "Data was stored")
        .catch(error => document.getElementById('form_alert').innerHTML = "Data was not stored")
})