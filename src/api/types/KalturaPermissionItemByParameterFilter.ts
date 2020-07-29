
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItemFilter, KalturaPermissionItemFilterArgs } from './KalturaPermissionItemFilter';

export interface KalturaPermissionItemByParameterFilterArgs  extends KalturaPermissionItemFilterArgs {
    parameterEqual? : string;
	objectEqual? : string;
}


export class KalturaPermissionItemByParameterFilter extends KalturaPermissionItemFilter {

    parameterEqual : string;
	objectEqual : string;

    constructor(data? : KalturaPermissionItemByParameterFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItemByParameterFilter' },
				parameterEqual : { type : 's' },
				objectEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionItemByParameterFilter',KalturaPermissionItemByParameterFilter);
