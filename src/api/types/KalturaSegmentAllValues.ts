
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSegmentValues, KalturaSegmentValuesArgs } from './KalturaSegmentValues';

export interface KalturaSegmentAllValuesArgs  extends KalturaSegmentValuesArgs {
    nameFormat? : string;
}


export class KalturaSegmentAllValues extends KalturaSegmentValues {

    nameFormat : string;

    constructor(data? : KalturaSegmentAllValuesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentAllValues' },
				nameFormat : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentAllValues',KalturaSegmentAllValues);
