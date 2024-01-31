import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function talentos() {
    const [talentos, setTalentos] = useState([]);
    const router = useRouter();

    function getTalentos() {
        axios
            .get("https://localhost:7226/api/talentos")
            .then((response) => {
                setTalentos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar lista de cadastros", error);
            });
    }

    useEffect(() => {
        getTalentos();
    }, []);

    function clickDelete(idTalento) {
        if (
            window.confirm(
                "Você tem certeza que deseja excluir o Talento Nº " +
                    idTalento +
                    "?"
            )
        ) {
            axios
                .delete("https://localhost:7226/api/talentos/" + idTalento)
                .then((response) => {
                    console.log(response.status); // Imprime o status da resposta
                    console.log(response.data); // Imprime os dados da resposta

                    if (response.status === 204) {
                        // Verifique se o status da resposta é 204
                        router.replace(router.asPath); // Atualiza a página atual

                        getTalentos();
                    }
                })
                .catch((error) => {
                    console.error("Talento não excluido", error);
                });
        }
    }

    return (
        <main className="container-fluid " style={{ paddingTop: 100 }}>
            <div className="row">
                <aside className=" bg-dark text-light col-md-2 my-1">
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
                <article className="col-md-10 my-1">
                    <section>
                        <table className="table table-responsive table-hover">
                            <thead className="table-dark">
                                <tr className="text-center">
                                    <th scope="col">Id</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">Formação</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {talentos.map((talento) => (
                                    <tr className="text-center">
                                        <th scope="row">{talento.idTalento}</th>
                                        <td>
                                            <Link
                                                href={`//candidato/create-candidatoT/${talento.idTalento}`}
                                            >
                                                {talento.nome}
                                            </Link>
                                        </td>
                                        <td>
                                            {talento.cidade} / {talento.estado}
                                        </td>
                                        <td>{talento.formacao}</td>

                                        <td>
                                            <div className="text-center">
                                                <Link
                                                    href={`talento/talento-detalhes/${talento.idTalento}`}
                                                    className="btn btn-warning mx-1"
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>

                                                <Link
                                                    href={`/talento/talento-update/${talento.idTalento}`}
                                                    className="btn btn-primary"
                                                >
                                                    <i class="fas fa-edit"></i>
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        clickDelete(
                                                            talento.idTalento
                                                        )
                                                    }
                                                    className="btn btn-danger mx-1"
                                                >
                                                    <i class="fas fa-trash"></i>
                                                </button>
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
