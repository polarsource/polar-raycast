import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const ExternalOrganizationSortProperty: {
    readonly CreatedAt: "created_at";
    readonly MinusCreatedAt: "-created_at";
    readonly Name: "name";
    readonly MinusName: "-name";
};
export type ExternalOrganizationSortProperty = ClosedEnum<typeof ExternalOrganizationSortProperty>;
/** @internal */
export declare const ExternalOrganizationSortProperty$inboundSchema: z.ZodNativeEnum<typeof ExternalOrganizationSortProperty>;
/** @internal */
export declare const ExternalOrganizationSortProperty$outboundSchema: z.ZodNativeEnum<typeof ExternalOrganizationSortProperty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalOrganizationSortProperty$ {
    /** @deprecated use `ExternalOrganizationSortProperty$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly Name: "name";
        readonly MinusName: "-name";
    }>;
    /** @deprecated use `ExternalOrganizationSortProperty$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly Name: "name";
        readonly MinusName: "-name";
    }>;
}
//# sourceMappingURL=externalorganizationsortproperty.d.ts.map