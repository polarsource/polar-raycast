import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Label = {
    name: string;
    color: string;
};
/** @internal */
export declare const Label$inboundSchema: z.ZodType<Label, z.ZodTypeDef, unknown>;
/** @internal */
export type Label$Outbound = {
    name: string;
    color: string;
};
/** @internal */
export declare const Label$outboundSchema: z.ZodType<Label$Outbound, z.ZodTypeDef, Label>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Label$ {
    /** @deprecated use `Label$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Label, z.ZodTypeDef, unknown>;
    /** @deprecated use `Label$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Label$Outbound, z.ZodTypeDef, Label>;
    /** @deprecated use `Label$Outbound` instead. */
    type Outbound = Label$Outbound;
}
export declare function labelToJSON(label: Label): string;
export declare function labelFromJSON(jsonString: string): SafeParseResult<Label, SDKValidationError>;
//# sourceMappingURL=label.d.ts.map