import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { PrismaService } from "./modules/prisma/prisma.service";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe());

	const prismaService = app.get(PrismaService);
	await prismaService.enableShutdownHooks(app);

	const port = process.env.PORT || 3000;
	await app.listen(port);

	Logger.log(`🚀 Servidor rodando em: http://localhost:${port}/`);
}

bootstrap();
