
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProgramSemanticSearchParams } from './KalturaProgramSemanticSearchParams';
import { KalturaMediaSemanticSearchParams } from './KalturaMediaSemanticSearchParams';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSemanticSearchParamsArgs  extends KalturaObjectBaseArgs {
    query? : string;
	refineQuery? : boolean;
	size? : number;
	programParams? : KalturaProgramSemanticSearchParams;
	mediaParams? : KalturaMediaSemanticSearchParams;
}


export class KalturaSemanticSearchParams extends KalturaObjectBase {

    query : string;
	refineQuery : boolean;
	size : number;
	programParams : KalturaProgramSemanticSearchParams;
	mediaParams : KalturaMediaSemanticSearchParams;

    constructor(data? : KalturaSemanticSearchParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSemanticSearchParams' },
				query : { type : 's' },
				refineQuery : { type : 'b' },
				size : { type : 'n' },
				programParams : { type : 'o', subTypeConstructor : KalturaProgramSemanticSearchParams, subType : 'KalturaProgramSemanticSearchParams' },
				mediaParams : { type : 'o', subTypeConstructor : KalturaMediaSemanticSearchParams, subType : 'KalturaMediaSemanticSearchParams' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSemanticSearchParams',KalturaSemanticSearchParams);
