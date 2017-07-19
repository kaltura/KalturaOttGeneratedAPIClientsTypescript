
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermission, KalturaPermissionArgs } from './KalturaPermission';

export interface KalturaGroupPermissionArgs  extends KalturaPermissionArgs {
    group? : string;
}


export class KalturaGroupPermission extends KalturaPermission {

    group : string;

    constructor(data? : KalturaGroupPermissionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroupPermission' },
				group : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroupPermission',KalturaGroupPermission);
