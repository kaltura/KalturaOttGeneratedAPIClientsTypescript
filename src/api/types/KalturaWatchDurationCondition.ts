
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseWatchCondition, KalturaBaseWatchConditionArgs } from './KalturaBaseWatchCondition';

export interface KalturaWatchDurationConditionArgs  extends KalturaBaseWatchConditionArgs {
    minDurationHours? : number;
	maxDurationHours? : number;
}


export class KalturaWatchDurationCondition extends KalturaBaseWatchCondition {

    minDurationHours : number;
	maxDurationHours : number;

    constructor(data? : KalturaWatchDurationConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchDurationCondition' },
				minDurationHours : { type : 'n' },
				maxDurationHours : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWatchDurationCondition',KalturaWatchDurationCondition);
