import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";



export default function deleteTalento() {
    const [talento, setTalento] = useState({ idTalento: 0, nome: "", cpf: "", dataNasc: "", email: "", formacao: "", telefone: "", cep: "", endereco: "", cidade: "", estado: "" });
    const router = useRouter();
    const { id } = router.query;

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
    return (
        <main style={{ paddingTop: 100 }} className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card card-primary card-outline">
                        <div className="card-body box-profile">
                            <div className="text-center">
                                <Image className="profile-user-img img-fluid img-circle" src="/img/logoRodaVivaSemFundo.png" alt="User profile picture" width={150} height={150} />
                            </div>

                            <h3 className="profile-username text-center">{talento.nome}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row my-1">
                        <div className="col-sm-4">



                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Dados</h3>
                                </div>
                                <div className="card-body">

                                    <strong><i className="fas fa-book mr-1"></i> ID</strong>
                                    <p className="text-muted">
                                        {talento.idTalento = id}
                                    </p>

                                    <hr />

                                    <strong><i className="fas fa-book mr-1"></i> CPF</strong>
                                    <p className="text-muted" thText="${cliente.cpf}">
                                        484.325.821-07
                                    </p>

                                    <hr />

                                    <strong><i className="fas fa-calendar-alt mr-1"></i> Data de Nascimento</strong>
                                    <p className="text-muted">
                                        {talento.dataNasc}
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Contatos</h3>
                                </div>
                                <div className="card-body">


                                    <strong><i className="fas fa-mobile mr-1"></i> Telefone</strong>
                                    <p className="text-muted">{talento.telefone}</p>

                                    <hr />

                                    <strong><i className="fas fa-envelope mr-1"></i> E-mail</strong>
                                    <p className="text-muted" id="email" >{talento.email}</p>


                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Endereço</h3>
                                </div>
                                <div className="card-body">


                                    <strong><i className="fas fa-mobile mr-1"></i> Logradouro</strong>
                                    <p className="text-muted">{talento.endereco}</p>

                                    <hr />

                                    <strong><i className="fas fa-envelope mr-1"></i> Cidade</strong>
                                    <p className="text-muted" id="email" >{talento.cidade}</p>

                                    <hr />

                                    <strong><i className="fas fa-map-marker-alt mr-1"></i> Estado</strong>
                                    <p className="text-muted" >{talento.estado}</p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </main >
        //teste
    )
}
