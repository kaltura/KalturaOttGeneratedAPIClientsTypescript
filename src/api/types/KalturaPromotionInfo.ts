
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPromotionInfoArgs  extends KalturaObjectBaseArgs {
    campaignId? : number;
}


export class KalturaPromotionInfo extends KalturaObjectBase {

    campaignId : number;

    constructor(data? : KalturaPromotionInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPromotionInfo' },
				campaignId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPromotionInfo',KalturaPromotionInfo);
