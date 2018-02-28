function formataCPF(cpf) {   
    cpf = cpf.replace(/[^\d]+/g,'');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

function formataCNPJ(cnpj)
{
    cnpj = cnpj.replace(/[^\d]+/g,'');
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
}