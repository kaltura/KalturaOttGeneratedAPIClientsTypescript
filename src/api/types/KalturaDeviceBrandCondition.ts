
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDeviceBrandConditionArgs  extends KalturaConditionArgs {
    idIn? : string;
}


export class KalturaDeviceBrandCondition extends KalturaCondition {

    idIn : string;

    constructor(data? : KalturaDeviceBrandConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceBrandCondition' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceBrandCondition',KalturaDeviceBrandCondition);
