
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNotCondition, KalturaNotConditionArgs } from './KalturaNotCondition';

export interface KalturaDateConditionArgs  extends KalturaNotConditionArgs {
    startDate? : number;
	endDate? : number;
}


export class KalturaDateCondition extends KalturaNotCondition {

    startDate : number;
	endDate : number;

    constructor(data? : KalturaDateConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDateCondition' },
				startDate : { type : 'n' },
				endDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDateCondition',KalturaDateCondition);
