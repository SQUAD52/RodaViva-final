using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace apirodaviva.Models
{
    public class Talentos
    {

        public Talentos() { 
         Candidatos = new Collection<Candidatos>();
        }
        [Key]
        public int IdTalento { get; set; }

        [Required(ErrorMessage = "Campo Nome é obrigatório")]
        [StringLength(60, MinimumLength = 5, ErrorMessage = "Este campo deve conter entre 5 e 60 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Campo CPF é obrigatório")]
        [StringLength(11, ErrorMessage = "Este campo deve conter 11 caracteres", MinimumLength = 11)]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "Campo Data Nascimento é obrigatório")]
        public DateTime DataNasc { get; set; }

        [StringLength(60, MinimumLength = 5, ErrorMessage = "Este campo deve conter entre 5 e 60 caracteres")]
        [Required(ErrorMessage = "Campo E-mail é obrigatório")]
        public String Email { get; set; }

        [StringLength(60)]
        public String Formacao { get; set; }

        [StringLength(15)]
        [Required(ErrorMessage = "Campo Telefone é obrigatório")]
        public String Telefone { get; set; }

        [StringLength(10)]
        [Required(ErrorMessage = "Campo CEP é obrigatório")]
        public string Cep { get; set; }

        [StringLength(100)]
        [Required(ErrorMessage = "Campo Endereço é obrigatório")]
        public string Endereco { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo bairro é obrigatório")]
        public string Bairro { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo casa é obrigatório")]
        public string Casa { get; set; }


        [StringLength(60)]
        [Required(ErrorMessage = "Campo Cidade é obrigatório")]
        public string Cidade { get; set; }

        [StringLength(60)]
        [Required(ErrorMessage = "Campo Estado é obrigatório")]
        public string Estado { get; set; }

        [JsonIgnore]
        public ICollection<Candidatos> Candidatos { get; private set; }
    }
}

