import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function updateTalento() {
    const [talento, setTalento] = useState({ idTalento: 0, nome: "", cpf: "", dataNasc: "", email: "", formacao: "", telefone: "", cep: "", endereco: "", casa:"", bairro:"", cidade: "", estado: "" });
    const router = useRouter();
    const [cep, setCep] = useState({});
    const { id } = router.query;


    const handleInputChange = (e) => {
        setTalento({ ...talento, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        axios
            .get('https://localhost:7226/api/Talentos/' + talento.idTalento)
            .then((response) => {
                setTalento(response.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do destino", error)
            })
    }, [talento.idTalento])

    useEffect(() => {
        axios
        .get('http://viacep.com.br/ws/'+talento.cep+'/json/')
        .then((response) => {
            setCep(response.data);
            setTalento(prevState => ({
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
    }, [talento.cep])

    const handleUpdateTalento = ()=>{
        axios
        .put('https://localhost:7226/api/Talentos/' + talento.idTalento, talento)
        .then(() => {
            router.push("/talento");
        })
        .catch((error) => {
            console.error("Erro ao buscar detalhes do destino", error);
        });
    }
    return (
        <>
            <section style={{ paddingTop: 100 }}>
                <div
                    className="container-fluid"
                >
                    <fieldset>
                        <legend className="my-3">Dados Pessoais</legend>
                        <div className="form-group my-3">
                            <label htmlFor="iId" className="form-label">
                                id:
                            </label>
                            <input
                                type="text"
                                id="iId"
                                name="id"
                                value={talento.idTalento = id}
                                className="form-control"
                                required=""
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
                                value={talento.nome}
                                className="form-control"
                                required=""
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="iCpf" className="form-label">
                                CPF:
                            </label>
                            <input
                                type="text"
                                id="iCpf"
                                name="cpf"
                                value={talento.cpf}
                                className="form-control"
                                maxLength={11}
                                required=""
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group my-3">
                            <label
                                htmlFor="iDataNascimento"
                                className="form-label"
                            >
                                Data Nasc. :
                            </label>
                            <input
                                type="date"
                                id="iDataNascimento"
                                name="dataNasc"
                                value={talento.dataNasc}
                                className="form-control"
                                required=""
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
                                value={talento.email}
                                className="form-control"
                                required=""
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="iFormacao" className="form-label">
                                Formações:
                            </label>
                            <input
                                type="text"
                                id="iFormacao"
                                name="formacao"
                                value={talento.formacao}
                                className="form-control"
                                required=""
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
                                value={talento.telefone}
                                className="form-control"
                                maxLength={11}
                                required=""
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
                                value={talento.cep}
                                className="form-control"
                                maxLength={9}
                                required
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
                                value={talento.endereco}
                                className="form-control"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="iCasa" className="form-label">
                                Casa:
                            </label>
                            <input
                                type="text"
                                id="iCasa"
                                name="casa"
                                value={talento.casa}
                                className="form-control"
                                required
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
                                value={talento.bairro}
                                className="form-control"
                                required
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
                                value={talento.cidade}
                                className="form-control"
                                required=""
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
                                value={talento.estado}
                                className="form-control"
                                placeholder="GO, DF, MT, AM, CE..."
                                maxLength={2}
                                required=""
                                onChange={handleInputChange}
                            />
                        </div>
                    </fieldset>
                    <div >
                        <button onClick={handleUpdateTalento} className="btn btn-primary mx-1">
                            Atualizar
                        </button>
                        <Link href="/talento" className="btn btn-danger my-3">
                            Cancelar
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
