
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaProgramAssetArgs  extends KalturaAssetArgs {
    relatedMediaId? : number;
	crid? : string;
	linearAssetId? : number;
	enableCdvr? : boolean;
	enableCatchUp? : boolean;
	enableStartOver? : boolean;
	enableTrickPlay? : boolean;
	externalOfferIds? : string;
}


export class KalturaProgramAsset extends KalturaAsset {

    readonly epgChannelId : number;
	readonly epgId : string;
	relatedMediaId : number;
	crid : string;
	linearAssetId : number;
	enableCdvr : boolean;
	enableCatchUp : boolean;
	enableStartOver : boolean;
	enableTrickPlay : boolean;
	externalOfferIds : string;

    constructor(data? : KalturaProgramAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAsset' },
				epgChannelId : { type : 'n', readOnly : true },
				epgId : { type : 's', readOnly : true },
				relatedMediaId : { type : 'n' },
				crid : { type : 's' },
				linearAssetId : { type : 'n' },
				enableCdvr : { type : 'b' },
				enableCatchUp : { type : 'b' },
				enableStartOver : { type : 'b' },
				enableTrickPlay : { type : 'b' },
				externalOfferIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAsset',KalturaProgramAsset);
