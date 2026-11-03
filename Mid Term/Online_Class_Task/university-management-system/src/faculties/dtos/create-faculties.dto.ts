import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateFacultiesDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  expertise: string;

  @IsInt()
  noOfPublication: number;
}