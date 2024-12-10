import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Schema to attach a custom field to a resource.
 */
export type AttachedCustomFieldCreate = {
    /**
     * ID of the custom field to attach.
     */
    customFieldId: string;
    /**
     * Whether the value is required for this custom field.
     */
    required: boolean;
};
/** @internal */
export declare const AttachedCustomFieldCreate$inboundSchema: z.ZodType<AttachedCustomFieldCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AttachedCustomFieldCreate$Outbound = {
    custom_field_id: string;
    required: boolean;
};
/** @internal */
export declare const AttachedCustomFieldCreate$outboundSchema: z.ZodType<AttachedCustomFieldCreate$Outbound, z.ZodTypeDef, AttachedCustomFieldCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AttachedCustomFieldCreate$ {
    /** @deprecated use `AttachedCustomFieldCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AttachedCustomFieldCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AttachedCustomFieldCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AttachedCustomFieldCreate$Outbound, z.ZodTypeDef, AttachedCustomFieldCreate>;
    /** @deprecated use `AttachedCustomFieldCreate$Outbound` instead. */
    type Outbound = AttachedCustomFieldCreate$Outbound;
}
export declare function attachedCustomFieldCreateToJSON(attachedCustomFieldCreate: AttachedCustomFieldCreate): string;
export declare function attachedCustomFieldCreateFromJSON(jsonString: string): SafeParseResult<AttachedCustomFieldCreate, SDKValidationError>;
//# sourceMappingURL=attachedcustomfieldcreate.d.ts.map