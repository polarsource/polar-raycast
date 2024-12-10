import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Properties available to subscribers for a benefit of type `github_repository`.
 */
export type BenefitGitHubRepositorySubscriberProperties = {
    /**
     * The owner of the repository.
     */
    repositoryOwner: string;
    /**
     * The name of the repository.
     */
    repositoryName: string;
};
/** @internal */
export declare const BenefitGitHubRepositorySubscriberProperties$inboundSchema: z.ZodType<BenefitGitHubRepositorySubscriberProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitGitHubRepositorySubscriberProperties$Outbound = {
    repository_owner: string;
    repository_name: string;
};
/** @internal */
export declare const BenefitGitHubRepositorySubscriberProperties$outboundSchema: z.ZodType<BenefitGitHubRepositorySubscriberProperties$Outbound, z.ZodTypeDef, BenefitGitHubRepositorySubscriberProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitGitHubRepositorySubscriberProperties$ {
    /** @deprecated use `BenefitGitHubRepositorySubscriberProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitGitHubRepositorySubscriberProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitGitHubRepositorySubscriberProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitGitHubRepositorySubscriberProperties$Outbound, z.ZodTypeDef, BenefitGitHubRepositorySubscriberProperties>;
    /** @deprecated use `BenefitGitHubRepositorySubscriberProperties$Outbound` instead. */
    type Outbound = BenefitGitHubRepositorySubscriberProperties$Outbound;
}
export declare function benefitGitHubRepositorySubscriberPropertiesToJSON(benefitGitHubRepositorySubscriberProperties: BenefitGitHubRepositorySubscriberProperties): string;
export declare function benefitGitHubRepositorySubscriberPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitGitHubRepositorySubscriberProperties, SDKValidationError>;
//# sourceMappingURL=benefitgithubrepositorysubscriberproperties.d.ts.map