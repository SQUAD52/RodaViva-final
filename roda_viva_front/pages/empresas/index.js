import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function empresas() {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        getEmpresas();
    }, []);

    function getEmpresas() {
        axios
            .get("https://localhost:7226/api/empresas")
            .then((response) => {
                setEmpresas(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar lista de cadastros", error);
            });
    }

    function clickDelete(idEmpresa) {
        if (window.confirm("Você tem certeza que deseja excluir o Empresa Nº " + idEmpresa + "?")) {
            axios
                .delete("https://localhost:7226/api/empresas/" + idEmpresa)
                .then((response) => {
                    console.log(response.status);  // Imprime o status da resposta
                    console.log(response.data);   // Imprime os dados da resposta

                    if (response.status === 204) {  // Verifique se o status da resposta é 204
                        router.replace(router.asPath);  // Atualiza a página atual


                        getEmpresas();

                    }
                })
                .catch((error) => {
                    console.error("Empresa não excluido", error);
                });
        }
    }
    console.log(empresas)
    return (
        <>
            {/*Corpo com as empresas parceiras*/}
            <main className="container my-3" style={{ paddingTop: 100 }}>
                <div className="row">
                    {empresas.map((empresa) => (
                        <div className="col-sm-4">
                            <div className="card alinhaCards">
                                <div className="card-body">
                                    <h5 className="card-title">{empresa.nome}</h5>
                                    <hr />
                                    <p className="card-subtitle  text-body-secondary fontsize fas fa-map-marker-alt"> -  {empresa.cidade} / {empresa.estado}</p>
                                    <hr />
                                    <strong className=" fa fa-wheelchair-alt fw-bold"> Vagas:</strong>
                                    <p className="text-muted"> {empresa.vagas}</p>
                                    <hr />
                                    <div className="row">
                                        <div className="col text-center align-self-end">

                                            <Link href={`/empresas/empresa-detalhes/${empresa.idEmpresa}`} className=" btn btn-warning mx-1">
                                                <i className="fas fa-eye"></i>
                                            </Link>

                                            <Link href={`/empresas/empresa-update/${empresa.idEmpresa}`} className=" btn btn-primary">
                                                <i class="fas fa-edit"></i>
                                            </Link>

                                            <button onClick={() => clickDelete(empresa.idEmpresa)} className=" btn btn-danger mx-1">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </>
    );
}

export default empresas;
