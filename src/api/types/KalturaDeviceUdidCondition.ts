
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDeviceUdidConditionArgs  extends KalturaConditionArgs {
    udidIn? : string;
}


export class KalturaDeviceUdidCondition extends KalturaCondition {

    udidIn : string;

    constructor(data? : KalturaDeviceUdidConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceUdidCondition' },
				udidIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceUdidCondition',KalturaDeviceUdidCondition);
