
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaHouseholdUserFilterArgs  extends KalturaFilterArgs {
    householdIdEqual? : number;
}


export class KalturaHouseholdUserFilter extends KalturaFilter {

    householdIdEqual : number;

    constructor(data? : KalturaHouseholdUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdUserFilter' },
				householdIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdUserFilter',KalturaHouseholdUserFilter);
