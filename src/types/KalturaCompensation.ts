
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCompensationType } from './KalturaCompensationType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCompensationArgs  extends KalturaObjectBaseArgs {
    compensationType? : KalturaCompensationType;
	amount? : number;
	totalRenewalIterations? : number;
	purchaseId? : number;
}


export class KalturaCompensation extends KalturaObjectBase {

    readonly id : number;
	readonly subscriptionId : number;
	compensationType : KalturaCompensationType;
	amount : number;
	totalRenewalIterations : number;
	readonly appliedRenewalIterations : number;
	purchaseId : number;

    constructor(data? : KalturaCompensationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCompensation' },
				id : { type : 'n', readOnly : true },
				subscriptionId : { type : 'n', readOnly : true },
				compensationType : { type : 'es', subTypeConstructor : KalturaCompensationType, subType : 'KalturaCompensationType' },
				amount : { type : 'n' },
				totalRenewalIterations : { type : 'n' },
				appliedRenewalIterations : { type : 'n', readOnly : true },
				purchaseId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCompensation',KalturaCompensation);
