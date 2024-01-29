import axios from "axios";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function createEmpresa() {
    const [empresa, setEmpresa] = useState({ idEmpresa: 0, nome: "", cnpj: "", email: "", telefone: "", cep: "", endereco: "", bairro: "", lote: "", cidade: "", estado: "", vagas: "" });
    const router = useRouter();
    const [cep, setCep] = useState({});
    const { id } = router.query;

    useEffect(()=>{
        axios
        .get("https://localhost:7226/api/empresas/" + empresa.idEmpresa)
        .then((response)=>{
            setEmpresa(response.data);
        })
        .catch((error) => {
            console.error("Erro ao buscar detalhes do cep", error)
        })
    },[empresa.idEmpresa])

    useEffect(() => {
        axios
            .get('http://viacep.com.br/ws/' + empresa.cep + '/json/')
            .then((response) => {
                setCep(response.data);
                setEmpresa(prevState => ({
                    ...prevState,
                    endereco: response.data.logradouro,
                    bairro: response.data.bairro,
                    cidade: response.data.localidade,
                    estado: response.data.uf
                }));
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do cep", error)
            })
    }, [empresa.cep])

    const handleInputChange = (e) => {
        setEmpresa({ ...empresa, [e.target.name]: e.target.value });
    };

    const handleUpdateEmpresa = () => {
        axios
            .put("https://localhost:7226/api/empresas/" + empresa.idEmpresa, empresa)
            .then(() => {
                router.push("/empresas");
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes da Categoria", error);
            });
    };
    return (
        <>
            <section className="container-fluid" style={{ marginTop: 100 }}>
                <fieldset>
                    <legend className="my-3">Dados Empresa</legend>
                    <div className="form-group my-3">
                        <label htmlFor="iId" className="form-label">
                            Id:
                        </label>
                        <input
                            readOnly
                            type="text"
                            id="iId"
                            name="idEmpresa"
                            className="form-control"
                            required
                            value={empresa.idEmpresa = id}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iNome" className="form-label">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="iNome"
                            name="nome"
                            className="form-control"
                            required
                            value={empresa.nome}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iCnpj" className="form-label">
                            CNPJ:
                        </label>
                        <input
                            readOnly
                            type="text"
                            id="iCnpj"
                            name="cnpj"
                            className="form-control"
                            maxLength={14}
                            required
                            value={empresa.cnpj}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEmail" className="form-label">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="iEmail"
                            name="email"
                            className="form-control"
                            required
                            value={empresa.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iTelefone" className="form-label">
                            Telefone:
                        </label>
                        <input
                            type="text"
                            id="iTelefone"
                            name="telefone"
                            className="form-control"
                            maxLength={11}
                            required
                            value={empresa.telefone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iVagas" className="form-label">
                            Vagas Disponíveis:
                        </label>
                        <input
                            type="text"
                            id="iVagas"
                            name="vagas"
                            className="form-control"
                            required
                            value={empresa.vagas}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Logradouro</legend>
                    <div className="form-group my-3">
                        <label htmlFor="iCep" className="form-label">
                            CEP:
                        </label>
                        <input
                            type="text"
                            id="iCep"
                            name="cep"
                            className="form-control"
                            maxLength={9}
                            required
                            value={empresa.cep}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEndereco" className="form-label">
                            Endereço:
                        </label>
                        <input
                            type="text"
                            id="iEndereco"
                            name="endereco"
                            className="form-control"
                            required
                            value={empresa.endereco}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iBairro" className="form-label">
                            Bairro:
                        </label>
                        <input
                            type="text"
                            id="iBairro"
                            name="bairro"
                            className="form-control"
                            required
                            value={empresa.bairro}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iLote" className="form-label">
                            Lote:
                        </label>
                        <input
                            type="text"
                            id="iLote"
                            name="lote"
                            className="form-control"
                            required
                            value={empresa.lote}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEstado" className="form-label">
                            Estado:
                        </label>
                        <input
                            type="text"
                            id="iEstado"
                            name="estado"
                            className="form-control"
                            placeholder="GO, DF, MT, AM, CE..."
                            maxLength={2}
                            required
                            value={empresa.estado}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iCidade" className="form-label">
                            Cidade:
                        </label>
                        <input
                            type="text"
                            id="iCidade"
                            name="cidade"
                            className="form-control"
                            required
                            value={empresa.cidade}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <button
                    className="btn btn-primary"
                    onClick={handleUpdateEmpresa}
                >
                    Atualizar
                </button>
                <Link href="/empresas" className="btn btn-danger my-3">
                    Cancelar
                </Link>
            </section>
        </>
    );
}

export default createEmpresa;
