
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaValue } from './KalturaValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDynamicDataArgs  extends KalturaObjectBaseArgs {
    key? : string;
	value? : KalturaValue;
}


export class KalturaDynamicData extends KalturaObjectBase {

    key : string;
	value : KalturaValue;

    constructor(data? : KalturaDynamicDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicData' },
				key : { type : 's' },
				value : { type : 'o', subTypeConstructor : KalturaValue, subType : 'KalturaValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicData',KalturaDynamicData);
