
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByVideoCodecArgs  extends KalturaAssetRuleActionArgs {
    videoCodecs? : string;
}


export class KalturaFilterFileByVideoCodec extends KalturaAssetRuleAction {

    videoCodecs : string;

    constructor(data? : KalturaFilterFileByVideoCodecArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByVideoCodec' },
				videoCodecs : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByVideoCodec',KalturaFilterFileByVideoCodec);
