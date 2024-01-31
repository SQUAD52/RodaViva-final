import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function detalhesTalento() {
    const [talento, setTalento] = useState({
        idTalento: 0,
        nome: "",
        cpf: "",
        dataNasc: "",
        email: "",
        formacao: "",
        telefone: "",
        cep: "",
        endereco: "",
        casa: "",
        bairro: "",
        cidade: "",
        estado: "",
    });
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        axios
            .get("https://localhost:7226/api/Talentos/" + talento.idTalento)
            .then((response) => {
                setTalento(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do destino", error);
            });
    }, [talento.idTalento]);
    return (
        <main style={{ paddingTop: 100 }} className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card card-primary card-outline cardCinza">
                        <div className="card-body box-profile">
                            <div className="text-center">
                                <Image
                                    className="profile-user-img img-fluid img-circle"
                                    src="/img/logoRodaVivaSemFundo.png"
                                    alt="User profile picture"
                                    width={150}
                                    height={150}
                                />
                            </div>

                            <h4 className="profile-username text-center">
                                {talento.nome}
                            </h4>
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
                                            <h4 className="card-title">
                                                Dados
                                            </h4>
                                        </div>
                                        <div className="card-body">
                                            <div style={{ display: "none" }}>
                                                <strong>
                                                    <i></i> ID
                                                </strong>
                                                <p className="text-muted">
                                                    {(talento.idTalento = id)}
                                                </p>
                                                <hr />
                                            </div>

                                            <strong>
                                                <i className="fas fa-id-card "></i>{" "}
                                                CPF
                                            </strong>
                                            <p className="text-muted">
                                                {talento.cpf}
                                            </p>

                                            <hr />

                                            <strong>
                                                <i className="fas fa-calendar-alt "></i>{" "}
                                                Data de Nascimento
                                            </strong>
                                            <p className="text-muted">
                                                {talento.dataNasc}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card card-primary cardCinza alinhaCards">
                                        <div className="card-header cardBlue">
                                            <h4 className="card-title">
                                                Contatos
                                            </h4>
                                        </div>
                                        <div className="card-body">
                                            <strong>
                                                <i className="fas fa-mobile "></i>{" "}
                                                Telefone
                                            </strong>
                                            <p className="text-muted">
                                                {talento.telefone}
                                            </p>

                                            <hr />

                                            <strong>
                                                <i className="fas fa-envelope "></i>{" "}
                                                E-mail
                                            </strong>
                                            <p
                                                className="text-muted"
                                                id="email"
                                            >
                                                {talento.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 mt-1">
                                    <div className="card card-primary cardCinza alinhaCards">
                                        <div className="card-header cardGreen text-white">
                                            <h4 className="card-title text-center">
                                                Formação
                                            </h4>
                                        </div>
                                        <div className="card-body fa fa-graduation-cap">
                                            <p className="text-muted">
                                                {talento.formacao}
                                            </p>
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
                                    <strong>
                                        <i className="fas fa-home "></i> Bairro
                                    </strong>
                                    <p className="text-muted">
                                        {talento.bairro}
                                    </p>

                                    <hr />

                                    <strong>
                                        <i className="fas fa-map-marker-alt "></i>{" "}
                                        Cidade
                                    </strong>
                                    <p className="text-muted" id="email">
                                        {talento.cidade}
                                    </p>

                                    <hr />

                                    <strong>
                                        <i className="fas fa-map "></i> Estado
                                    </strong>
                                    <p className="text-muted">
                                        {talento.estado}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        //teste1
    );
}
