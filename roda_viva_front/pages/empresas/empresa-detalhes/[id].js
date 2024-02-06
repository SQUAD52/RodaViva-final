import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


export default function detalhesEmpresa() {
    const [empresa, setEmpresa] = useState({ idEmpresa: 0, nome: "", cnpj: "", email: "", telefone: "", cep: "", endereco: "", bairro: "", lote: "", cidade: "", estado: "", vagas: "" });
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        axios
            .get('https://localhost:7226/api/Empresas/' + empresa.idEmpresa)
            .then((response) => {
                setEmpresa(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do destino", error);
            })
    }, [empresa.idEmpresa])
    return (
        <main style={{ paddingTop: 100 }} className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card card-primary card-outline cardCinza">
                        <div className="card-body box-profile">
                            <div className="text-center">
                                <Image className="profile-user-img img-fluid img-circle" src="/img/logoRodaVivaSemFundo.png" alt="User profile picture" width={150} height={150} />
                            </div>

                            <h4 className="profile-username text-center">{empresa.nome}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row my-1">
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card card-primary cardCinza alinhaCards">
                                        <div className="card-header cardBlue">
                                            <h4 className="card-title">Dados</h4>
                                        </div>
                                        <div className="card-body">

                                            <div style={{ display: "none" }}>
                                                <span>ID</span>
                                                <p className="text-muted">
                                                    {empresa.idEmpresa = id}
                                                </p>
                                                <hr />
                                            </div>

                                            <strong ><i className="fas fa-id-card "/> CNPJ</strong>
                                            <p className="text-muted">
                                                {empresa.cnpj}
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card card-primary cardCinza alinhaCards">
                                        <div className="card-header cardBlue">
                                            <h4 className="card-title">Contatos</h4>
                                        </div>
                                        <div className="card-body">

                                            <strong ><i className="fas fa-mobile"/> Telefone</strong>
                                            <p className="text-muted ">{empresa.telefone}</p>

                                            <hr />

                                            <strong ><i className="fas fa-envelope "/> E-mail</strong>
                                            <p className="text-muted " id="email" >{empresa.email}</p>

                                        </div>

                                    </div>
                                </div>

                                <div className="col-sm-12 mt-1">
                                    <div className="card card-primary cardCinza alinhaCards">
                                        <div className="card-header cardGreen text-white">
                                            <h4 className="card-title text-center">Vagas</h4>
                                        </div>
                                        <div className="card-body">

                                            <p className="text-muted">{empresa.vagas}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card card-primary cardCinza alinhaCards">
                                <div className="card-header cardBlue">
                                    <h4 className="card-title">Endereço</h4>
                                </div>
                                <div className="card-body">


                                    <strong><i className="fas fa-home "/> Bairro</strong>
                                    <p className="text-muted">{empresa.bairro}</p>

                                    <hr />

                                    <strong><i className="fas fa-map-marker-alt "/> Cidade</strong>
                                    <p className="text-muted" id="email" >{empresa.cidade}</p>

                                    <hr />

                                    <strong><i className="fas fa-map "/> Estado</strong>
                                    <p className="text-muted" >{empresa.estado}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    )
}
