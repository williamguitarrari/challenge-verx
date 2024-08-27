"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CreateAccountController = class CreateAccountController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async handle(body) {
        const { name, email, password } = body;
        const userWithSameEmail = await this.prisma.user.findUnique({
            where: { email }
        });
        if (userWithSameEmail) {
            throw new common_1.ConflictException('Já existe um usuário com esse e-mail');
        }
        await this.prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
    }
};
exports.CreateAccountController = CreateAccountController;
__decorate([
    (0, common_2.Post)(),
    (0, common_2.HttpCode)(201),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CreateAccountController.prototype, "handle", null);
exports.CreateAccountController = CreateAccountController = __decorate([
    (0, common_2.Controller)('/accounts'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreateAccountController);
//# sourceMappingURL=create-user.controller.js.map