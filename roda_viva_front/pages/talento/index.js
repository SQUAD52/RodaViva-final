import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function talentos() {
    const [talentos, setTalentos] = useState([]);
    useEffect(() => {
        axios
            .get("https://localhost:7226/api/talentos")
            .then((response) => {
                setTalentos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar lista de cadastros", error);
            });
    }, []);
    console.log(talentos);
    return (
        <main className="container-fluid " style={{ paddingTop: 100 }}>
            <div className="row">
                <aside className=" bg-dark text-light col-md-3">
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
                <article className="col-md-7" id="sectionPerfil">
                    <section className="container-fluid " id="corpoTalentos">
                        <table className="table table-responsive table-hover">
                            <thead className="table-dark">
                                <tr className="text-center">
                                    <th scope="col">Id</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">Formação</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {talentos.map((talento) => (
                                    <tr className="text-center">
                                        <th scope="row">{talento.idTalento}</th>
                                        <td>{talento.nome}</td>
                                        <td>{talento.email}</td>
                                        <td>
                                            {talento.cidade}/{talento.estado}
                                        </td>
                                        <td>{talento.formacao}</td>

                                        <td>
                                            <div className="text-center">
                                                <Link
                                                    href={`/talento/talento-update/${talento.id}`}
                                                    className="btn btn-success"
                                                >
                                                    Editar
                                                </Link>
                                                <Link
                                                    href={`/talento/talento-delete/${talento.id}`}
                                                    className="btn btn-danger mx-1"
                                                >
                                                    Excluir{" "}
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </article>
            </div>
        </main>
    );
}

export default talentos;
