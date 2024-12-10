import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomField, CustomField$Outbound } from "./customfield.js";
/**
 * Schema of a custom field attached to a resource.
 */
export type AttachedCustomField = {
    /**
     * ID of the custom field.
     */
    customFieldId: string;
    customField: CustomField;
    /**
     * Order of the custom field in the resource.
     */
    order: number;
    /**
     * Whether the value is required for this custom field.
     */
    required: boolean;
};
/** @internal */
export declare const AttachedCustomField$inboundSchema: z.ZodType<AttachedCustomField, z.ZodTypeDef, unknown>;
/** @internal */
export type AttachedCustomField$Outbound = {
    custom_field_id: string;
    custom_field: CustomField$Outbound;
    order: number;
    required: boolean;
};
/** @internal */
export declare const AttachedCustomField$outboundSchema: z.ZodType<AttachedCustomField$Outbound, z.ZodTypeDef, AttachedCustomField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AttachedCustomField$ {
    /** @deprecated use `AttachedCustomField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AttachedCustomField, z.ZodTypeDef, unknown>;
    /** @deprecated use `AttachedCustomField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AttachedCustomField$Outbound, z.ZodTypeDef, AttachedCustomField>;
    /** @deprecated use `AttachedCustomField$Outbound` instead. */
    type Outbound = AttachedCustomField$Outbound;
}
export declare function attachedCustomFieldToJSON(attachedCustomField: AttachedCustomField): string;
export declare function attachedCustomFieldFromJSON(jsonString: string): SafeParseResult<AttachedCustomField, SDKValidationError>;
//# sourceMappingURL=attachedcustomfield.d.ts.map