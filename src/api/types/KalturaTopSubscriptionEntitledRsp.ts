
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseAssetOrder } from './KalturaBaseAssetOrder';
import { KalturaRepresentativeSelectionPolicy, KalturaRepresentativeSelectionPolicyArgs } from './KalturaRepresentativeSelectionPolicy';

export interface KalturaTopSubscriptionEntitledRspArgs  extends KalturaRepresentativeSelectionPolicyArgs {
    orderBy? : KalturaBaseAssetOrder;
}


export class KalturaTopSubscriptionEntitledRsp extends KalturaRepresentativeSelectionPolicy {

    orderBy : KalturaBaseAssetOrder;

    constructor(data? : KalturaTopSubscriptionEntitledRspArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopSubscriptionEntitledRsp' },
				orderBy : { type : 'o', subTypeConstructor : KalturaBaseAssetOrder, subType : 'KalturaBaseAssetOrder' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopSubscriptionEntitledRsp',KalturaTopSubscriptionEntitledRsp);
