import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrdersInvoiceRequest = {
    /**
     * The order ID.
     */
    id: string;
};
/** @internal */
export declare const OrdersInvoiceRequest$inboundSchema: z.ZodType<OrdersInvoiceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrdersInvoiceRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const OrdersInvoiceRequest$outboundSchema: z.ZodType<OrdersInvoiceRequest$Outbound, z.ZodTypeDef, OrdersInvoiceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrdersInvoiceRequest$ {
    /** @deprecated use `OrdersInvoiceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrdersInvoiceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrdersInvoiceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrdersInvoiceRequest$Outbound, z.ZodTypeDef, OrdersInvoiceRequest>;
    /** @deprecated use `OrdersInvoiceRequest$Outbound` instead. */
    type Outbound = OrdersInvoiceRequest$Outbound;
}
export declare function ordersInvoiceRequestToJSON(ordersInvoiceRequest: OrdersInvoiceRequest): string;
export declare function ordersInvoiceRequestFromJSON(jsonString: string): SafeParseResult<OrdersInvoiceRequest, SDKValidationError>;
//# sourceMappingURL=ordersinvoice.d.ts.map