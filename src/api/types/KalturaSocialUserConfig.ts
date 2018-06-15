
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaActionPermissionItem } from './KalturaActionPermissionItem';
import { KalturaSocialConfig, KalturaSocialConfigArgs } from './KalturaSocialConfig';

export interface KalturaSocialUserConfigArgs  extends KalturaSocialConfigArgs {
    actionPermissionItems? : KalturaActionPermissionItem[];
}


export class KalturaSocialUserConfig extends KalturaSocialConfig {

    actionPermissionItems : KalturaActionPermissionItem[];

    constructor(data? : KalturaSocialUserConfigArgs)
    {
        super(data);
        if (typeof this.actionPermissionItems === 'undefined') this.actionPermissionItems = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialUserConfig' },
				actionPermissionItems : { type : 'a', subTypeConstructor : KalturaActionPermissionItem, subType : 'KalturaActionPermissionItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialUserConfig',KalturaSocialUserConfig);
