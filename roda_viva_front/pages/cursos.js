import React from 'react'

export default function cursos() {
  return (
    <>
  <section className="container-fluid bg-info" style={{ paddingTop: 110 }}>
    <div className="container py-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por titulo"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-warning" type="button" id="button-addon2">
          <i className="bi bi-search" />
        </button>
      </div>
    </div>
  </section>
  <section className="container py-5">
    <div className="row row-cols-1 row-cols-md-4 g-5 text-center">
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/desenvolvimento-web-basico/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/desenvolvimento web.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Desenvolvimento Web</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/analise-de-dados-com-ferramentas-de-business-intelligence/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/power BI.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Power BI</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/metodologias-ativas/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/metodoligias ativas.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Metodologias Ativas</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/powerplatform/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/power plataform.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Power Plataform</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/desenvolvimento-de-games-basico/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/desenvolvimento de games.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Desenvolvimento de Games</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/criando-infra-na-nuvem/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/criar infra na nuvem.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Infra na Nuvem</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/ferramentas-digitais-para-o-mercado-de-trabalho/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/ferramentas digitais.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Ferramentas Digitais</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/gestao-e-empregabilidade/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/gestao e empregabilidade.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Gest�o e Empregabilidade</h6>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a
          className="text-dark"
          href="https://recode.org.br/programacao/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card rounded-3">
            <img
              src="img/img-cursos/programacao.jpeg"
              className="img-fluid"
              alt="thumbnail curso"
            />
            <div className="card-body">
              <h6 className="card-title">Programa��o</h6>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</>

  )
}
