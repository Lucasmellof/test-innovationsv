import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Product, Status } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { ProductDTO } from "./product.dto";

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async create(data: ProductDTO): Promise<Product> {
		const productExists = await this.prisma.product.findFirst({
			where: {
				name: data.name
			}
		});

		if (productExists) {
			throw new ConflictException("Já existe um produto com esse nome.");
		}

		return await this.prisma.product.create({ data });
	}

	async findAll(): Promise<Product[]> {
		return await this.prisma.product.findMany();
	}

	async findOne(id: number): Promise<Product> {
		return await this.prisma.product.findUnique({
			where: {
				id
			}
		});
	}

	async update(id: number, data: ProductDTO): Promise<Product> {
		const productExists = this.findOne(id);

		if (!productExists) {
			throw new NotFoundException("Não existe um produto registrado com esse ID.");
		}

		return await this.prisma.product.update({
			data,
			where: {
				id
			}
		});
	}

	async delete(id: number) {
		const productExists = this.findOne(id);

		if (!productExists) {
			throw new NotFoundException("Não existe um produto registrado com esse ID.");
		}

		return await this.prisma.product.update({
			data: {
				status: Status.INACTIVE,
				deleted_at: new Date()
			},
			where: {
				id
			}
		});
	}
}
