let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/distritos';

//Requisição JSON
$.getJSON(url, function(data) {
    let conteudo = '<ul>';
    $.each(data, function(v, val) {
        conteudo += '<li>' + val.nome + '</li>';
    });
    conteudo += '</ul>';

    $("#listaM").html(conteudo);
});