import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CheckoutLinksDeleteRequest = {
    /**
     * The checkout link ID.
     */
    id: string;
};
/** @internal */
export declare const CheckoutLinksDeleteRequest$inboundSchema: z.ZodType<CheckoutLinksDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutLinksDeleteRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const CheckoutLinksDeleteRequest$outboundSchema: z.ZodType<CheckoutLinksDeleteRequest$Outbound, z.ZodTypeDef, CheckoutLinksDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutLinksDeleteRequest$ {
    /** @deprecated use `CheckoutLinksDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutLinksDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutLinksDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutLinksDeleteRequest$Outbound, z.ZodTypeDef, CheckoutLinksDeleteRequest>;
    /** @deprecated use `CheckoutLinksDeleteRequest$Outbound` instead. */
    type Outbound = CheckoutLinksDeleteRequest$Outbound;
}
export declare function checkoutLinksDeleteRequestToJSON(checkoutLinksDeleteRequest: CheckoutLinksDeleteRequest): string;
export declare function checkoutLinksDeleteRequestFromJSON(jsonString: string): SafeParseResult<CheckoutLinksDeleteRequest, SDKValidationError>;
//# sourceMappingURL=checkoutlinksdelete.d.ts.map