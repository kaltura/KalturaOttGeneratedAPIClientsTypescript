
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserSegmentArgs  extends KalturaObjectBaseArgs {
    segmentId? : number;
	segmentationTypeId? : number;
	userId? : string;
}


export class KalturaUserSegment extends KalturaObjectBase {

    segmentId : number;
	segmentationTypeId : number;
	userId : string;

    constructor(data? : KalturaUserSegmentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSegment' },
				segmentId : { type : 'n' },
				segmentationTypeId : { type : 'n' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserSegment',KalturaUserSegment);
