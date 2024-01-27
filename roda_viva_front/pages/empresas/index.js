import axios from "axios";
import { useEffect, useState } from "react";

function empresas() {
    const [empresas, setEmpresas] = useState([]);
    useEffect(() => {
        axios
            .get("https://localhost:7226/api/empresas")
            .then((response) => {
                setEmpresas(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar lista de cadastros", error);
            });
    }, []);
    return (
        <>
            {/*Corpo com as empresas parceiras*/}
            <main className="container my-3" id="listaParceiros">
                {empresas.map((empresa) => (
                    <section className="row" style={{ marginTop: 100 }}>
                        <div
                            className="col-sm border-bottom "
                            key={empresa.idEmpresa}
                        >
                            {/*<img
                                className="img-fluid"
                                src="img/img-parceiros/BorceleArquitetura.png"
                                alt=""
                />*/}
                            <h2 className="text-center">{empresa.nome}</h2>
                            <p>{}</p>
                            <p>{empresa.email}</p>
                            <p>{empresa.telefone}</p>
                            <p>{empresa.cnpj}</p>
                            <p>{empresa.endereço}</p>
                            <p>{empresa.cep}</p>
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
}

export default empresas;
