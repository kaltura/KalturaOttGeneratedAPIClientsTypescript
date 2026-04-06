
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilteringCondition } from './KalturaFilteringCondition';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigUpsertProgramFilteringConditionActionArgs  extends KalturaRequestArgs {
    filteringCondition : KalturaFilteringCondition;
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'upsertProgramFilteringCondition'.
 *
 * Usage: Update rule that controls embedding generation and search behavior for program assets
 *
 * Server response type:         KalturaFilteringCondition
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigUpsertProgramFilteringConditionAction extends KalturaRequest<KalturaFilteringCondition> {

    filteringCondition : KalturaFilteringCondition;

    constructor(data : SemanticAssetSearchPartnerConfigUpsertProgramFilteringConditionActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFilteringCondition', responseConstructor : KalturaFilteringCondition  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'semanticassetsearchpartnerconfig' },
				action : { type : 'c', default : 'upsertProgramFilteringCondition' },
				filteringCondition : { type : 'o', subTypeConstructor : KalturaFilteringCondition, subType : 'KalturaFilteringCondition' }
            }
        );
        return result;
    }
}

