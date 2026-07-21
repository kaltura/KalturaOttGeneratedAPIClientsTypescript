
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaProgramSearchableAttributes } from './KalturaProgramSearchableAttributes';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigUpsertProgramSearchableAttributesActionArgs  extends KalturaRequestArgs {
    programAttributes : KalturaProgramSearchableAttributes;
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'upsertProgramSearchableAttributes'.
 *
 * Usage: Update which fields should be included in semantic search for program assets
 *
 * Server response type:         KalturaProgramSearchableAttributes
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigUpsertProgramSearchableAttributesAction extends KalturaRequest<KalturaProgramSearchableAttributes> {

    programAttributes : KalturaProgramSearchableAttributes;

    constructor(data : SemanticAssetSearchPartnerConfigUpsertProgramSearchableAttributesActionArgs)
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
				action : { type : 'c', default : 'upsertProgramSearchableAttributes' },
				programAttributes : { type : 'o', subTypeConstructor : KalturaProgramSearchableAttributes, subType : 'KalturaProgramSearchableAttributes' }
            }
        );
        return result;
    }
}

