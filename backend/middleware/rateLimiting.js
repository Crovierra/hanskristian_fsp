import {rateLimit} from "express-rate-limit"

export const sendEmailLimit = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false
})