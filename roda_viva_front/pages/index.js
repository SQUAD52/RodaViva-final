/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Roda Viva</title>
                <meta name="description" content="Projeto Roda Viva" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                <section className="container mb-5" style={{ paddingTop: 100 }}>
                    <div className="container">
                        <h1
                            className="fs-1 fw-bold"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #ffc107 0%, #00d4ff 100%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Encontre novas oportunidades
                        </h1>
                        <h2 className="fw-bold">para sua carreira</h2>
                        <p className="mt-3">
                            Aqui você pode encontrar os melhores talentos,
                            contribua com diversidade e competitividade no
                            mercado de trabalho.
                        </p>
                    </div>
                    <div className="btn-group gap-1 flex-wrap mt-5">
                        <a href="/talento/create-talento">
                            <button
                                type="button"
                                className="btn btn-light border-black"
                            >
                                Cadastre-se como talento
                            </button>
                        </a>
                        <a href="/talentos">
                            <button type="button" className="btn btn-warning">
                                Contratar talento
                            </button>
                        </a>
                    </div>
                </section>
                <section className="container mb-5">
                    <div className="card-group gap-2">
                        <div className="card border-0">
                            <div className="card-body">
                                <h4 className="text-center">
                                    Equipes remotas sob medida
                                </h4>
                                <p className="card-text">
                                    Profissionais de TI especialistas são
                                    recrutados e apresentados em menos tempo
                                    pelas empresas para se juntarem à área de
                                    sistemas de informação.
                                </p>
                            </div>
                        </div>
                        <div className="card border-0">
                            <div className="card-body">
                                <h4 className="text-center">
                                    Talentos qualificados
                                </h4>
                                <p className="card-text">
                                    Profissionais independentes se integraram a
                                    diversas equipes para colaborar em projetos
                                    a longo prazo, permitindo que o negócio
                                    ganhe escala.
                                </p>
                            </div>
                        </div>
                        <div className="card border-0">
                            <div className="card-body">
                                <h4 className="text-center">
                                    Variedade de habilidades
                                </h4>
                                <p className="card-text">
                                    Encontra-se o aliado estratégico para
                                    incorporar talentos super especializados à
                                    sua empresa, com perfis específicos por área
                                    e localidade.
                                </p>
                            </div>
                        </div>
                        <div className="card border-0">
                            <div className="card-body">
                                <h4 className="text-center">
                                    Escalabilidade e agilidade
                                </h4>
                                <p className="card-text">
                                    Os melhores talentos independentes trabalham
                                    em parceria com as equipes de diversas áreas
                                    diferentes em todos os níveis: de junior a
                                    senior.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid bg-black py-5 mb-5">
                    <h3 className="text-light text-center mb-5">
                        Descubra especialista com as habilidades que você
                        precisa
                    </h3>
                    <div className="row">
                        <img
                            src="./img/img.jpg"
                            className="img-fluid rounded-start col-lg-6"
                            alt="mulher estudando"
                        />
                        <div className="card-body col-lg-4">
                            <h5 className="card-title text-light my-4">TI</h5>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                Programação
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                Wordpress
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                Programação de Apps para Android, IOS e outros
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                E-commerce
                            </button>
                            <h5 className="card-title text-light my-4">
                                Design
                            </h5>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                Design de logo
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                Web-design
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                UX-design
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                Ilustrações
                            </button>
                            <h5 className="card-title text-light my-4">
                                Marketing
                            </h5>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                Publicidade no Google, Facebok
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                SEO
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fs-sm m-1 p-2"
                            >
                                Community Managenment
                            </button>
                        </div>
                    </div>
                </section>
                <section className="container py-5">
                    <h3 className="mb-5 text-center">Estatisticas Roda Viva</h3>
                    <div className="card-group text-center">
                        <div className="card mb-3 border-0">
                            <div className="card-body">
                                <h2 className="card-title">150</h2>
                                <p className="card-text">Vagas abertas</p>
                            </div>
                        </div>
                        <div className="card mb-3 border-0">
                            <div className="card-body">
                                <h2 className="card-title">250</h2>
                                <p className="card-text">
                                    Candidatos contratados
                                </p>
                            </div>
                        </div>
                        <div className="card mb-3 border-0">
                            <div className="card-body">
                                <h2 className="card-title">50</h2>
                                <p className="card-text">
                                    Empresas participantes
                                </p>
                            </div>
                        </div>
                        <div className="card mb-3 border-0">
                            <div className="card-body">
                                <h2 className="card-title">550</h2>
                                <p className="card-text">Candidatos</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container pb-5">
                    <h3 className="text-center mb-5">Ultimas vagas enviadas</h3>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <img
                                    src="./img/google.png"
                                    alt="google logo"
                                    className="img-fluid"
                                    style={{ maxWidth: "3rem" }}
                                />
                            </div>
                            <div className="col">
                                <p className="fs-5 lh-1">Developer</p>
                                <p>
                                    <b>Google</b>
                                </p>
                            </div>
                            <div className="col">
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ height: 25 }}
                                >
                                    <div
                                        className="progress-bar bg-primary"
                                        style={{ width: "100%" }}
                                    >
                                        CLT
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img
                                    src="./img/ibm.png"
                                    alt="ibm logo"
                                    className="img-fluid"
                                    style={{ maxWidth: "3rem" }}
                                />
                            </div>
                            <div className="col">
                                <p className="fs-5 lh-1">DBA</p>
                                <p>
                                    <b>IBM</b>
                                </p>
                            </div>
                            <div className="col">
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ height: 25 }}
                                >
                                    <div
                                        className="progress-bar bg-success"
                                        style={{ width: "100%" }}
                                    >
                                        PJ
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img
                                    src="./img/linkedin.png"
                                    alt="linkedin logo"
                                    className="img-fluid"
                                    style={{ maxWidth: "3rem" }}
                                />
                            </div>
                            <div className="col">
                                <p className="fs-5 lh-1">Front End Developer</p>
                                <p>
                                    <b>LinkedIn</b>
                                </p>
                            </div>
                            <div className="col">
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ height: 25 }}
                                >
                                    <div
                                        className="progress-bar bg-danger"
                                        style={{ width: "100%" }}
                                    >
                                        HOME OFFICE
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img
                                    src="./img/facebook.png"
                                    alt="facebook logo"
                                    className="img-fluid"
                                    style={{ maxWidth: "3rem" }}
                                />
                            </div>
                            <div className="col">
                                <p className="fs-5 lh-1">
                                    Full Stack Developer
                                </p>
                                <p>
                                    <b>Facebook</b>
                                </p>
                            </div>
                            <div className="col">
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ height: 25 }}
                                >
                                    <div
                                        className="progress-bar bg-success"
                                        style={{ width: "100%" }}
                                    >
                                        PJ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mb-5">
                    <h3 className="text-center mb-5">
                        Alguns depoimentos sobre a experiência
                    </h3>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card  align-items-center pt-3 pb-1 bg-body-tertiary shadow ">
                                <div className="container-fluid d-inline-flex gap-2 align-items-center">
                                    <img
                                        src="./img/img-homem (2).jpg"
                                        className="card-img-top rounded-circle"
                                        alt="..."
                                        style={{ width: "20%" }}
                                    />
                                    <p className="card-text lh-2">
                                        <small className="text-body-secondary">
                                            <strong className="text-black">
                                                João
                                            </strong>
                                            <br />
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                                <div className="card-body text-center">
                                    <p className="card-text">
                                        <i className="bi bi-quote" />
                                        <em>
                                            Foi ótima a minha esperiência com a
                                            plataforma. Conteúdo didático e
                                            ótimas oportunidades de carreira.
                                        </em>
                                        <i className="bi bi-quote" />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  align-items-center pt-3 pb-1 bg-body-tertiary shadow ">
                                <div className="container-fluid d-inline-flex gap-2 align-items-center">
                                    <img
                                        src="./img/img-mulher.jpg"
                                        className="card-img-top rounded-circle"
                                        alt="..."
                                        style={{ width: "20%" }}
                                    />
                                    <p className="card-text lh-2">
                                        <small className="text-body-secondary">
                                            <strong className="text-black">
                                                Ana Carolina
                                            </strong>
                                            <br />
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <i className="bi bi-quote" />
                                        <em>
                                            Foi ótima a minha esperiência com a
                                            plataforma. Conteúdo didático e
                                            ótimas oportunidades de carreira.
                                        </em>
                                        <i className="bi bi-quote" />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  align-items-center pt-3 pb-1 bg-body-tertiary shadow ">
                                <div className="container-fluid d-inline-flex gap-2 align-items-center">
                                    <img
                                        src="./img/img-homem.jpg"
                                        className="card-img-top rounded-circle"
                                        alt="..."
                                        style={{ width: "20%" }}
                                    />
                                    <p className="card-text lh-2">
                                        <small className="text-body-secondary">
                                            <strong className="text-black">
                                                Carlos
                                            </strong>
                                            <br />
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <i className="bi bi-quote" />
                                        <em>
                                            Foi ótima a minha esperiência com a
                                            plataforma. Conteúdo didático e
                                            ótimas oportunidades de carreira.
                                        </em>
                                        <i className="bi bi-quote" />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card align-items-center pt-3 pb-1 bg-body-tertiary shadow ">
                                <div className="container-fluid d-inline-flex gap-2 align-items-center">
                                    <img
                                        src="./img/img-mulher (2).jpg"
                                        className="card-img-top rounded-circle"
                                        alt="..."
                                        style={{ width: "20%" }}
                                    />
                                    <p className="card-text lh-2">
                                        <small className="text-body-secondary">
                                            <strong className="text-black">
                                                Maria
                                            </strong>
                                            <br />
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <i className="bi bi-quote" />
                                        <em>
                                            Foi ótima a minha esperiência com a
                                            plataforma. Conteúdo didático e
                                            ótimas oportunidades de carreira.
                                        </em>
                                        <i className="bi bi-quote" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid bg-info-subtle py-4">
                    <div
                        className="container text-center"
                        style={{ paddingBottom: "100px" }}
                    >
                        <div className="row">
                            <div className="col">
                                <p className="fw-bold">Áreas</p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        TI e Programação
                                    </a>
                                </p>
                                <p></p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Design e Multimídia
                                    </a>
                                </p>
                                <p></p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Tradução e conteúdos
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Marketing e Vendas
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Suporte Administrativo
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Finanças e Administração
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Engenharia e Manufatura
                                    </a>
                                </p>
                            </div>
                            <div className="col">
                                <p className="fw-bold">Recursos</p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Central de ajuda
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Como funciona
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Histórias de sucesso dos clientes
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Imprensa
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Empresas
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Tutoriais para clientes
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Mapa do site
                                    </a>
                                </p>
                            </div>
                            <div className="col">
                                <p className="fw-bold">Projetos</p>
                                <div>
                                    <p className="lh-1">
                                        <a
                                            className="text-dark"
                                            style={{ textDecoration: "none" }}
                                            href=""
                                        >
                                            Eventos
                                        </a>
                                    </p>
                                    <p className="lh-1">
                                        <a
                                            className="text-dark"
                                            style={{ textDecoration: "none" }}
                                            href=""
                                        >
                                            Parcerias
                                        </a>
                                    </p>
                                </div>
                                <p className="fw-bold">Quem somos?</p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Sobre nós
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Una-se a Equipe
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Contato
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Política de privacidade
                                    </a>
                                </p>
                                <p className="lh-1">
                                    <a
                                        className="text-dark"
                                        style={{ textDecoration: "none" }}
                                        href=""
                                    >
                                        Termos de serviço
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
