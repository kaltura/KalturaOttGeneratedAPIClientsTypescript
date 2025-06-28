
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkResponseItemArgs  extends KalturaObjectBaseArgs {
    isSuccess? : boolean;
}


export class KalturaBulkResponseItem extends KalturaObjectBase {

    isSuccess : boolean;

    constructor(data? : KalturaBulkResponseItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkResponseItem' },
				isSuccess : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkResponseItem',KalturaBulkResponseItem);
