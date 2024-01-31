import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


export default function CreateCandidatoT() {
    const [newCandidato, setNewCandidato] = useState({
        idCandidato: 0,
        cargo: "",
        idTalento: 0,
        talento: {
            idTalento: 0,
            nome: "",
            cpf: "",
            dataNasc: "",
            email: "",
            formacao: "",
            telefone: "",
            cep: "",
            endereco: "",
            bairro: "",
            casa: "",
            cidade: "",
            estado: ""
        },
        idEmpresa: 0,
        empresa: {
            idEmpresa: 0,
            nome: "",
            cnpj: "",
            email: "",
            telefone: "",
            cep: "",
            endereco: "",
            bairro: "",
            lote: "",
            cidade: "",
            estado: "",
            vagas: ""
        }
    });

    const [listaParceiros, setListaParceiros] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        axios
            .get('https://localhost:7226/api/Empresas')
            .then((response) => {
                setListaParceiros(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar Empresas", error);
            });
    }, [])


    useEffect(() => {
        axios
            .get('https://localhost:7226/api/Empresas/' + newCandidato.idEmpresa)
            .then((response) => {
                setNewCandidato(prevState => ({
                    ...prevState,
                    empresa: response.data,
                    idEmpresa: parseInt(response.data.idEmpresa)
                }));
            })
            .catch((error) => {
                console.error("Erro ao buscar Empresas", error);
            });
    }, [newCandidato.idEmpresa])

    useEffect(() => {
        axios
            .get("https://localhost:7226/api/talentos/" + newCandidato.talento.idTalento)
            .then((response) => {
                setNewCandidato(prevState => ({
                    ...prevState,
                    talento: response.data,
                    idTalento: parseInt(response.data.idTalento),
                    
                }));                
            })
            .catch((error) => {
                console.error("Erro ao buscar talento", error);
            });
    }, [newCandidato.talento.idTalento]);

    const handlesetNewCandidato = (e) => {
        setNewCandidato({ ...newCandidato, [e.target.name]: e.target.value })
    }

    const handleAddCandidato = ()=>{
        axios
        .post('https://localhost:7226/api/candidatos', newCandidato)
        .then(()=>{
            router.push('/candidato')
        })
        .catch((error) => {
            console.error("Erro ao se candidatar", error);
        });
    }
    console.log(newCandidato)
    return (
        <>
            <div className="container">
                <div
                    action="./candidato-create"
                    className=""
                    method="post"
                    style={{ marginTop: 110 }}
                >
                    <fieldset>
                        <h3>Dados para Candidatar à vagas</h3>

                        <div style={{ display: "none" }}>
                            <strong><i></i> ID</strong>
                            <p className="text-muted">
                                {newCandidato.talento.idTalento = id}
                            </p>
                            <hr />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="iCargo" className="form-label">
                                Cargo:
                            </label>{" "}
                            <input onChange={handlesetNewCandidato}
                                type="text"
                                id="iCargo"
                                name="cargo"
                                className="form-control"
                                required=""
                            />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="iEmpresa" className="form-label">
                                Empresa:
                            </label>
                            <select id="iEmpresa" name="idEmpresa" onChange={handlesetNewCandidato}>
                                <option defaultChecked >Selecione o local de viagem</option>
                                {listaParceiros.map((parceiros) => (
                                    <option value={parceiros.idEmpresa}>{parceiros.nome}</option>
                                )
                                )}
                            </select>
                        </div>
                    </fieldset>
                    <button onClick={handleAddCandidato} className="btn btn-primary" >Candidatar</button>
                    <Link className="btn btn-danger mx-1 my-1" href='/candidato'>cancelar</Link>
                </div>
            </div>
        </>
    )
}
