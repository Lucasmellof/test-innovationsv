import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProductDTO, ProductUpdateDTO } from "./product.dto";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
	constructor(private readonly productService: ProductService) {}
	@Post()
	async create(@Body() data: ProductDTO) {
		return this.productService.create(data);
	}

	@Get()
	async findAll() {
		return this.productService.findAll();
	}
	@Get(":id")
	async findOne(@Param("id", ParseIntPipe) id: number) {
		return this.productService.findOne(id);
	}

	@Patch(":id")
	async update(@Param("id", ParseIntPipe) id: number, @Body() data: ProductUpdateDTO) {
		return this.productService.update(id, data);
	}

	@Delete(":id")
	async delete(@Param("id", ParseIntPipe) id: number) {
		return this.productService.delete(id);
	}
}
