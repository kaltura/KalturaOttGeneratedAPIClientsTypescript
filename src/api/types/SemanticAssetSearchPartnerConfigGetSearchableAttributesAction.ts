
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchableAttributes } from './KalturaSearchableAttributes';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigGetSearchableAttributesActionArgs  extends KalturaRequestArgs {
    assetStructId : number;
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'getSearchableAttributes'.
 *
 * Usage: Retrieve the current field configurations for semantic search
 *
 * Server response type:         KalturaSearchableAttributes
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigGetSearchableAttributesAction extends KalturaRequest<KalturaSearchableAttributes> {

    assetStructId : number;

    constructor(data : SemanticAssetSearchPartnerConfigGetSearchableAttributesActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSearchableAttributes', responseConstructor : KalturaSearchableAttributes  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'semanticassetsearchpartnerconfig' },
				action : { type : 'c', default : 'getSearchableAttributes' },
				assetStructId : { type : 'n' }
            }
        );
        return result;
    }
}

