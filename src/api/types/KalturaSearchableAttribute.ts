
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchableAttributeArgs  extends KalturaObjectBaseArgs {
    assetStructId? : string;
	attributes? : string;
}


export class KalturaSearchableAttribute extends KalturaObjectBase {

    assetStructId : string;
	attributes : string;

    constructor(data? : KalturaSearchableAttributeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchableAttribute' },
				assetStructId : { type : 's' },
				attributes : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchableAttribute',KalturaSearchableAttribute);
