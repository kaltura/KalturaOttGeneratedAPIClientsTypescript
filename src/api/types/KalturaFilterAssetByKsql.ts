
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterAssetByKsqlArgs  extends KalturaAssetRuleActionArgs {
    ksql? : string;
}


export class KalturaFilterAssetByKsql extends KalturaAssetRuleAction {

    ksql : string;

    constructor(data? : KalturaFilterAssetByKsqlArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterAssetByKsql' },
				ksql : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterAssetByKsql',KalturaFilterAssetByKsql);
