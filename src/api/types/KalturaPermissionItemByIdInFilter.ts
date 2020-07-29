
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItemFilter, KalturaPermissionItemFilterArgs } from './KalturaPermissionItemFilter';

export interface KalturaPermissionItemByIdInFilterArgs  extends KalturaPermissionItemFilterArgs {
    idIn? : string;
}


export class KalturaPermissionItemByIdInFilter extends KalturaPermissionItemFilter {

    idIn : string;

    constructor(data? : KalturaPermissionItemByIdInFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItemByIdInFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionItemByIdInFilter',KalturaPermissionItemByIdInFilter);
