
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaProgramAssetArgs  extends KalturaAssetArgs {
    epgChannelId? : number;
	relatedMediaId? : number;
	crid? : string;
	enableCdvr? : boolean;
	enableCatchUp? : boolean;
	enableStartOver? : boolean;
	enableTrickPlay? : boolean;
}


export class KalturaProgramAsset extends KalturaAsset {

    epgChannelId : number;
	readonly epgId : string;
	relatedMediaId : number;
	crid : string;
	readonly linearAssetId : number;
	enableCdvr : boolean;
	enableCatchUp : boolean;
	enableStartOver : boolean;
	enableTrickPlay : boolean;

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
				epgId : { type : 's', readOnly : true },
				relatedMediaId : { type : 'n' },
				crid : { type : 's' },
				linearAssetId : { type : 'n', readOnly : true },
				enableCdvr : { type : 'b' },
				enableCatchUp : { type : 'b' },
				enableStartOver : { type : 'b' },
				enableTrickPlay : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAsset',KalturaProgramAsset);
