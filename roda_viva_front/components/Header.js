/* eslint-disable @next/next/no-img-element */

function Header() {
    return (
        <>
            {/*Inicio do cabeçalho */}
            <header className="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src="/img/logoRodaVivaSemFundoPeq.png"
                            alt="logotipo espaço roda viva"
                            className="img-responsive"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {/*Inicio do menu*/}
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href={"/"}
                                >
                                    Home
                                </a>
                            </li>
                            <li className=" nav-item">
                                <a className="nav-link" href="/talento">
                                    Talentos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cursos">
                                    Cursos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/biblioteca">
                                    Biblioteca
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contato">
                                    Contato
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/empresas">
                                    Parceiros
                                </a>
                            </li>
                        </ul>
                        {/*Fim do menu */}

                        {/*Inicio login e cadastro */}

                        <a href="/login">
                            <button type="button" className="btn btn btn-dark">
                                Login
                            </button>
                        </a>

                        {/*Fim login e cadastro*/}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
