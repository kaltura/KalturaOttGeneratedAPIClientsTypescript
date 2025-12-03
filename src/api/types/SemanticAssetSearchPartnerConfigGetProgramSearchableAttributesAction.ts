
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaProgramSearchableAttributes } from './KalturaProgramSearchableAttributes';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigGetProgramSearchableAttributesActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'getProgramSearchableAttributes'.
 *
 * Usage: Retrieve the current program field configurations for semantic search
 *
 * Server response type:         KalturaProgramSearchableAttributes
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigGetProgramSearchableAttributesAction extends KalturaRequest<KalturaProgramSearchableAttributes> {

    

    constructor(data? : SemanticAssetSearchPartnerConfigGetProgramSearchableAttributesActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaProgramSearchableAttributes', responseConstructor : KalturaProgramSearchableAttributes  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'semanticassetsearchpartnerconfig' },
				action : { type : 'c', default : 'getProgramSearchableAttributes' }
            }
        );
        return result;
    }
}

