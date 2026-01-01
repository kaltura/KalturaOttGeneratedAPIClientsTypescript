
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilteringCondition } from './KalturaFilteringCondition';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigGetProgramFilteringConditionActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'getProgramFilteringCondition'.
 *
 * Usage: Retrieve the filtering condition configuration for program assets
 *
 * Server response type:         KalturaFilteringCondition
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigGetProgramFilteringConditionAction extends KalturaRequest<KalturaFilteringCondition> {

    

    constructor(data? : SemanticAssetSearchPartnerConfigGetProgramFilteringConditionActionArgs)
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
				action : { type : 'c', default : 'getProgramFilteringCondition' }
            }
        );
        return result;
    }
}

