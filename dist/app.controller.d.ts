import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
export declare class AppController {
    private appService;
    private prisma;
    constructor(appService: AppService, prisma: PrismaService);
    getHello(): string;
    store(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }[]>;
}
