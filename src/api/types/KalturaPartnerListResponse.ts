
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartner } from './KalturaPartner';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPartnerListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPartner[];
}


export class KalturaPartnerListResponse extends KalturaListResponse {

    objects : KalturaPartner[];

    constructor(data? : KalturaPartnerListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPartnerListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPartner, subType : 'KalturaPartner' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerListResponse',KalturaPartnerListResponse);
