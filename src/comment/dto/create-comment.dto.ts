import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreateCommentDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty({example: 155, description: 'Esse campos só será aceito se o post existir no banco de dados.'})
    post_id: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example:'Hudson Oliveira'})
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example:'hudson@oliveira.com'})
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example:'testando implementacao do swagger.'})
    body: string
}
