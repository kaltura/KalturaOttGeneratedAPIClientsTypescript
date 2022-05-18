
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaHouseholdSegmentArgs  extends KalturaCrudObjectArgs {
    segmentId? : number;
	householdId? : number;
}


export class KalturaHouseholdSegment extends KalturaCrudObject {

    segmentId : number;
	householdId : number;

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
				segmentId : { type : 'n' },
				householdId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdSegment',KalturaHouseholdSegment);
