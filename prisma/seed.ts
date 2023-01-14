import { PrismaClient } from "@prisma/client";
import { registerMunicipalities } from "../src/utils";

const prisma = new PrismaClient();

const UF_CODE = 33; // Rio de Janeiro

async function main() {
	console.log("Iniciando processo de seed do banco de dados...");

	const dbMunicipality = await prisma.municipality.findMany();

	if (dbMunicipality.length !== 0) {
		console.log("Banco de dados já possui municípios cadastrados.");
		return;
	}

	const municipalities = await registerMunicipalities(UF_CODE);

	const result = await prisma.municipality.createMany({ data: municipalities });

	console.log(`Adicionado ${result.count}/${municipalities.length} municípios.`);
	console.log("Processo de seed finalizado.");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
