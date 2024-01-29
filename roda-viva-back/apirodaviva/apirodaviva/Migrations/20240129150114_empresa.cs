using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace apirodaviva.Migrations
{
    public partial class empresa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Bairro",
                table: "Empresas",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Lote",
                table: "Empresas",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bairro",
                table: "Empresas");

            migrationBuilder.DropColumn(
                name: "Lote",
                table: "Empresas");
        }
    }
}
