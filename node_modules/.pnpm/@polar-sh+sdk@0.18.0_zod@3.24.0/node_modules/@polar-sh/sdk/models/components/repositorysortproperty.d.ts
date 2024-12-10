import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const RepositorySortProperty: {
    readonly CreatedAt: "created_at";
    readonly MinusCreatedAt: "-created_at";
    readonly Name: "name";
    readonly MinusName: "-name";
    readonly Stars: "stars";
    readonly MinusStars: "-stars";
};
export type RepositorySortProperty = ClosedEnum<typeof RepositorySortProperty>;
/** @internal */
export declare const RepositorySortProperty$inboundSchema: z.ZodNativeEnum<typeof RepositorySortProperty>;
/** @internal */
export declare const RepositorySortProperty$outboundSchema: z.ZodNativeEnum<typeof RepositorySortProperty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RepositorySortProperty$ {
    /** @deprecated use `RepositorySortProperty$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly Name: "name";
        readonly MinusName: "-name";
        readonly Stars: "stars";
        readonly MinusStars: "-stars";
    }>;
    /** @deprecated use `RepositorySortProperty$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly Name: "name";
        readonly MinusName: "-name";
        readonly Stars: "stars";
        readonly MinusStars: "-stars";
    }>;
}
//# sourceMappingURL=repositorysortproperty.d.ts.map