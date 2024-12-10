import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CheckoutLinksGetRequest = {
    /**
     * The checkout link ID.
     */
    id: string;
};
/** @internal */
export declare const CheckoutLinksGetRequest$inboundSchema: z.ZodType<CheckoutLinksGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutLinksGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const CheckoutLinksGetRequest$outboundSchema: z.ZodType<CheckoutLinksGetRequest$Outbound, z.ZodTypeDef, CheckoutLinksGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutLinksGetRequest$ {
    /** @deprecated use `CheckoutLinksGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutLinksGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutLinksGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutLinksGetRequest$Outbound, z.ZodTypeDef, CheckoutLinksGetRequest>;
    /** @deprecated use `CheckoutLinksGetRequest$Outbound` instead. */
    type Outbound = CheckoutLinksGetRequest$Outbound;
}
export declare function checkoutLinksGetRequestToJSON(checkoutLinksGetRequest: CheckoutLinksGetRequest): string;
export declare function checkoutLinksGetRequestFromJSON(jsonString: string): SafeParseResult<CheckoutLinksGetRequest, SDKValidationError>;
//# sourceMappingURL=checkoutlinksget.d.ts.map