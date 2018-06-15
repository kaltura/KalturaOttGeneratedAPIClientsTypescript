
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileDeleteActionArgs  extends KalturaRequestArgs {
    ossAdapterId : number;
}

/**
 * Build request payload for service 'ossAdapterProfile' action 'delete'.
 *
 * Usage: Delete OSS adapter by OSS adapter id
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OssAdapterProfileDeleteAction extends KalturaRequest<boolean> {

    ossAdapterId : number;

    constructor(data : OssAdapterProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ossadapterprofile' },
				action : { type : 'c', default : 'delete' },
				ossAdapterId : { type : 'n' }
            }
        );
        return result;
    }
}

