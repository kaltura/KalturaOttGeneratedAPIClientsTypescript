
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHousehold } from './KalturaHousehold';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHousehold[];
}


export class KalturaHouseholdListResponse extends KalturaListResponse {

    objects : KalturaHousehold[];

    constructor(data? : KalturaHouseholdListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHouseholdListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHousehold, subType : 'KalturaHousehold' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdListResponse',KalturaHouseholdListResponse);
