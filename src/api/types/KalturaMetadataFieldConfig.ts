
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataUpdateOperation } from './KalturaMetadataUpdateOperation';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetadataFieldConfigArgs  extends KalturaObjectBaseArgs {
    systemName? : string;
	operation? : KalturaMetadataUpdateOperation;
}


export class KalturaMetadataFieldConfig extends KalturaObjectBase {

    systemName : string;
	operation : KalturaMetadataUpdateOperation;

    constructor(data? : KalturaMetadataFieldConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataFieldConfig' },
				systemName : { type : 's' },
				operation : { type : 'es', subTypeConstructor : KalturaMetadataUpdateOperation, subType : 'KalturaMetadataUpdateOperation' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataFieldConfig',KalturaMetadataFieldConfig);
