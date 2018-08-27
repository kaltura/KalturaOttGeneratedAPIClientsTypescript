
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SegmentationTypeDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'segmentationType' action 'delete'.
 *
 * Usage:
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SegmentationTypeDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : SegmentationTypeDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'segmentationtype' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

