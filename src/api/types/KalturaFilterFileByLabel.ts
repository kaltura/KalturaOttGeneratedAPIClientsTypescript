
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByLabelArgs  extends KalturaAssetRuleActionArgs {
    labels? : string;
}


export class KalturaFilterFileByLabel extends KalturaAssetRuleAction {

    labels : string;

    constructor(data? : KalturaFilterFileByLabelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByLabel' },
				labels : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByLabel',KalturaFilterFileByLabel);
