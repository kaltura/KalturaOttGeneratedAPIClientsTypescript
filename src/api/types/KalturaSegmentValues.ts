
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSegmentSource } from './KalturaSegmentSource';
import { KalturaSegmentValue } from './KalturaSegmentValue';
import { KalturaBaseSegmentValue, KalturaBaseSegmentValueArgs } from './KalturaBaseSegmentValue';

export interface KalturaSegmentValuesArgs  extends KalturaBaseSegmentValueArgs {
    source? : KalturaSegmentSource;
	values? : KalturaSegmentValue[];
}


export class KalturaSegmentValues extends KalturaBaseSegmentValue {

    source : KalturaSegmentSource;
	values : KalturaSegmentValue[];

    constructor(data? : KalturaSegmentValuesArgs)
    {
        super(data);
        if (typeof this.values === 'undefined') this.values = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentValues' },
				source : { type : 'o', subTypeConstructor : KalturaSegmentSource, subType : 'KalturaSegmentSource' },
				values : { type : 'a', subTypeConstructor : KalturaSegmentValue, subType : 'KalturaSegmentValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentValues',KalturaSegmentValues);
