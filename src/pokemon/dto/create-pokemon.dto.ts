import { IsInt, IsNotEmpty, Min, MinLength, isNotEmpty, max } from "class-validator"

export class CreatePokemonDto {
    @IsInt()
    @Min(1)
    no: number

    @IsNotEmpty()
    @MinLength(2)
    name: string
}
