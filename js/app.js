document.addEventListener('DOMContentLoaded', ()=>{
function carregaIndex() {
    return `
        <main>    
            <h3>Cadastrar Usuários</h3>       
            <form>
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome: </label>
                    <input type="text" class="form-control" id="nome" name="nome">
                </div>
                
                <div class="mb-3">
                    <label for="email" class="form-label">Email: </label>
                    <input type="email" class="form-control" id="email" name="email">
                </div>
            
                <div class="mb-3">
                    <label for="dataNascimento" class="form-label">Data de Nascimento: </label>
                    <input type="date" class="form-control" id="dataNascimento" name="dataNascimento">
                </div>
                
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </form>
        </main>
    `;
}

function carregaConsulta() {
    return `
        <main>           
            <div class="card-dados">
                <img src="./assets/iconUser.svg" alt="iconUser" class="iconUser">
                <span> Nome: Exemplo</span>
                <span> Email: Exemplo@gmail.com </span>
                <span> Data de Nascimento: 00/00/000</span>
                <hr style="width: 100%; border-bottom: 1px solid #000000; ;">
                <div class="operations">                
                                    
                    <button type="submit" href="#editar" id="editar-link" class="edit">EDITAR</button>

                    <form action="excluir.php?id=' . $user['id'] . '" method="POST">
                        <button>EXCLUIR</button>
                    </form>
                </div>
            </div>     
        </main>
        
    `;
}

function carregaEditar() {
    return `
        <main>   
            <h3>Editar Usuários</h3>        
            <form>
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome: </label>
                    <input type="text" class="form-control" id="nome" name="nome">
                </div>
                
                <div class="mb-3">
                    <label for="email" class="form-label">Email: </label>
                    <input type="email" class="form-control" id="email" name="email">
                </div>
            
                <div class="mb-3">
                    <label for="dataNascimento" class="form-label">Data de Nascimento: </label>
                    <input type="date" class="form-control" id="dataNascimento" name="dataNascimento">
                </div>
                
                <button type="submit" class="btn btn-primary">Editar</button>
            </form>
        </main>
        
    `;
}

function navegar() {
    const divConteudo = document.getElementById('conteudo');
    const hash = window.location.hash;

    if (hash === '#consulta') {
        divConteudo.innerHTML = carregaConsulta();
    } else if (hash === '#editar') {
        divConteudo.innerHTML = carregaEditar();
    } else {
        divConteudo.innerHTML = carregaIndex();
    }

    // Adiciona os eventos de clique após o conteúdo ser carregado
    if (hash === '#consulta') {
        document.getElementById('editar-link').addEventListener('click', () => {
            window.location.hash = '#editar';
            navegar();
        });
    }
}


document.getElementById('index-link').addEventListener('click', () => {
    window.location.hash = '#index';
    navegar();
});

document.getElementById('consulta-link').addEventListener('click', () => {
    window.location.hash = '#consulta';
    navegar();
});

document.getElementById('editar-link').addEventListener('click', () => {
    window.location.hash = '#editar';
    navegar();
});


window.addEventListener('load', navegar);
window.addEventListener('hashchange', navegar);
})