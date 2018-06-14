
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnAdapterProfileDeleteActionArgs  extends KalturaRequestArgs {
    adapterId : number;
}

/**
 * Build request payload for service 'cdnAdapterProfile' action 'delete'.
 *
 * Usage: Delete CDN adapter by CDN adapter id
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CdnAdapterProfileDeleteAction extends KalturaRequest<boolean> {

    adapterId : number;

    constructor(data : CdnAdapterProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdnadapterprofile' },
				action : { type : 'c', default : 'delete' },
				adapterId : { type : 'n' }
            }
        );
        return result;
    }
}

