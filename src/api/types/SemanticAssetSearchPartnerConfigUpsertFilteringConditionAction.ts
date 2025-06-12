
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilteringCondition } from './KalturaFilteringCondition';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigUpsertFilteringConditionActionArgs  extends KalturaRequestArgs {
    filteringCondition : KalturaFilteringCondition;
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'upsertFilteringCondition'.
 *
 * Usage: Adds or updates a filtering condition for asset searches
 *
 * Server response type:         KalturaFilteringCondition
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigUpsertFilteringConditionAction extends KalturaRequest<KalturaFilteringCondition> {

    filteringCondition : KalturaFilteringCondition;

    constructor(data : SemanticAssetSearchPartnerConfigUpsertFilteringConditionActionArgs)
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
				action : { type : 'c', default : 'upsertFilteringCondition' },
				filteringCondition : { type : 'o', subTypeConstructor : KalturaFilteringCondition, subType : 'KalturaFilteringCondition' }
            }
        );
        return result;
    }
}

