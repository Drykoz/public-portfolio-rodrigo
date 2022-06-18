document.querySelector('#t1').textContent = 'JavaScript - Introdução';
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades no JS';

function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert('Olá ${nome}! Seja bem-vindo!');
    document.getElementById('formulariologin').style.display = 'none';

}
