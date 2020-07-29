
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItemFilter, KalturaPermissionItemFilterArgs } from './KalturaPermissionItemFilter';

export interface KalturaPermissionItemByApiActionFilterArgs  extends KalturaPermissionItemFilterArgs {
    serviceEqual? : string;
	actionEqual? : string;
}


export class KalturaPermissionItemByApiActionFilter extends KalturaPermissionItemFilter {

    serviceEqual : string;
	actionEqual : string;

    constructor(data? : KalturaPermissionItemByApiActionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItemByApiActionFilter' },
				serviceEqual : { type : 's' },
				actionEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionItemByApiActionFilter',KalturaPermissionItemByApiActionFilter);
