
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNotCondition, KalturaNotConditionArgs } from './KalturaNotCondition';

export interface KalturaHeaderConditionArgs  extends KalturaNotConditionArgs {
    key? : string;
	value? : string;
}


export class KalturaHeaderCondition extends KalturaNotCondition {

    key : string;
	value : string;

    constructor(data? : KalturaHeaderConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHeaderCondition' },
				key : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHeaderCondition',KalturaHeaderCondition);
