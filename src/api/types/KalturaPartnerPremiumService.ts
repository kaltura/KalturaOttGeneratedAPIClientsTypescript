
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerPremiumServiceArgs  extends KalturaObjectBaseArgs {
    id? : number;
	isApplied? : boolean;
}


export class KalturaPartnerPremiumService extends KalturaObjectBase {

    id : number;
	readonly name : string;
	isApplied : boolean;

    constructor(data? : KalturaPartnerPremiumServiceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerPremiumService' },
				id : { type : 'n' },
				name : { type : 's', readOnly : true },
				isApplied : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerPremiumService',KalturaPartnerPremiumService);
