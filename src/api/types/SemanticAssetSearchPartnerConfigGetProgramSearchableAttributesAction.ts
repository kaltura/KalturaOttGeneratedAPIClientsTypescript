
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigGetProgramSearchableAttributesActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'getProgramSearchableAttributes'.
 *
 * Usage: Retrieve the current program field configurations for semantic search
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigGetProgramSearchableAttributesAction extends KalturaRequest<string> {

    

    constructor(data? : SemanticAssetSearchPartnerConfigGetProgramSearchableAttributesActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
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

