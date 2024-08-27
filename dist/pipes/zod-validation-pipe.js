"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
const zod_validation_error_1 = require("zod-validation-error");
class ZodValidationPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value) {
        try {
            const parsedValue = this.schema.parse(value);
            return parsedValue;
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                throw new common_1.BadRequestException({
                    message: 'Validation failed',
                    statusCode: 400,
                    errors: (0, zod_validation_error_1.fromZodError)(error),
                });
            }
            throw new common_1.BadRequestException('Validation failed');
        }
        return value;
    }
}
exports.ZodValidationPipe = ZodValidationPipe;
//# sourceMappingURL=zod-validation-pipe.js.map