import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreatePostDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty({example: 159, description: `Esse campo só será aceito se o usário existir no banco de dados.`})
    user_id: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Teste swagger'})
    title: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Implementando swaager.'})
    body: string
}