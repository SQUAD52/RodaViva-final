function login() {
    return (
        <>
            <main
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f1f1f1",
                    paddingTop: "80px",
                }}
            >
                <div class="container text-center">
                    <div class="row justify-content-md-center">
                        <div class="card  col-md-auto text-center shadow-lg">
                            <div class="card-body">
                                <img
                                    src="/img/logoRodaVivaSemFundo.png"
                                    alt="logotipo espaço roda viva"
                                    class="img-responsive w-25 mx-50 mb-3"
                                />
                                <div
                                    class="mb-3"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <label
                                        for="exampleFormControlInput1"
                                        class="form-label"
                                    >
                                        Insira seu e-mail
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control form-control-lg fs-6"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        style={{
                                            height: "50px",
                                        }}
                                    />
                                </div>
                                <button
                                    type="button"
                                    class="btn rounded-pill btn-primary btn-md w-100 p-3"
                                    style={{
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Continuar
                                </button>
                                <p>
                                    <strong>Você é novo no Roda Viva?</strong>
                                </p>
                                <p>
                                    Cadastrar-se como{" "}
                                    <a
                                        class="text-decoration-none"
                                        href="/talento/create-talento"
                                    >
                                        <strong>Talento</strong>
                                    </a>{" "}
                                    ou{" "}
                                    <a
                                        class="text-decoration-none"
                                        href="/empresas/create-empresa"
                                    >
                                        <strong>Empresa</strong>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default login;
