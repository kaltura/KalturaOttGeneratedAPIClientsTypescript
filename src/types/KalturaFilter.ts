
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFilterArgs  extends KalturaObjectBaseArgs {
    orderBy? : string;
}


export class KalturaFilter extends KalturaObjectBase {

    orderBy : string;

    constructor(data? : KalturaFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilter' },
				orderBy : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilter',KalturaFilter);
