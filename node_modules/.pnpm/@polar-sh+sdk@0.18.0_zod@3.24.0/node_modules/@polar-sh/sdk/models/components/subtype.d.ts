import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const SubType: {
    readonly User: "user";
    readonly Organization: "organization";
};
export type SubType = ClosedEnum<typeof SubType>;
/** @internal */
export declare const SubType$inboundSchema: z.ZodNativeEnum<typeof SubType>;
/** @internal */
export declare const SubType$outboundSchema: z.ZodNativeEnum<typeof SubType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubType$ {
    /** @deprecated use `SubType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly User: "user";
        readonly Organization: "organization";
    }>;
    /** @deprecated use `SubType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly User: "user";
        readonly Organization: "organization";
    }>;
}
//# sourceMappingURL=subtype.d.ts.map