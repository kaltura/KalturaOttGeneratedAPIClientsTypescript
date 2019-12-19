
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdSegmentArgs  extends KalturaObjectBaseArgs {
    householdId? : number;
	householdId? : number;
	blockingSegmentIds? : string;
}


export class KalturaHouseholdSegment extends KalturaObjectBase {

    householdId : number;
	householdId : number;
	blockingSegmentIds : string;

    constructor(data? : KalturaHouseholdSegmentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdSegment' },
				householdId : { type : 'n' },
				householdId : { type : 'n' },
				blockingSegmentIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdSegment',KalturaHouseholdSegment);
