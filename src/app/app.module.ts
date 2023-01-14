import { Module } from "@nestjs/common";
import { MunicipalityModule } from "../modules/municipality/municipality.module";
import { PrismaModule } from "../modules/prisma/prisma.module";
import { ProductModule } from "../modules/product/product.module";

@Module({
	imports: [PrismaModule, ProductModule, MunicipalityModule],
	controllers: [],
	providers: []
})
export class AppModule {}
