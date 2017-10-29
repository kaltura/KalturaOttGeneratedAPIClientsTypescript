
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTransactionHistoryFilterArgs  extends KalturaFilterArgs {
    entityReferenceEqual? : KalturaEntityReferenceBy;
	startDateGreaterThanOrEqual? : number;
	endDateLessThanOrEqual? : number;
}


export class KalturaTransactionHistoryFilter extends KalturaFilter {

    entityReferenceEqual : KalturaEntityReferenceBy;
	startDateGreaterThanOrEqual : number;
	endDateLessThanOrEqual : number;

    constructor(data? : KalturaTransactionHistoryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTransactionHistoryFilter' },
				entityReferenceEqual : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' },
				startDateGreaterThanOrEqual : { type : 'n' },
				endDateLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTransactionHistoryFilter',KalturaTransactionHistoryFilter);
