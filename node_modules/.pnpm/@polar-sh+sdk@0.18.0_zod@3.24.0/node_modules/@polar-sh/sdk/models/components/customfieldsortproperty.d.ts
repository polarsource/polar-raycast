import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const CustomFieldSortProperty: {
    readonly CreatedAt: "created_at";
    readonly MinusCreatedAt: "-created_at";
    readonly Slug: "slug";
    readonly MinusSlug: "-slug";
    readonly Name: "name";
    readonly MinusName: "-name";
    readonly Type: "type";
    readonly MinusType: "-type";
};
export type CustomFieldSortProperty = ClosedEnum<typeof CustomFieldSortProperty>;
/** @internal */
export declare const CustomFieldSortProperty$inboundSchema: z.ZodNativeEnum<typeof CustomFieldSortProperty>;
/** @internal */
export declare const CustomFieldSortProperty$outboundSchema: z.ZodNativeEnum<typeof CustomFieldSortProperty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldSortProperty$ {
    /** @deprecated use `CustomFieldSortProperty$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly Slug: "slug";
        readonly MinusSlug: "-slug";
        readonly Name: "name";
        readonly MinusName: "-name";
        readonly Type: "type";
        readonly MinusType: "-type";
    }>;
    /** @deprecated use `CustomFieldSortProperty$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly Slug: "slug";
        readonly MinusSlug: "-slug";
        readonly Name: "name";
        readonly MinusName: "-name";
        readonly Type: "type";
        readonly MinusType: "-type";
    }>;
}
//# sourceMappingURL=customfieldsortproperty.d.ts.map