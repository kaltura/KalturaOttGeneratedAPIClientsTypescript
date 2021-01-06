
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLongValue } from './KalturaLongValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCategoryManagementArgs  extends KalturaObjectBaseArgs {
    defaultTreeId? : number;
	deviceFamilyToCategoryTree? : { [key : string] : KalturaLongValue};
}


export class KalturaCategoryManagement extends KalturaObjectBase {

    defaultTreeId : number;
	deviceFamilyToCategoryTree : { [key : string] : KalturaLongValue};

    constructor(data? : KalturaCategoryManagementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryManagement' },
				defaultTreeId : { type : 'n' },
				deviceFamilyToCategoryTree : { type : 'm', subTypeConstructor : KalturaLongValue, subType : 'KalturaLongValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryManagement',KalturaCategoryManagement);
