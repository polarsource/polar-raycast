import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Order's invoice data.
 */
export type OrderInvoice = {
    /**
     * The URL to the invoice.
     */
    url: string;
};
/** @internal */
export declare const OrderInvoice$inboundSchema: z.ZodType<OrderInvoice, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderInvoice$Outbound = {
    url: string;
};
/** @internal */
export declare const OrderInvoice$outboundSchema: z.ZodType<OrderInvoice$Outbound, z.ZodTypeDef, OrderInvoice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderInvoice$ {
    /** @deprecated use `OrderInvoice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderInvoice, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderInvoice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderInvoice$Outbound, z.ZodTypeDef, OrderInvoice>;
    /** @deprecated use `OrderInvoice$Outbound` instead. */
    type Outbound = OrderInvoice$Outbound;
}
export declare function orderInvoiceToJSON(orderInvoice: OrderInvoice): string;
export declare function orderInvoiceFromJSON(jsonString: string): SafeParseResult<OrderInvoice, SDKValidationError>;
//# sourceMappingURL=orderinvoice.d.ts.map