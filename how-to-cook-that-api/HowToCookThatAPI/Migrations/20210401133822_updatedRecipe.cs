using Microsoft.EntityFrameworkCore.Migrations;

namespace HowToCookThatAPI.Migrations
{
    public partial class updatedRecipe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recipes_Users_AddedByUserId",
                table: "Recipes");

            migrationBuilder.DropIndex(
                name: "IX_Recipes_AddedByUserId",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "AddedByUserId",
                table: "Recipes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AddedByUserId",
                table: "Recipes",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Recipes_AddedByUserId",
                table: "Recipes",
                column: "AddedByUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipes_Users_AddedByUserId",
                table: "Recipes",
                column: "AddedByUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
