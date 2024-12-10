import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CheckoutLink, CheckoutLink$Outbound } from "./checkoutlink.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceCheckoutLink = {
    items: Array<CheckoutLink>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceCheckoutLink$inboundSchema: z.ZodType<ListResourceCheckoutLink, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceCheckoutLink$Outbound = {
    items: Array<CheckoutLink$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceCheckoutLink$outboundSchema: z.ZodType<ListResourceCheckoutLink$Outbound, z.ZodTypeDef, ListResourceCheckoutLink>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceCheckoutLink$ {
    /** @deprecated use `ListResourceCheckoutLink$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceCheckoutLink, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceCheckoutLink$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceCheckoutLink$Outbound, z.ZodTypeDef, ListResourceCheckoutLink>;
    /** @deprecated use `ListResourceCheckoutLink$Outbound` instead. */
    type Outbound = ListResourceCheckoutLink$Outbound;
}
export declare function listResourceCheckoutLinkToJSON(listResourceCheckoutLink: ListResourceCheckoutLink): string;
export declare function listResourceCheckoutLinkFromJSON(jsonString: string): SafeParseResult<ListResourceCheckoutLink, SDKValidationError>;
//# sourceMappingURL=listresourcecheckoutlink.d.ts.map