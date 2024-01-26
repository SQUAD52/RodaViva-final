using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace apirodaviva.Models
{
    public class Talentos
    {
        [Key]
        public int IdTalento { get; set; }

        [Required(ErrorMessage = "Campo Nome é obrigatório")]
        [StringLength(60, MinimumLength = 5, ErrorMessage = "Este campo deve conter entre 5 e 60 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Campo CPF é obrigatório")]
        [StringLength(11, ErrorMessage = "Este campo deve conter 11 caracteres", MinimumLength = 11)]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "Campo Data Nascimento é obrigatório")]
        public string DataNasc { get; set; }

        [Required(ErrorMessage = "Campo E-mail é obrigatório")]
        public string Email { get; set; }

        public string Formacao { get; set; }

        [Required(ErrorMessage = "Campo Telefone é obrigatório")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = "Campo CEP é obrigatório")]
        public string Cep { get; set; }

        [Required(ErrorMessage = "Campo Endereço é obrigatório")]
        public string Endereco { get; set; }

        [Required(ErrorMessage = "Campo bairro é obrigatório")]
        public string Bairro { get; set; }

        [Required(ErrorMessage = "Campo casa é obrigatório")]
        public string Casa { get; set; }



        [Required(ErrorMessage = "Campo Cidade é obrigatório")]
        public string Cidade { get; set; }

        [Required(ErrorMessage = "Campo Estado é obrigatório")]
        public string Estado { get; set; }

        [JsonIgnore]
        public List<Candidatos> Candidatos { get; set; }

    }
}
