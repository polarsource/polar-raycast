import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { Product, Product$Outbound } from "./product.js";
export type ListResourceProduct = {
    items: Array<Product>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceProduct$inboundSchema: z.ZodType<ListResourceProduct, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceProduct$Outbound = {
    items: Array<Product$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceProduct$outboundSchema: z.ZodType<ListResourceProduct$Outbound, z.ZodTypeDef, ListResourceProduct>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceProduct$ {
    /** @deprecated use `ListResourceProduct$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceProduct, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceProduct$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceProduct$Outbound, z.ZodTypeDef, ListResourceProduct>;
    /** @deprecated use `ListResourceProduct$Outbound` instead. */
    type Outbound = ListResourceProduct$Outbound;
}
export declare function listResourceProductToJSON(listResourceProduct: ListResourceProduct): string;
export declare function listResourceProductFromJSON(jsonString: string): SafeParseResult<ListResourceProduct, SDKValidationError>;
//# sourceMappingURL=listresourceproduct.d.ts.map