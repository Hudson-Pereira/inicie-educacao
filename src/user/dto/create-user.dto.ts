import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Hudson Oliveira'})
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'hudson@oliveira.com'})
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Male/Female'})
    gender: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Active/Inactive'})
    status: string
}
