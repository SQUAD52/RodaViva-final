function contato() {
    return (
        <>
            <main>
                <section>
                    <div
                        className="card card-profile shadow pb-2"
                        id="fale-conosco"
                        style={{ margin: 30, marginTop: 100 }}
                    >
                        <div className="px-4">
                            <div className="row justify-content-center mt-3 pb-2">
                                <div className="col-md-12  text-center mb-4">
                                    <h1 className="fw-bold">Fale conosco</h1>
                                    <span>
                                        Deixe sua pergunta, mensagem ou
                                        sugestão.
                                    </span>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control nome"
                                            id="nome"
                                            placeholder="Nome"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control email"
                                            id="email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control telefone phone-mask"
                                            id="telefone"
                                            placeholder="Telefone"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control empresa "
                                            id="empresa"
                                            placeholder="Empresa"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control assunto "
                                            id="tx-assunto"
                                            placeholder="Assunto"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <textarea
                                            className="form-control  mensagem "
                                            name="name"
                                            rows={8}
                                            cols={80}
                                            id="mensagem"
                                            placeholder="Digite sua mensagem..."
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group my-4">
                                        <div
                                            data-sitekey="6LeINL8lAAAAAFBSUFmlvzJOydRFJewFMqgd5qhI"
                                            className="g-recaptcha"
                                        >
                                            <div
                                                style={{
                                                    width: 304,
                                                    height: 78,
                                                }}
                                            >
                                                <div>
                                                    <iframe
                                                        title="reCAPTCHA"
                                                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeINL8lAAAAAFBSUFmlvzJOydRFJewFMqgd5qhI&co=aHR0cHM6Ly93d3cuZGVmaWNpZW50ZW9ubGluZS5jb20uYnI6NDQz&hl=pt-BR&v=x19joXI_IeQnFJ7YnfDapSZq&size=normal&cb=t32yaq4ikb27"
                                                        width={304}
                                                        height={78}
                                                        role="presentation"
                                                        name="a-eduu8eqcsftk"
                                                        frameBorder={0}
                                                        scrolling="no"
                                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                                    />
                                                </div>
                                                <textarea
                                                    id="g-recaptcha-response"
                                                    name="g-recaptcha-response"
                                                    className="g-recaptcha-response"
                                                    style={{
                                                        width: 250,
                                                        height: 40,
                                                        border: "1px solid rgb(193, 193, 193)",
                                                        margin: "10px 25px",
                                                        padding: 0,
                                                        resize: "none",
                                                        display: "none",
                                                    }}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <iframe
                                                style={{ display: "none" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default contato;
