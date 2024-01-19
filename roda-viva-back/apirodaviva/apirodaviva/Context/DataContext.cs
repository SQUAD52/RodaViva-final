using apirodaviva.Models;
using Microsoft.EntityFrameworkCore;

namespace apirodaviva.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Talentos> Talentos { get; set; }
        public DbSet<Empresas> Empresas { get; set; }
        public DbSet<Candidatos> Candidatos { get; set; }

    }
}
