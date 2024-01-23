export default function biblioteca() {
    return (
        <>
            <section
                className="container-fluid bg-info"
                style={{ paddingTop: 110 }}
            >
                <div className="container py-3">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por titulo"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-warning"
                            type="button"
                            id="button-addon2"
                        >
                            <i className="bi bi-search" />
                        </button>
                    </div>
                    <div className="btn-group gap-1">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle btn-sm"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Autor(a)
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Jose Carlos Morais
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Christopher Reeve
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Dick Hoyt e Don Yaeger
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Katia Yuriko
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Lars Grael
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Richard Galli
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Marcelo Rubens Paiva
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Sergio Nardini
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle btn-sm"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categoria
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Livro
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Video
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle btn-sm"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Nota
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-star-fill" />
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
            </section>
            <section className="container-fluid bg-body-tertiary py-5">
                <section className="container pb-5">
                    <div className=" row row-cols-1 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card h-100">
                                <iframe
                                    src="https://www.youtube.com/embed/-bgA4r-Qnbg?si=QYoEf5kNMOTanTrM"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                                <div className="card-body">
                                    <h6 className="card-title">
                                        Inclusão e acessibilidade: Flavio Arruda
                                        at TEDxFortaleza
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <iframe
                                    src="https://www.youtube.com/embed/XjHBzDGrrlE?si=6_L5Cq-DHEJnZyC2"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                                <div className="card-body">
                                    <h6 className="card-title">
                                        Especial acessibilidade: Inclusão no
                                        mercado de trabalho.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <iframe
                                    src="https://www.youtube.com/embed/CI_uIB8Uv6U?si=SM4wld7K9BkHGw8h"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                                <div className="card-body">
                                    <h6 className="card-title">
                                        Inclusão de Pessoas com Deficiência no
                                        mercado de trabalho
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <iframe
                                    src="https://www.youtube.com/embed/zNLg26tL-xE?si=cPpS_3VC3PnUlmhO"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                                <div className="card-body">
                                    <h6 className="card-title">
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
                            <div className="card h-100 shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/roda viva.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className="card-body">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <h6 className="card-title">
                                        Roda Viva: Memórias de um cadeirante
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            Por Jose Carlos Morais
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/ainda sou eu. memorias.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className="card-body">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <h6 className="card-title">
                                        Ainda sou eu. Memórias
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            Por Christopher Reeve
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/devoção.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className="card-body">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <h6 className="card-title">Devoção</h6>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            Por Dick Hoyt e Don Yaeger
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/do outro loda do sol.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className="card-body">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <h6 className="card-title">
                                        Do outro lado do sol
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            Por Katia Yuriko
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/saga de campeão.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className=" card-body">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <h6 className="card-title">
                                        A saga de um campeão
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            Por Lars Grael
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/salvando meu filho.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className=" card-body">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                    <h6 className="card-title">
                                        Salvando meu filho
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            Por Richard Galli
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/feliz ano velho.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className=" card-body">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                    <h6 className="card-title">
                                        Feliz ano velho
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            Por Marcelo Rubens Paiva
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow align-items-center pt-3">
                                <img
                                    src="/img/img-livros/pai de rodinhas.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    style={{ maxHeight: 220, maxWidth: 120 }}
                                />
                                <div className=" card-body">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <h6 className="card-title">
                                        Pai de rodinhas
                                    </h6>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            Por Sergio Nardini
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end mt-4">
                        <li className="page-item">
                            <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                            >
                                {" "}
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
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
