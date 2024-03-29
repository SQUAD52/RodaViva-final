﻿using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace apirodaviva.Models
{
    public class Empresas
    {
        public Empresas() { 
            Candidatos = new Collection<Candidatos>();
        }
        [Key]
        public int IdEmpresa { get; set; }

        [Required(ErrorMessage = "Campo Nome é obrigatório")]
        [StringLength(60, MinimumLength = 5, ErrorMessage = "Este campo deve conter entre 5 e 60 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Campo CNPJ é obrigatório")]
        [StringLength(14, ErrorMessage = "Este campo deve conter 14 caracteres", MinimumLength = 14)]
        public string Cnpj { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo E-mail é obrigatório")]
        public string Email { get; set; }

        [StringLength(60)]
        [Required]
        public string Telefone { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo CEP é obrigatório")]
        public string Cep { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo Endereço é obrigatório")]
        public string Endereco { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo bairro é obrigatório")]
        public string Bairro { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo Lote é obrigatório")]
        public string Lote { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo Cidade é obrigatório")]
        public string Cidade { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo Estado é obrigatório")]
        public string Estado { get; set; }

        [StringLength(255)]
        public string Vagas { get; set; }

        public ICollection<Candidatos> Candidatos { get; private set; }
    }
}

