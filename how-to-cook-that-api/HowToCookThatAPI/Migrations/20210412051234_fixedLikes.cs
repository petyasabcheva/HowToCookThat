using Microsoft.EntityFrameworkCore.Migrations;

namespace HowToCookThatAPI.Migrations
{
    public partial class fixedLikes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Recipes_RecipeId",
                table: "Likes");

            migrationBuilder.AlterColumn<int>(
                name: "RecipeId",
                table: "Likes",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Recipes_RecipeId",
                table: "Likes",
                column: "RecipeId",
                principalTable: "Recipes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Recipes_RecipeId",
                table: "Likes");

            migrationBuilder.AlterColumn<int>(
                name: "RecipeId",
                table: "Likes",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Recipes_RecipeId",
                table: "Likes",
                column: "RecipeId",
                principalTable: "Recipes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
