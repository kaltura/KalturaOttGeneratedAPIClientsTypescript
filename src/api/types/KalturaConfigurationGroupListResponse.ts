
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurationGroup } from './KalturaConfigurationGroup';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaConfigurationGroupListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaConfigurationGroup[];
}


export class KalturaConfigurationGroupListResponse extends KalturaListResponse {

    objects : KalturaConfigurationGroup[];

    constructor(data? : KalturaConfigurationGroupListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaConfigurationGroupListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaConfigurationGroup, subType : 'KalturaConfigurationGroup' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurationGroupListResponse',KalturaConfigurationGroupListResponse);
