
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentFieldType } from './KalturaContentFieldType';
import { KalturaSegmentSource, KalturaSegmentSourceArgs } from './KalturaSegmentSource';

export interface KalturaContentSourceArgs  extends KalturaSegmentSourceArgs {
    type? : KalturaContentFieldType;
	field? : string;
}


export class KalturaContentSource extends KalturaSegmentSource {

    type : KalturaContentFieldType;
	field : string;

    constructor(data? : KalturaContentSourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContentSource' },
				type : { type : 'es', subTypeConstructor : KalturaContentFieldType, subType : 'KalturaContentFieldType' },
				field : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaContentSource',KalturaContentSource);
