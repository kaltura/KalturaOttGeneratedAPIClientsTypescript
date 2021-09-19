
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDeviceDynamicDataConditionArgs  extends KalturaConditionArgs {
    key? : string;
	value? : string;
}


export class KalturaDeviceDynamicDataCondition extends KalturaCondition {

    key : string;
	value : string;

    constructor(data? : KalturaDeviceDynamicDataConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceDynamicDataCondition' },
				key : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceDynamicDataCondition',KalturaDeviceDynamicDataCondition);
