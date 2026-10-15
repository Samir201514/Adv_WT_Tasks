import { Type } from "class-transformer";
import { IsNotEmpty, Matches, Min, Max, IsString, IsNumber, IsOptional } from "class-validator";

export class CreateCourseDto{
    @IsNotEmpty({message : "Course name, cannot be empty"})
    @IsString()
    name : string;

    @IsNotEmpty({message : "Course code e.g. CS101 "})
    @IsString()
    code : string;

    @IsNotEmpty({message : "Instructor name, cannot be empty"})
    @IsString()
    instructor : string;

    @IsNotEmpty({message : "Between 1 and 6"})
    @Min(1)
    @Max(6)
    @IsNumber()
    @Type(() => Number)
    credits : number;

    @IsString()
    @IsOptional()
    description : string;
}