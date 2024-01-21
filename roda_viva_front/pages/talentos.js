function talentos() {
  return (
    <>
      <main className="container-fluid row">
        <aside className=" bg-dark text-light col-sm-3">
          <div className="row text-center">
            <p className="fw-bold fs-5">Qualificação</p>
          </div>
          <div className="row text-center">
            <p>Administração</p>
          </div>
          <div className="row text-center">
            <p>Agronomia</p>
          </div>
          <div className="row text-center">
            <p>Ciencias Contábeis</p>
          </div>
          <div className="row text-center">
            <p>Direito</p>
          </div>
          <div className="row text-center">
            <p>Engenharia</p>
          </div>
          <div className="row text-center">
            <p>Enfermagem</p>
          </div>
          <div className="row text-center">
            <p>Medicina</p>
          </div>
        </aside>
        <article className="col-sm" id="sectionPerfil">
          <section className="container-fluid row" id="corpoTalentos">
            <div className="text-center text-muted my-3 row" id="msgTopo">
              <h1>
                Aqui você encontra os melhores perfil para contribuir na sua
                empresa.
              </h1>
            </div>
            <div className="card border-dark col-md-5 bg-info" id="card-perfil">
              <div className="card-header text-center bg-success text-light">
                <h5 className="card-title">Waschington Rodrigo</h5>
              </div>
              <div className="card">
                {/*imagem do fundo do card*/}
                <img
                  id="fundo"
                  className="card-img"
                  src="img/img-Talentos/Fundo-CardH.png"
                  alt="imagem de fundo "
                />
                <div className="card-body card-img-overlay">
                  <div className="row mb-3">
                    <div className="col-sm-8">
                      <span className="fw-bold">Cidade:</span>
                      <span className="text-muted">Cidade Ocidental</span>
                    </div>
                    <div className="col-sm-4">
                      <span className="fw-bold">UF:</span>
                      <span className="text-muted">GO</span>
                    </div>
                  </div>
                  <div className="row">
                    <p>
                      <span className="fw-bold">Idade:</span>
                      <span className="text-muted">35 anos</span>
                    </p>
                  </div>
                  <div className="row">
                    <p>
                      <span className="fw-bold">Sexo:</span>
                      <span className="text-muted">Masculino</span>
                    </p>
                  </div>
                  <div className="row">
                    <p>
                      <span className="fw-bold">Contato:</span>
                      <span className="text-muted">(61) 992090318</span>
                    </p>
                  </div>
                  <div className="row">
                    <p>
                      <span className="fw-bold">E-mail:</span>
                      <span className="text-muted">chitonbispo@gmail.com</span>
                    </p>
                  </div>
                </div>
                <div className="card-footer bg-info" id="footer-perfil">
                  <h5 className="text-muted text-center">
                    Engenharia Eletrica
                  </h5>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default talentos;
