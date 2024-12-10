import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomFieldCreateCheckbox, CustomFieldCreateCheckbox$Outbound } from "./customfieldcreatecheckbox.js";
import { CustomFieldCreateDate, CustomFieldCreateDate$Outbound } from "./customfieldcreatedate.js";
import { CustomFieldCreateNumber, CustomFieldCreateNumber$Outbound } from "./customfieldcreatenumber.js";
import { CustomFieldCreateSelect, CustomFieldCreateSelect$Outbound } from "./customfieldcreateselect.js";
import { CustomFieldCreateText, CustomFieldCreateText$Outbound } from "./customfieldcreatetext.js";
export type CustomFieldCreate = (CustomFieldCreateCheckbox & {
    type: "checkbox";
}) | (CustomFieldCreateDate & {
    type: "date";
}) | (CustomFieldCreateNumber & {
    type: "number";
}) | (CustomFieldCreateSelect & {
    type: "select";
}) | (CustomFieldCreateText & {
    type: "text";
});
/** @internal */
export declare const CustomFieldCreate$inboundSchema: z.ZodType<CustomFieldCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldCreate$Outbound = (CustomFieldCreateCheckbox$Outbound & {
    type: "checkbox";
}) | (CustomFieldCreateDate$Outbound & {
    type: "date";
}) | (CustomFieldCreateNumber$Outbound & {
    type: "number";
}) | (CustomFieldCreateSelect$Outbound & {
    type: "select";
}) | (CustomFieldCreateText$Outbound & {
    type: "text";
});
/** @internal */
export declare const CustomFieldCreate$outboundSchema: z.ZodType<CustomFieldCreate$Outbound, z.ZodTypeDef, CustomFieldCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldCreate$ {
    /** @deprecated use `CustomFieldCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldCreate$Outbound, z.ZodTypeDef, CustomFieldCreate>;
    /** @deprecated use `CustomFieldCreate$Outbound` instead. */
    type Outbound = CustomFieldCreate$Outbound;
}
export declare function customFieldCreateToJSON(customFieldCreate: CustomFieldCreate): string;
export declare function customFieldCreateFromJSON(jsonString: string): SafeParseResult<CustomFieldCreate, SDKValidationError>;
//# sourceMappingURL=customfieldcreate.d.ts.map