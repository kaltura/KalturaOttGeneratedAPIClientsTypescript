
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSocialActionType } from './KalturaSocialActionType';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialActionArgs  extends KalturaObjectBaseArgs {
    actionType? : KalturaSocialActionType;
	time? : number;
	assetId? : number;
	assetType? : KalturaAssetType;
	url? : string;
}


export class KalturaSocialAction extends KalturaObjectBase {

    readonly id : string;
	actionType : KalturaSocialActionType;
	time : number;
	assetId : number;
	assetType : KalturaAssetType;
	url : string;

    constructor(data? : KalturaSocialActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialAction' },
				id : { type : 's', readOnly : true },
				actionType : { type : 'es', subTypeConstructor : KalturaSocialActionType, subType : 'KalturaSocialActionType' },
				time : { type : 'n' },
				assetId : { type : 'n' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialAction',KalturaSocialAction);
