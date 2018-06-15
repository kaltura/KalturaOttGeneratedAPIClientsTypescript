
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaOTTUserDynamicDataArgs  extends KalturaObjectBaseArgs {
    key? : string;
	value? : KalturaStringValue;
}


export class KalturaOTTUserDynamicData extends KalturaObjectBase {

    readonly userId : string;
	key : string;
	value : KalturaStringValue;

    constructor(data? : KalturaOTTUserDynamicDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOTTUserDynamicData' },
				userId : { type : 's', readOnly : true },
				key : { type : 's' },
				value : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOTTUserDynamicData',KalturaOTTUserDynamicData);
