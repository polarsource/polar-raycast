import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomFieldCheckbox, CustomFieldCheckbox$Outbound } from "./customfieldcheckbox.js";
import { CustomFieldDate, CustomFieldDate$Outbound } from "./customfielddate.js";
import { CustomFieldNumber, CustomFieldNumber$Outbound } from "./customfieldnumber.js";
import { CustomFieldSelect, CustomFieldSelect$Outbound } from "./customfieldselect.js";
import { CustomFieldText, CustomFieldText$Outbound } from "./customfieldtext.js";
export type CustomField = (CustomFieldCheckbox & {
    type: "checkbox";
}) | (CustomFieldDate & {
    type: "date";
}) | (CustomFieldNumber & {
    type: "number";
}) | (CustomFieldSelect & {
    type: "select";
}) | (CustomFieldText & {
    type: "text";
});
/** @internal */
export declare const CustomField$inboundSchema: z.ZodType<CustomField, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomField$Outbound = (CustomFieldCheckbox$Outbound & {
    type: "checkbox";
}) | (CustomFieldDate$Outbound & {
    type: "date";
}) | (CustomFieldNumber$Outbound & {
    type: "number";
}) | (CustomFieldSelect$Outbound & {
    type: "select";
}) | (CustomFieldText$Outbound & {
    type: "text";
});
/** @internal */
export declare const CustomField$outboundSchema: z.ZodType<CustomField$Outbound, z.ZodTypeDef, CustomField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomField$ {
    /** @deprecated use `CustomField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomField, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomField$Outbound, z.ZodTypeDef, CustomField>;
    /** @deprecated use `CustomField$Outbound` instead. */
    type Outbound = CustomField$Outbound;
}
export declare function customFieldToJSON(customField: CustomField): string;
export declare function customFieldFromJSON(jsonString: string): SafeParseResult<CustomField, SDKValidationError>;
//# sourceMappingURL=customfield.d.ts.map