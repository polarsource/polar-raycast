import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const Platforms: {
    readonly Github: "github";
};
export type Platforms = ClosedEnum<typeof Platforms>;
/** @internal */
export declare const Platforms$inboundSchema: z.ZodNativeEnum<typeof Platforms>;
/** @internal */
export declare const Platforms$outboundSchema: z.ZodNativeEnum<typeof Platforms>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Platforms$ {
    /** @deprecated use `Platforms$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Github: "github";
    }>;
    /** @deprecated use `Platforms$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Github: "github";
    }>;
}
//# sourceMappingURL=platforms.d.ts.map