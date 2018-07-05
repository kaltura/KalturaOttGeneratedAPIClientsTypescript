
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaMediaAssetArgs  extends KalturaAssetArgs {
    externalIds? : string;
	entryId? : string;
	deviceRuleId? : number;
	geoBlockRuleId? : number;
	status? : boolean;
}


export class KalturaMediaAsset extends KalturaAsset {

    externalIds : string;
	entryId : string;
	deviceRuleId : number;
	geoBlockRuleId : number;
	status : boolean;

    constructor(data? : KalturaMediaAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaAsset' },
				externalIds : { type : 's' },
				entryId : { type : 's' },
				deviceRuleId : { type : 'n' },
				geoBlockRuleId : { type : 'n' },
				status : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaAsset',KalturaMediaAsset);
