import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Assignee = {
    id: number;
    login: string;
    htmlUrl: string;
    avatarUrl: string;
};
/** @internal */
export declare const Assignee$inboundSchema: z.ZodType<Assignee, z.ZodTypeDef, unknown>;
/** @internal */
export type Assignee$Outbound = {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
};
/** @internal */
export declare const Assignee$outboundSchema: z.ZodType<Assignee$Outbound, z.ZodTypeDef, Assignee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Assignee$ {
    /** @deprecated use `Assignee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Assignee, z.ZodTypeDef, unknown>;
    /** @deprecated use `Assignee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Assignee$Outbound, z.ZodTypeDef, Assignee>;
    /** @deprecated use `Assignee$Outbound` instead. */
    type Outbound = Assignee$Outbound;
}
export declare function assigneeToJSON(assignee: Assignee): string;
export declare function assigneeFromJSON(jsonString: string): SafeParseResult<Assignee, SDKValidationError>;
//# sourceMappingURL=assignee.d.ts.map