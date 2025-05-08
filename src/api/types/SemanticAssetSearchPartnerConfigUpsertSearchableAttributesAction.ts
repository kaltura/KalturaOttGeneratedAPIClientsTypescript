
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchableAttributes } from './KalturaSearchableAttributes';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigUpsertSearchableAttributesActionArgs  extends KalturaRequestArgs {
    attributes : KalturaSearchableAttributes;
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'upsertSearchableAttributes'.
 *
 * Usage: Adds or updates searchable attributes for a given asset structure
 *
 * Server response type:         KalturaSearchableAttributes
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigUpsertSearchableAttributesAction extends KalturaRequest<KalturaSearchableAttributes> {

    attributes : KalturaSearchableAttributes;

    constructor(data : SemanticAssetSearchPartnerConfigUpsertSearchableAttributesActionArgs)
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
				action : { type : 'c', default : 'upsertSearchableAttributes' },
				attributes : { type : 'o', subTypeConstructor : KalturaSearchableAttributes, subType : 'KalturaSearchableAttributes' }
            }
        );
        return result;
    }
}

