
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerConfiguration } from './KalturaPartnerConfiguration';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPartnerConfigurationListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPartnerConfiguration[];
}


export class KalturaPartnerConfigurationListResponse extends KalturaListResponse {

    objects : KalturaPartnerConfiguration[];

    constructor(data? : KalturaPartnerConfigurationListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPartnerConfigurationListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPartnerConfiguration, subType : 'KalturaPartnerConfiguration' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerConfigurationListResponse',KalturaPartnerConfigurationListResponse);
