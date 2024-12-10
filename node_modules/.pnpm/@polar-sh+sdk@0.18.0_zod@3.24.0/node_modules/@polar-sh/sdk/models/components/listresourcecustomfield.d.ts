import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomField, CustomField$Outbound } from "./customfield.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceCustomField = {
    items: Array<CustomField>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceCustomField$inboundSchema: z.ZodType<ListResourceCustomField, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceCustomField$Outbound = {
    items: Array<CustomField$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceCustomField$outboundSchema: z.ZodType<ListResourceCustomField$Outbound, z.ZodTypeDef, ListResourceCustomField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceCustomField$ {
    /** @deprecated use `ListResourceCustomField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceCustomField, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceCustomField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceCustomField$Outbound, z.ZodTypeDef, ListResourceCustomField>;
    /** @deprecated use `ListResourceCustomField$Outbound` instead. */
    type Outbound = ListResourceCustomField$Outbound;
}
export declare function listResourceCustomFieldToJSON(listResourceCustomField: ListResourceCustomField): string;
export declare function listResourceCustomFieldFromJSON(jsonString: string): SafeParseResult<ListResourceCustomField, SDKValidationError>;
//# sourceMappingURL=listresourcecustomfield.d.ts.map