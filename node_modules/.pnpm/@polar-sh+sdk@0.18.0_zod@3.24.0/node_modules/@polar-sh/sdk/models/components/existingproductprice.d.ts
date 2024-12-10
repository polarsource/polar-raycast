import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A price that already exists for this product.
 *
 * @remarks
 *
 * Useful when updating a product if you want to keep an existing price.
 */
export type ExistingProductPrice = {
    id: string;
};
/** @internal */
export declare const ExistingProductPrice$inboundSchema: z.ZodType<ExistingProductPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type ExistingProductPrice$Outbound = {
    id: string;
};
/** @internal */
export declare const ExistingProductPrice$outboundSchema: z.ZodType<ExistingProductPrice$Outbound, z.ZodTypeDef, ExistingProductPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExistingProductPrice$ {
    /** @deprecated use `ExistingProductPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExistingProductPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExistingProductPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExistingProductPrice$Outbound, z.ZodTypeDef, ExistingProductPrice>;
    /** @deprecated use `ExistingProductPrice$Outbound` instead. */
    type Outbound = ExistingProductPrice$Outbound;
}
export declare function existingProductPriceToJSON(existingProductPrice: ExistingProductPrice): string;
export declare function existingProductPriceFromJSON(jsonString: string): SafeParseResult<ExistingProductPrice, SDKValidationError>;
//# sourceMappingURL=existingproductprice.d.ts.map