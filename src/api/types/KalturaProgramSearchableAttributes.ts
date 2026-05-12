
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaProgramSearchableAttributesArgs  extends KalturaObjectBaseArgs {
    attributes? : string;
}


export class KalturaProgramSearchableAttributes extends KalturaObjectBase {

    attributes : string;

    constructor(data? : KalturaProgramSearchableAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramSearchableAttributes' },
				attributes : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramSearchableAttributes',KalturaProgramSearchableAttributes);
