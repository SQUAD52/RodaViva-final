import React from "react";

function createEmpresa() {
    return (
        <>
            <form
                action="../../empresa-create"
                className="container-fluid"
                method="post"
                style={{ marginTop: 100 }}
            >
                <fieldset>
                    <legend className="my-3">Dados Empresa</legend>
                    <div className="form-group my-3">
                        <label htmlFor="iNome" className="form-label">
                            Nome:
                        </label>{" "}
                        <input
                            type="text"
                            id="iNome"
                            name="nNome"
                            className="form-control"
                            required=""
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iCnpj" className="form-label">
                            CNPJ:
                        </label>{" "}
                        <input
                            type="text"
                            id="iCnpj"
                            name="nCNPJ"
                            className="form-control"
                            maxLength={14}
                            required=""
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEmail" className="form-label">
                            Email:
                        </label>{" "}
                        <input
                            type="text"
                            id="iEmail"
                            name="nEmail"
                            className="form-control"
                            required=""
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iTelefone" className="form-label">
                            Telefone:
                        </label>{" "}
                        <input
                            type="text"
                            id="iTelefone"
                            name="nTelefone"
                            className="form-control"
                            maxLength={11}
                            required=""
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iVagas" className="form-label">
                            Vagas Disponíveis:
                        </label>{" "}
                        <input
                            type="text"
                            id="iVagas"
                            name="nVagas"
                            className="form-control"
                            required=""
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
                            name="nCep"
                            className="form-control"
                            maxLength={9}
                            required=""
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEndereco" className="form-label">
                            Endereço:
                        </label>{" "}
                        <input
                            type="text"
                            id="iEndereco"
                            name="nEndereco"
                            className="form-control"
                            required=""
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iEstado" className="form-label">
                            Estado:
                        </label>{" "}
                        <input
                            type="text"
                            id="iEstado"
                            name="nEstado"
                            className="form-control"
                            placeholder="GO, DF, MT, AM, CE..."
                            maxLength={2}
                            required=""
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iCidade" className="form-label">
                            Cidade:
                        </label>{" "}
                        <input
                            type="text"
                            id="iCidade"
                            name="nCidade"
                            className="form-control"
                            required=""
                        />
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">
                    Cadastrar
                </button>
                <a href="" className="btn btn-danger my-3">
                    Cancelar
                </a>
            </form>
        </>
    );
}

export default createEmpresa;
