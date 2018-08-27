
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSegmentSource } from './KalturaSegmentSource';
import { KalturaSegmentRange } from './KalturaSegmentRange';
import { KalturaBaseSegmentValue, KalturaBaseSegmentValueArgs } from './KalturaBaseSegmentValue';

export interface KalturaSegmentRangesArgs  extends KalturaBaseSegmentValueArgs {
    source? : KalturaSegmentSource;
	ranges? : KalturaSegmentRange[];
}


export class KalturaSegmentRanges extends KalturaBaseSegmentValue {

    source : KalturaSegmentSource;
	ranges : KalturaSegmentRange[];

    constructor(data? : KalturaSegmentRangesArgs)
    {
        super(data);
        if (typeof this.ranges === 'undefined') this.ranges = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentRanges' },
				source : { type : 'o', subTypeConstructor : KalturaSegmentSource, subType : 'KalturaSegmentSource' },
				ranges : { type : 'a', subTypeConstructor : KalturaSegmentRange, subType : 'KalturaSegmentRange' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentRanges',KalturaSegmentRanges);
