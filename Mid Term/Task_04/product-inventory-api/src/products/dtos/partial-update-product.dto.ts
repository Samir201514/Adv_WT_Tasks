import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dot.js";

export class PartialUpdateProductDto extends PartialType(CreateProductDto){}