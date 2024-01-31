export default function biblioteca() {
    return (
        <>
            <section
                className="bg-dark"
                style={{
                    paddingTop: 100,
                }}
            >
                <div className="py-3 row">
                    <div className="col-md-6 offset-md-3">
                        <div className="input-group mb-3">
                            <a
                                className="btn text-light bg-black text-center icone-centralizado"
                                id="button-addon2"
                            >
                                <i className="bi bi-search"></i>
                            </a>
                            <input
                                type="text"
                                className="form-control form-control-lg text-light bg-black border-0 placeholder-branco"
                                placeholder="Busque por um título"
                                aria-label="Busque por um título"
                                aria-describedby="button-addon2"
                            />
                        </div>
                        <div className="btn-group gap-1">
                            <div className="btn-group">
                                <button
                                    className="btn btn-dark dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Autores
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Jose Carlos Morais
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Christopher Reeve
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Dick Hoyt e Don Yaeger
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Katia Yuriko
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Lars Grael
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Richard Galli
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Marcelo Rubens Paiva
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Sergio Nardini
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-group">
                                <button
                                    className="btn btn-dark dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categoria
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Livro
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            Video
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-dark dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Nota
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark border">
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star" />
                                            <i className="bi bi-star" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star" />
                                            <i className="bi bi-star" />
                                            <i className="bi bi-star" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-light"
                                            href="#"
                                        >
                                            <i className="bi bi-star-fill text-warning" />
                                            <i className="bi bi-star" />
                                            <i className="bi bi-star" />
                                            <i className="bi bi-star" />
                                            <i className="bi bi-star" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid bg-black py-5">
                <section className="container pb-5">
                    <div className=" row row-cols-1 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card h-100 bg-dark">
                                <iframe
                                    src="https://www.youtube.com/embed/-bgA4r-Qnbg?si=QYoEf5kNMOTanTrM"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                                <div className="card-body">
                                    <h6 className="card-title text-light">
                                        Inclusão e acessibilidade: Flavio Arruda
                                        at TEDxFortaleza
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark">
                                <iframe
                                    src="https://www.youtube.com/embed/XjHBzDGrrlE?si=6_L5Cq-DHEJnZyC2"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                                <div className="card-body">
                                    <h6 className="card-title text-light">
                                        Especial acessibilidade: Inclusão no
                                        mercado de trabalho.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark">
                                <iframe
                                    src="https://www.youtube.com/embed/CI_uIB8Uv6U?si=SM4wld7K9BkHGw8h"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                                <div className="card-body">
                                    <h6 className="card-title text-light">
                                        Inclusão de Pessoas com Deficiência no
                                        mercado de trabalho
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark">
                                <iframe
                                    src="https://www.youtube.com/embed/zNLg26tL-xE?si=cPpS_3VC3PnUlmhO"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                                <div className="card-body">
                                    <h6 className="card-title text-light">
                                        A Inclusão do Deficiente no Mercado de
                                        Trabalho | Ana Silvia Marcatto Begalli
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="card-group container">
                    <div className="row row-cols-1 row-cols-md-4 g-3 text-center">
                        <div className="col">
                            <div className="card h-100 bg-dark shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/roda viva.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className="card-body">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <h6 className="card-title text-light">
                                        Roda Viva: Memórias de um cadeirante
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-light">
                                            Por Jose Carlos Morais
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/ainda sou eu. memorias.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className="card-body">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <h6 className="card-title text-light">
                                        Ainda sou eu. Memórias
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-light">
                                            Por Christopher Reeve
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/devoção.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className="card-body">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <h6 className="card-title text-light">
                                        Devoção
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-light">
                                            Por Dick Hoyt e Don Yaeger
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/do outro loda do sol.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className="card-body">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <h6 className="card-title text-light">
                                        Do outro lado do sol
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-light">
                                            Por Katia Yuriko
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/saga de campeão.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className=" card-body">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <h6 className="card-title text-light">
                                        A saga de um campeão
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-light">
                                            Por Lars Grael
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/salvando meu filho.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className=" card-body">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star" />
                                    <h6 className="card-title text-light">
                                        Salvando meu filho
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-light">
                                            Por Richard Galli
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/feliz ano velho.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className=" card-body">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star" />
                                    <h6 className="card-title text-light">
                                        Feliz ano velho
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-light">
                                            Por Marcelo Rubens Paiva
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 bg-dark shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/pai de rodinhas.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className=" card-body">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <h6 className="card-title text-light">
                                        Pai de rodinhas
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-light">
                                            Por Sergio Nardini
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation ">
                    <ul className="pagination justify-content-end mt-4 container">
                        <li className="page-item">
                            <a
                                className="page-link bg-dark text-light"
                                href="#"
                                aria-label="Previous"
                            >
                                {" "}
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-dark text-light"
                                href="#"
                            >
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-dark text-light"
                                href="#"
                            >
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-dark text-light"
                                href="#"
                            >
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link bg-dark text-light"
                                href="#"
                                aria-label="Next"
                            >
                                {" "}
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
}
