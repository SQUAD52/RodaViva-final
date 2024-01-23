import axios from 'axios'
import Link from 'next/link';
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export default function createTalento() {
    const [newTalento, setNewTalento] = useState({ idTalento: 2, nome: "", cpf: "", dataNasc: "", email: "", formacao: "", telefone: "", cep: "", endereco: "", cidade: "", estado: ""})
    const router = useRouter();
    const headers = {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000', // Substitua pelo seu domínio
    };
    const handleInputChange = (e) => {
        setNewTalento({ ...newTalento, [e.target.name]: e.target.value })
    }

    const handleCreateNewTalento = () => {
        axios
            .post("https://localhost:7226/api/talentos", newTalento,{headers})
            .then((response) => {
                router.push("/talento")
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes da Categoria", error)
            })
    }
    console.log(newTalento)
    return (
        <>
            <form style={{ marginTop: 110 }} className='container-fluid' >
                <fieldset>
                    <legend className="my-3">Dados Pessoais</legend>
                    <div className="form-group my-3">
                        <label htmlFor="iNome" className="form-label">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="iNome"
                            name="nome"
                            value={newTalento.nome}
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
                            value={newTalento.cpf}
                            className="form-control"
                            maxLength={11}
                            required=""
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="iDataNascimento" className="form-label">
                            Data Nasc. :
                        </label>
                        <input
                            type="datetime-local"
                            id="iDataNascimento"
                            name="dataNasc"
                            value={newTalento.dataNasc}
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
                            value={newTalento.email}
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
                            value={newTalento.formacao}
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
                            value={newTalento.telefone}
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
                            value={newTalento.cep}
                            className="form-control"
                            maxLength={9}
                            required=""
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
                            value={newTalento.endereco}
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
                            value={newTalento.estado}
                            className="form-control"
                            placeholder="GO, DF, MT, AM, CE..."
                            maxLength={2}
                            required=""
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
                            value={newTalento.cidade}
                            className="form-control"
                            required=""
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
            </form>
            <button className="btn btn-primary mx-1" onChange={handleCreateNewTalento}>Cadastrar</button>
            <Link href="/talento" className="btn btn-danger my-3">
                Cancelar
            </Link>
        </>
    )
}
