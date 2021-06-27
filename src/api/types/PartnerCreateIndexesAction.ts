
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerCreateIndexesActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'partner' action 'createIndexes'.
 *
 * Usage: Internal API !!! create ElasticSearch indexes for partner
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerCreateIndexesAction extends KalturaRequest<boolean> {

    

    constructor(data? : PartnerCreateIndexesActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'createIndexes' }
            }
        );
        return result;
    }
}

