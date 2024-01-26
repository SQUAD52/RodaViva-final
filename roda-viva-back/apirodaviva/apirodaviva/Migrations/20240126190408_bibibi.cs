using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace apirodaviva.Migrations
{
    public partial class bibibi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "casa",
                table: "Talentos",
                newName: "Casa");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Casa",
                table: "Talentos",
                newName: "casa");
        }
    }
}
