
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkResponseObjectArgs  extends KalturaObjectBaseArgs {
    isSuccess? : boolean;
}


export class KalturaBulkResponseObject extends KalturaObjectBase {

    isSuccess : boolean;

    constructor(data? : KalturaBulkResponseObjectArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkResponseObject' },
				isSuccess : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkResponseObject',KalturaBulkResponseObject);
