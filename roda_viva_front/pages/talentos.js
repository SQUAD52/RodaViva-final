import axios from "axios";
import { useEffect, useState } from "react";
function talentos() {
    const [talentos, setTalentos] = useState([]);
    useEffect(() => {
        axios
            .get("http://apirodaviva.somee.com/api/talentos")
            .then((response) => {
                setTalentos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar lista de cadastros", error);
            });
    }, []);
    console.log(talentos);
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
                        <div
                            className="text-center text-muted my-3 row"
                            id="msgTopo"
                        >
                            <h1>
                                Aqui você encontra os melhores perfil para
                                contribuir na sua empresa.
                            </h1>
                        </div>
                        {talentos.map((element) => (
                            <div
                                className="card border-dark col-md-5 bg-info"
                                id="card-perfil"
                                key={element.idTalento}
                            >
                                <div className="card-header text-center bg-success text-light">
                                    <h5 className="card-title">
                                        {element.nome}
                                    </h5>
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
                                                <span className="fw-bold">
                                                    Cidade:
                                                </span>
                                                <span className="text-muted">
                                                    {element.cidade}
                                                </span>
                                            </div>
                                            <div className="col-sm-4">
                                                <span className="fw-bold">
                                                    UF:
                                                </span>
                                                <span className="text-muted">
                                                    {element.estado}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <span className="fw-bold">
                                                    Idade:
                                                </span>
                                                <span className="text-muted">
                                                    {element.dataNasc}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <span className="fw-bold">
                                                    Contato:
                                                </span>
                                                <span className="text-muted">
                                                    {element.telefone}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <span className="fw-bold">
                                                    E-mail:
                                                </span>
                                                <span className="text-muted">
                                                    {element.email}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="card-footer bg-info"
                                        id="footer-perfil"
                                    >
                                        <h5 className="text-muted text-center">
                                            {element.formacao}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </article>
            </main>
        </>
    );
}

export default talentos;
