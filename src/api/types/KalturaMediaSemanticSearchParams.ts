
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMediaSemanticSearchParamsArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaMediaSemanticSearchParams extends KalturaObjectBase {

    

    constructor(data? : KalturaMediaSemanticSearchParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaSemanticSearchParams' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaSemanticSearchParams',KalturaMediaSemanticSearchParams);
