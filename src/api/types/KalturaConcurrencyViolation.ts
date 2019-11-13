
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventObject, KalturaEventObjectArgs } from './KalturaEventObject';

export interface KalturaConcurrencyViolationArgs  extends KalturaEventObjectArgs {
    timestamp? : number;
	udid? : string;
	assetId? : string;
	violationRule? : string;
	householdId? : string;
	userId? : string;
}


export class KalturaConcurrencyViolation extends KalturaEventObject {

    timestamp : number;
	udid : string;
	assetId : string;
	violationRule : string;
	householdId : string;
	userId : string;

    constructor(data? : KalturaConcurrencyViolationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConcurrencyViolation' },
				timestamp : { type : 'n' },
				udid : { type : 's' },
				assetId : { type : 's' },
				violationRule : { type : 's' },
				householdId : { type : 's' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConcurrencyViolation',KalturaConcurrencyViolation);
