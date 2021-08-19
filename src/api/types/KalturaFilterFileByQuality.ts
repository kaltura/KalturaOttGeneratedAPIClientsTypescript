
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByQualityArgs  extends KalturaAssetRuleActionArgs {
    qualities? : string;
}


export class KalturaFilterFileByQuality extends KalturaAssetRuleAction {

    qualities : string;

    constructor(data? : KalturaFilterFileByQualityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQuality' },
				qualities : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByQuality',KalturaFilterFileByQuality);
