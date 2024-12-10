import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Reactions = {
    totalCount: number;
    plusOne: number;
    minusOne: number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
};
/** @internal */
export declare const Reactions$inboundSchema: z.ZodType<Reactions, z.ZodTypeDef, unknown>;
/** @internal */
export type Reactions$Outbound = {
    total_count: number;
    plus_one: number;
    minus_one: number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
};
/** @internal */
export declare const Reactions$outboundSchema: z.ZodType<Reactions$Outbound, z.ZodTypeDef, Reactions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Reactions$ {
    /** @deprecated use `Reactions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Reactions, z.ZodTypeDef, unknown>;
    /** @deprecated use `Reactions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Reactions$Outbound, z.ZodTypeDef, Reactions>;
    /** @deprecated use `Reactions$Outbound` instead. */
    type Outbound = Reactions$Outbound;
}
export declare function reactionsToJSON(reactions: Reactions): string;
export declare function reactionsFromJSON(jsonString: string): SafeParseResult<Reactions, SDKValidationError>;
//# sourceMappingURL=reactions.d.ts.map