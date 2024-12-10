import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomFieldTextProperties = {
    formLabel?: string | undefined;
    formHelpText?: string | undefined;
    formPlaceholder?: string | undefined;
    textarea?: boolean | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
};
/** @internal */
export declare const CustomFieldTextProperties$inboundSchema: z.ZodType<CustomFieldTextProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldTextProperties$Outbound = {
    form_label?: string | undefined;
    form_help_text?: string | undefined;
    form_placeholder?: string | undefined;
    textarea?: boolean | undefined;
    min_length?: number | undefined;
    max_length?: number | undefined;
};
/** @internal */
export declare const CustomFieldTextProperties$outboundSchema: z.ZodType<CustomFieldTextProperties$Outbound, z.ZodTypeDef, CustomFieldTextProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldTextProperties$ {
    /** @deprecated use `CustomFieldTextProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldTextProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldTextProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldTextProperties$Outbound, z.ZodTypeDef, CustomFieldTextProperties>;
    /** @deprecated use `CustomFieldTextProperties$Outbound` instead. */
    type Outbound = CustomFieldTextProperties$Outbound;
}
export declare function customFieldTextPropertiesToJSON(customFieldTextProperties: CustomFieldTextProperties): string;
export declare function customFieldTextPropertiesFromJSON(jsonString: string): SafeParseResult<CustomFieldTextProperties, SDKValidationError>;
//# sourceMappingURL=customfieldtextproperties.d.ts.map