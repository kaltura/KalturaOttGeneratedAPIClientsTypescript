
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdLimitations } from './KalturaHouseholdLimitations';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdLimitationsListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHouseholdLimitations[];
}


export class KalturaHouseholdLimitationsListResponse extends KalturaListResponse {

    objects : KalturaHouseholdLimitations[];

    constructor(data? : KalturaHouseholdLimitationsListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdLimitationsListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHouseholdLimitations, subType : 'KalturaHouseholdLimitations' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdLimitationsListResponse',KalturaHouseholdLimitationsListResponse);
