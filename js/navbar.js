document.addEventListener('DOMContentLoaded', ()=>{
    const navBar = document.querySelector('nav')
    navBar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#index" id="index-link">PROJETO WEB</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 150px;">
                    <li class="nav-item">
                        <a class="nav-link" href="#index" id="index-link">Cadastrar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#consulta" id="consulta-link">Consultar</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
    
})

