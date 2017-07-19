
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegistrySettingsArgs  extends KalturaObjectBaseArgs {
    key? : string;
	value? : string;
}


export class KalturaRegistrySettings extends KalturaObjectBase {

    key : string;
	value : string;

    constructor(data? : KalturaRegistrySettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegistrySettings' },
				key : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegistrySettings',KalturaRegistrySettings);
