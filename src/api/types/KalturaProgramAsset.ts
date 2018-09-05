
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaProgramAssetArgs  extends KalturaAssetArgs {
    epgChannelId? : number;
	epgId? : string;
	relatedMediaId? : number;
	crid? : string;
	linearAssetId? : number;
}


export class KalturaProgramAsset extends KalturaAsset {

    epgChannelId : number;
	epgId : string;
	relatedMediaId : number;
	crid : string;
	linearAssetId : number;
	readonly enableCdvr : boolean;
	readonly enableCatchUp : boolean;
	readonly enableStartOver : boolean;
	readonly enableTrickPlay : boolean;

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
				epgChannelId : { type : 'n' },
				epgId : { type : 's' },
				relatedMediaId : { type : 'n' },
				crid : { type : 's' },
				linearAssetId : { type : 'n' },
				enableCdvr : { type : 'b', readOnly : true },
				enableCatchUp : { type : 'b', readOnly : true },
				enableStartOver : { type : 'b', readOnly : true },
				enableTrickPlay : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAsset',KalturaProgramAsset);
