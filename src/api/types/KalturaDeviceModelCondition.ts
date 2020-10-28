
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDeviceModelConditionArgs  extends KalturaConditionArgs {
    regexEqual? : string;
}


export class KalturaDeviceModelCondition extends KalturaCondition {

    regexEqual : string;

    constructor(data? : KalturaDeviceModelConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceModelCondition' },
				regexEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceModelCondition',KalturaDeviceModelCondition);
