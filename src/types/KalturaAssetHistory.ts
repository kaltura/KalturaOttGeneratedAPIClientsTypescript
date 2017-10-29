
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetHistoryArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaAssetHistory extends KalturaObjectBase {

    readonly assetId : number;
	readonly assetType : KalturaAssetType;
	readonly position : number;
	readonly duration : number;
	readonly watchedDate : number;
	readonly finishedWatching : boolean;

    constructor(data? : KalturaAssetHistoryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetHistory' },
				assetId : { type : 'n', readOnly : true },
				assetType : { type : 'es', readOnly : true, subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				position : { type : 'n', readOnly : true },
				duration : { type : 'n', readOnly : true },
				watchedDate : { type : 'n', readOnly : true },
				finishedWatching : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetHistory',KalturaAssetHistory);
