import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomFieldCheckboxProperties = {
    formLabel?: string | undefined;
    formHelpText?: string | undefined;
    formPlaceholder?: string | undefined;
};
/** @internal */
export declare const CustomFieldCheckboxProperties$inboundSchema: z.ZodType<CustomFieldCheckboxProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldCheckboxProperties$Outbound = {
    form_label?: string | undefined;
    form_help_text?: string | undefined;
    form_placeholder?: string | undefined;
};
/** @internal */
export declare const CustomFieldCheckboxProperties$outboundSchema: z.ZodType<CustomFieldCheckboxProperties$Outbound, z.ZodTypeDef, CustomFieldCheckboxProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldCheckboxProperties$ {
    /** @deprecated use `CustomFieldCheckboxProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldCheckboxProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldCheckboxProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldCheckboxProperties$Outbound, z.ZodTypeDef, CustomFieldCheckboxProperties>;
    /** @deprecated use `CustomFieldCheckboxProperties$Outbound` instead. */
    type Outbound = CustomFieldCheckboxProperties$Outbound;
}
export declare function customFieldCheckboxPropertiesToJSON(customFieldCheckboxProperties: CustomFieldCheckboxProperties): string;
export declare function customFieldCheckboxPropertiesFromJSON(jsonString: string): SafeParseResult<CustomFieldCheckboxProperties, SDKValidationError>;
//# sourceMappingURL=customfieldcheckboxproperties.d.ts.map