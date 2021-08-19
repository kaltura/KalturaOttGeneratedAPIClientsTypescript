
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByStreamerTypeArgs  extends KalturaAssetRuleActionArgs {
    streamerTypes? : string;
}


export class KalturaFilterFileByStreamerType extends KalturaAssetRuleAction {

    streamerTypes : string;

    constructor(data? : KalturaFilterFileByStreamerTypeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByStreamerType' },
				streamerTypes : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByStreamerType',KalturaFilterFileByStreamerType);
