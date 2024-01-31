import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function UpdateCandidato() {
    const [candidato, setCandidato] = useState({ idCandidato: 0, cargo: '', idTalento: 0, idEmpresa: 0 })
    const [listaParceiros, setListaParceiros] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    const handlesetCandidato = (e) => {
        setCandidato({ ...candidato, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        axios
            .get('https://localhost:7226/api/Candidatos/' + candidato.idCandidato)
            .then((response) => {
                setCandidato(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar Candidatos", error);
            });
    }, [candidato.idCandidato])

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
    const handleAddCandidato = () => {
        axios
            .put('https://localhost:7226/api/candidatos/' + candidato.idCandidato, candidato)
            .then(() => {
                router.push('/candidato')
            })
            .catch((error) => {
                console.error("Erro ao se candidatar", error);
            });
    }
    console.log(candidato)
    return (
        <>
            <div className="container">
                <div
                    style={{ marginTop: 110 }}
                >
                    <fieldset>
                        <h3>Atualizar Dados</h3>

                        <div style={{ display: "none" }}>
                            <strong><i></i> ID</strong>
                            <p className="text-muted">
                                {candidato.idCandidato = id}
                            </p>
                            <hr />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="iCargo" className="form-label">
                                Cargo:
                            </label>{" "}
                            <input onChange={handlesetCandidato}
                                value={candidato.cargo}
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
                            <select id="iEmpresa" name="idEmpresa" onChange={handlesetCandidato}>
                                <option defaultChecked >Selecione o local de viagem</option>
                                {listaParceiros.map((parceiros) => (
                                    <option value={parceiros.idEmpresa}>{parceiros.nome}</option>
                                )
                                )}
                            </select>
                        </div>
                    </fieldset>
                    <button onClick={handleAddCandidato} className="btn btn-primary" >Atualizar</button>
                    <Link className="btn btn-danger mx-1 my-1" href='/candidato'>cancelar</Link>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </>
    )
}
