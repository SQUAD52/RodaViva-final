/* eslint-disable @next/next/no-img-element */

function Header() {
    return (
        <>
            {/*Inicio do cabeçalho */}
            <header class="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img
                            src="/img/logoRodaVivaSemFundoPeq.png"
                            alt="logotipo espaço roda
              viva"
                            class="img-responsive"
                        />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {/*Inicio do menu*/}
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href={"/"}
                                >
                                    Home
                                </a>
                            </li>
                            <li class=" nav-item">
                                <a class="nav-link" href="/talentos">
                                    Talentos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/cursos">
                                    Cursos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/biblioteca">
                                    Biblioteca
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contato">
                                    Contato
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/parceiros">
                                    Parceiros
                                </a>
                            </li>
                        </ul>
                        {/*Fim do menu */}

                        {/*Inicio login e cadastro */}
                        <div>
                            <a href="Cadastro.html">
                                <button
                                    type="button"
                                    class="btn btn-sm btn-dark"
                                >
                                    Login
                                </button>
                            </a>
                            <a href="Cadastro.html">
                                <button
                                    type="button"
                                    class="btn btn-sm btn-light border-black"
                                >
                                    Cadastre-se como talento
                                </button>
                            </a>
                            <a href="/talentos">
                                <button
                                    type="button"
                                    class="btn btn-sm btn-warning my-2"
                                >
                                    Contratar talento
                                </button>
                            </a>
                        </div>
                        {/*Fim login e cadastro*/}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
