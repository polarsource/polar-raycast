import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Schema to update the benefits granted by a product.
 */
export type ProductBenefitsUpdate = {
    /**
     * List of benefit IDs. Each one must be on the same organization as the product.
     */
    benefits: Array<string>;
};
/** @internal */
export declare const ProductBenefitsUpdate$inboundSchema: z.ZodType<ProductBenefitsUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type ProductBenefitsUpdate$Outbound = {
    benefits: Array<string>;
};
/** @internal */
export declare const ProductBenefitsUpdate$outboundSchema: z.ZodType<ProductBenefitsUpdate$Outbound, z.ZodTypeDef, ProductBenefitsUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProductBenefitsUpdate$ {
    /** @deprecated use `ProductBenefitsUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProductBenefitsUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProductBenefitsUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProductBenefitsUpdate$Outbound, z.ZodTypeDef, ProductBenefitsUpdate>;
    /** @deprecated use `ProductBenefitsUpdate$Outbound` instead. */
    type Outbound = ProductBenefitsUpdate$Outbound;
}
export declare function productBenefitsUpdateToJSON(productBenefitsUpdate: ProductBenefitsUpdate): string;
export declare function productBenefitsUpdateFromJSON(jsonString: string): SafeParseResult<ProductBenefitsUpdate, SDKValidationError>;
//# sourceMappingURL=productbenefitsupdate.d.ts.map