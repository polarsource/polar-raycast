import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomFieldNumberProperties = {
    formLabel?: string | undefined;
    formHelpText?: string | undefined;
    formPlaceholder?: string | undefined;
    ge?: number | undefined;
    le?: number | undefined;
};
/** @internal */
export declare const CustomFieldNumberProperties$inboundSchema: z.ZodType<CustomFieldNumberProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldNumberProperties$Outbound = {
    form_label?: string | undefined;
    form_help_text?: string | undefined;
    form_placeholder?: string | undefined;
    ge?: number | undefined;
    le?: number | undefined;
};
/** @internal */
export declare const CustomFieldNumberProperties$outboundSchema: z.ZodType<CustomFieldNumberProperties$Outbound, z.ZodTypeDef, CustomFieldNumberProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldNumberProperties$ {
    /** @deprecated use `CustomFieldNumberProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldNumberProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldNumberProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldNumberProperties$Outbound, z.ZodTypeDef, CustomFieldNumberProperties>;
    /** @deprecated use `CustomFieldNumberProperties$Outbound` instead. */
    type Outbound = CustomFieldNumberProperties$Outbound;
}
export declare function customFieldNumberPropertiesToJSON(customFieldNumberProperties: CustomFieldNumberProperties): string;
export declare function customFieldNumberPropertiesFromJSON(jsonString: string): SafeParseResult<CustomFieldNumberProperties, SDKValidationError>;
//# sourceMappingURL=customfieldnumberproperties.d.ts.map