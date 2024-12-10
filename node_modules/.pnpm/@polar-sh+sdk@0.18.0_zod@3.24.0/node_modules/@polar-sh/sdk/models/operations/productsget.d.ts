import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ProductsGetRequest = {
    id: string;
};
/** @internal */
export declare const ProductsGetRequest$inboundSchema: z.ZodType<ProductsGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ProductsGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const ProductsGetRequest$outboundSchema: z.ZodType<ProductsGetRequest$Outbound, z.ZodTypeDef, ProductsGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProductsGetRequest$ {
    /** @deprecated use `ProductsGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProductsGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProductsGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProductsGetRequest$Outbound, z.ZodTypeDef, ProductsGetRequest>;
    /** @deprecated use `ProductsGetRequest$Outbound` instead. */
    type Outbound = ProductsGetRequest$Outbound;
}
export declare function productsGetRequestToJSON(productsGetRequest: ProductsGetRequest): string;
export declare function productsGetRequestFromJSON(jsonString: string): SafeParseResult<ProductsGetRequest, SDKValidationError>;
//# sourceMappingURL=productsget.d.ts.map