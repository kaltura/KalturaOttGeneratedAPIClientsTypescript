
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaProgramSemanticSearchParamsArgs  extends KalturaObjectBaseArgs {
    endsBefore? : number;
	expiresAfter? : number;
}


export class KalturaProgramSemanticSearchParams extends KalturaObjectBase {

    endsBefore : number;
	expiresAfter : number;

    constructor(data? : KalturaProgramSemanticSearchParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramSemanticSearchParams' },
				endsBefore : { type : 'n' },
				expiresAfter : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramSemanticSearchParams',KalturaProgramSemanticSearchParams);
