"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const zod_1 = require("zod");
const tokenSchema = zod_1.z.object({
    sub: zod_1.z.string().uuid(),
});
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(config) {
        const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true });
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: Buffer.from(publicKey, 'base64'),
            algorithms: ['RS256'],
        });
    }
    async validate(payload) {
        return tokenSchema.parse(payload);
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map