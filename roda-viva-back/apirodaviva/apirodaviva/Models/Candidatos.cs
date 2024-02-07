using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace apirodaviva.Models
{
    public class Candidatos
    {
        [Key]
        public int IdCandidato { get; set; }

        [StringLength(255)]
        [Required(ErrorMessage = "Campo Cargo é obrigatório")]
        public string Cargo { get; set; }



        [Required(ErrorMessage = "Campo Id Talento é obrigatório")]
        public int IdTalento { get; set; }

        [JsonIgnore]
        [ForeignKey("IdTalento")]
        public Talentos Talento { get; set; }


        [Required(ErrorMessage = "Campo Id Empresa é obrigatório")]
        public int IdEmpresa { get; set; }

        [JsonIgnore]
        [ForeignKey("IdEmpresa")]
        public Empresas Empresa { get; set; }
    }
}
