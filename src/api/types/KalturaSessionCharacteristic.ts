
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSessionCharacteristicArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSessionCharacteristic extends KalturaObjectBase {

    readonly id : string;
	readonly regionId : number;
	readonly userSegmentsIds : string;
	readonly userRolesIds : string;
	readonly userSessionProfilesIds : string;

    constructor(data? : KalturaSessionCharacteristicArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionCharacteristic' },
				id : { type : 's', readOnly : true },
				regionId : { type : 'n', readOnly : true },
				userSegmentsIds : { type : 's', readOnly : true },
				userRolesIds : { type : 's', readOnly : true },
				userSessionProfilesIds : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSessionCharacteristic',KalturaSessionCharacteristic);
