
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSegmentationType } from './KalturaSegmentationType';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SegmentationTypeUpdateActionArgs  extends KalturaRequestArgs {
    segmentationTypeId : number;
	segmentationType : KalturaSegmentationType;
}

/**
 * Build request payload for service 'segmentationType' action 'update'.
 *
 * Usage: Updates an existing segmentation type
 *
 * Server response type:         KalturaSegmentationType
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SegmentationTypeUpdateAction extends KalturaRequest<KalturaSegmentationType> {

    segmentationTypeId : number;
	segmentationType : KalturaSegmentationType;

    constructor(data : SegmentationTypeUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSegmentationType', responseConstructor : KalturaSegmentationType  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'segmentationtype' },
				action : { type : 'c', default : 'update' },
				segmentationTypeId : { type : 'n' },
				segmentationType : { type : 'o', subTypeConstructor : KalturaSegmentationType, subType : 'KalturaSegmentationType' }
            }
        );
        return result;
    }
}

