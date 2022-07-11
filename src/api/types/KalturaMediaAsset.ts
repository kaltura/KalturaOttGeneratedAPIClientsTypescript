
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetInheritancePolicy } from './KalturaAssetInheritancePolicy';
import { KalturaLiveToVodInfoAsset } from './KalturaLiveToVodInfoAsset';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaMediaAssetArgs  extends KalturaAssetArgs {
    externalIds? : string;
	entryId? : string;
	deviceRuleId? : number;
	geoBlockRuleId? : number;
	status? : boolean;
	inheritancePolicy? : KalturaAssetInheritancePolicy;
	liveToVod? : KalturaLiveToVodInfoAsset;
}


export class KalturaMediaAsset extends KalturaAsset {

    externalIds : string;
	entryId : string;
	deviceRuleId : number;
	geoBlockRuleId : number;
	status : boolean;
	inheritancePolicy : KalturaAssetInheritancePolicy;
	liveToVod : KalturaLiveToVodInfoAsset;

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
				status : { type : 'b' },
				inheritancePolicy : { type : 'es', subTypeConstructor : KalturaAssetInheritancePolicy, subType : 'KalturaAssetInheritancePolicy' },
				liveToVod : { type : 'o', subTypeConstructor : KalturaLiveToVodInfoAsset, subType : 'KalturaLiveToVodInfoAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaAsset',KalturaMediaAsset);
