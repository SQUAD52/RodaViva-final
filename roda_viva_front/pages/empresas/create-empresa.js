import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function createEmpresa() {
    const [newEmpresa, setNewEmpresa] = useState({
        nome: "",
        cnpj: "",
        email: "",
        telefone: "",
        cep: "",
        endereco: "",
        cidade: "",
        estado: "",
        vagas: "",
    });
    const router = useRouter();

    const handleInputChange = (e) => {
        setNewEmpresa({ ...newEmpresa, [e.target.name]: e.target.value });
    };
    const handleCreateNewEmpresa = (e) => {
        e.preventDefault();
        axios
            .post("https://localhost:7226/api/empresas", newEmpresa)
            .then(() => {
                router.push("/empresas");
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes da Categoria", error);
            });
    };
    console.log(newEmpresa);
    return (
        <>
            <form className="container-fluid" style={{ marginTop: 100 }}>
                <fieldset>
                    <legend className="my-3">Dados Empresa</legend>
                    <div className="form-group my-3">
                        <label htmlFor="iNome" className="form-label">
                            Nome:
                        </label>{" "}
                        <input
                            type="text"
                            id="iNome"
                            name="nome"
                            className="form-control"
                            required
                            value={newEmpresa.nome}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iCnpj" className="form-label">
                            CNPJ:
                        </label>{" "}
                        <input
                            type="text"
                            id="iCnpj"
                            name="cnpj"
                            className="form-control"
                            maxLength={14}
                            required
                            value={newEmpresa.cnpj}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEmail" className="form-label">
                            Email:
                        </label>{" "}
                        <input
                            type="text"
                            id="iEmail"
                            name="email"
                            className="form-control"
                            required
                            value={newEmpresa.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iTelefone" className="form-label">
                            Telefone:
                        </label>{" "}
                        <input
                            type="text"
                            id="iTelefone"
                            name="telefone"
                            className="form-control"
                            maxLength={11}
                            required
                            value={newEmpresa.telefone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iVagas" className="form-label">
                            Vagas Disponíveis:
                        </label>{" "}
                        <input
                            type="text"
                            id="iVagas"
                            name="vagas"
                            className="form-control"
                            required
                            value={newEmpresa.vagas}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Logradouro</legend>
                    <div className="form-group my-3">
                        <label htmlFor="iCep" className="form-label">
                            CEP:
                        </label>{" "}
                        <input
                            type="text"
                            id="iCep"
                            name="cep"
                            className="form-control"
                            maxLength={9}
                            required
                            value={newEmpresa.cep}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEndereco" className="form-label">
                            Endereço:
                        </label>{" "}
                        <input
                            type="text"
                            id="iEndereco"
                            name="endereco"
                            className="form-control"
                            required
                            value={newEmpresa.endereco}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEstado" className="form-label">
                            Estado:
                        </label>{" "}
                        <input
                            type="text"
                            id="iEstado"
                            name="estado"
                            className="form-control"
                            placeholder="GO, DF, MT, AM, CE..."
                            maxLength={2}
                            required
                            value={newEmpresa.estado}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iCidade" className="form-label">
                            Cidade:
                        </label>{" "}
                        <input
                            type="text"
                            id="iCidade"
                            name="cidade"
                            className="form-control"
                            required
                            value={newEmpresa.cidade}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <button
                    className="btn btn-primary"
                    onClick={handleCreateNewEmpresa}
                >
                    Cadastrar
                </button>
                <a href className="btn btn-danger my-3">
                    Cancelar
                </a>
            </form>
        </>
    );
}

export default createEmpresa;
