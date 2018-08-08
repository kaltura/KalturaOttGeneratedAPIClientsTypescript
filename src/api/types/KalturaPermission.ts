
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPermissionArgs  extends KalturaObjectBaseArgs {
    name? : string;
	friendlyName? : string;
}


export class KalturaPermission extends KalturaObjectBase {

    readonly id : number;
	name : string;
	friendlyName : string;

    constructor(data? : KalturaPermissionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermission' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				friendlyName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermission',KalturaPermission);
