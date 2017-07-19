
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRegistrySettings } from './KalturaRegistrySettings';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRegistrySettingsListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaRegistrySettings[];
}

/** 
* List of registry settings.
**/
export class KalturaRegistrySettingsListResponse extends KalturaListResponse {

    objects : KalturaRegistrySettings[];

    constructor(data? : KalturaRegistrySettingsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaRegistrySettingsListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaRegistrySettings, subType : 'KalturaRegistrySettings' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegistrySettingsListResponse',KalturaRegistrySettingsListResponse);
