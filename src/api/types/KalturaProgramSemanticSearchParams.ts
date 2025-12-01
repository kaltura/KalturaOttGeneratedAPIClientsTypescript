
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaProgramSemanticSearchParamsArgs  extends KalturaObjectBaseArgs {
    endsAfter? : number;
	expiresAfter? : number;
}


export class KalturaProgramSemanticSearchParams extends KalturaObjectBase {

    endsAfter : number;
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
				endsAfter : { type : 'n' },
				expiresAfter : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramSemanticSearchParams',KalturaProgramSemanticSearchParams);
