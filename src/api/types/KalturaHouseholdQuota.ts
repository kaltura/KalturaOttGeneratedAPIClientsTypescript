
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdQuotaArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaHouseholdQuota extends KalturaObjectBase {

    readonly householdId : number;
	readonly totalQuota : number;
	readonly availableQuota : number;

    constructor(data? : KalturaHouseholdQuotaArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdQuota' },
				householdId : { type : 'n', readOnly : true },
				totalQuota : { type : 'n', readOnly : true },
				availableQuota : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdQuota',KalturaHouseholdQuota);
