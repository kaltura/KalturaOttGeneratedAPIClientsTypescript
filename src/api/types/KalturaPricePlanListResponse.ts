
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPricePlan } from './KalturaPricePlan';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPricePlanListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPricePlan[];
}


export class KalturaPricePlanListResponse extends KalturaListResponse {

    objects : KalturaPricePlan[];

    constructor(data? : KalturaPricePlanListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPricePlanListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPricePlan, subType : 'KalturaPricePlan' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPricePlanListResponse',KalturaPricePlanListResponse);
