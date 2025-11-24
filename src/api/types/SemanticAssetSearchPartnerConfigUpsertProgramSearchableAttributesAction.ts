
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigUpsertProgramSearchableAttributesActionArgs  extends KalturaRequestArgs {
    programAttributes : string;
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'upsertProgramSearchableAttributes'.
 *
 * Usage: Update which fields should be included in semantic search for program assets
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticAssetSearchPartnerConfigUpsertProgramSearchableAttributesAction extends KalturaRequest<string> {

    programAttributes : string;

    constructor(data : SemanticAssetSearchPartnerConfigUpsertProgramSearchableAttributesActionArgs)
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
				action : { type : 'c', default : 'upsertProgramSearchableAttributes' },
				programAttributes : { type : 's' }
            }
        );
        return result;
    }
}

