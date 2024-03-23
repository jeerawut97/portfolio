import { PrismaClient } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient();
    const portfolio = await prisma.portfolio.findMany();
    return Response.json(portfolio);
};
