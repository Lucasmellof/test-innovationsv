import { Product, Status } from "@prisma/client";

import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ProductDTO {
	@IsString()
	@IsNotEmpty({ message: "O nome não pode estar em branco." })
	name: string;

	@IsString()
	@IsNotEmpty({ message: "A categoria não pode estar em branco." })
	category: string;

	@IsEnum(Status)
	status: Status;

	@IsNumber()
	quantity: number;
}

export class ProductUpdateDTO {
	@IsString()
	@IsNotEmpty({ message: "O nome não pode estar em branco." })
	@IsOptional()
	name: string;

	@IsString()
	@IsNotEmpty({ message: "A categoria não pode estar em branco." })
	@IsOptional()
	category: string;

	@IsEnum(Status)
	@IsOptional()
	status: Status;

	@IsNumber()
	@IsOptional()
	quantity: number;
}
