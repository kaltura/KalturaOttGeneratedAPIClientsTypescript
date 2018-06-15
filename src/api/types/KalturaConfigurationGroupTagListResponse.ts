
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurationGroupTag } from './KalturaConfigurationGroupTag';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaConfigurationGroupTagListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaConfigurationGroupTag[];
}


export class KalturaConfigurationGroupTagListResponse extends KalturaListResponse {

    objects : KalturaConfigurationGroupTag[];

    constructor(data? : KalturaConfigurationGroupTagListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaConfigurationGroupTagListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaConfigurationGroupTag, subType : 'KalturaConfigurationGroupTag' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurationGroupTagListResponse',KalturaConfigurationGroupTagListResponse);
