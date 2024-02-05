import React from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function index() {
  const [candidatos, setCandidatos] = useState([]);
  const router = useRouter();

  function getCandidatos() {
    axios
      .get("https://localhost:7226/api/candidatos")
      .then((response) => {
        setCandidatos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar lista de cadastros", error);
      });
  }

  useEffect(() => {
    getCandidatos();
  }, []);

  function clickDelete(idCandidato) {
    if (
      window.confirm(
        "Você tem certeza que deseja excluir o Candidato Nº " +
        idCandidato +
        "?"
      )
    ) {
      axios
        .delete("https://localhost:7226/api/candidatos/" + idCandidato)
        .then((response) => {
          console.log(response.status); // Imprime o status da resposta
          console.log(response.data); // Imprime os dados da resposta

          if (response.status === 204) {
            // Verifique se o status da resposta é 204
            router.replace(router.asPath); // Atualiza a página atual

            getCandidatos();
          }
        })
        .catch((error) => {
          console.error("Candidato não excluido", error);
        });
    }
  }
  console.log(candidatos)
  return (
    <main className="container-fluid " style={{ paddingTop: 100 }}>
      <h1>Lista de Candidatos</h1>
      <article className="col-md-12 my-1">
        <section>
          <table className="table table-responsive table-hover">
            <thead className="table-dark">
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Cargo</th>
                <th scope="col">Talento</th>
                <th scope="col">Empresa</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {candidatos.map((candidato) => (
                <tr className="text-center">
                  <th scope="row">{candidato.idCandidato}</th>
                  <td>

                    {candidato.cargo}

                  </td>
                  <td>
                    <Link href={`/talento/talento-detalhes/${candidato.idTalento}`}>
                      {candidato.idTalento}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/empresas/empresa-detalhes/${candidato.idEmpresa}`}>
                      {candidato.idEmpresa}
                    </Link>
                  </td>

                  <td>
                    <div className="text-center">


                      <Link
                        href={`/candidato/candidato-update/${candidato.idCandidato}`}
                        className="btn btn-primary"
                      >
                        <i class="fas fa-edit"></i>
                      </Link>

                      <button
                        onClick={() =>
                          clickDelete(
                            candidato.idCandidato
                          )
                        }
                        className="btn btn-danger mx-1"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </main>
  )
}
