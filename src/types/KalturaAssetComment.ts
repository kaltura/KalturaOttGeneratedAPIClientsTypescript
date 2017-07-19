
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaSocialComment, KalturaSocialCommentArgs } from './KalturaSocialComment';

export interface KalturaAssetCommentArgs  extends KalturaSocialCommentArgs {
    id? : number;
	assetId? : number;
	assetType? : KalturaAssetType;
	subHeader? : string;
}

/** 
* Asset Comment
**/
export class KalturaAssetComment extends KalturaSocialComment {

    id : number;
	assetId : number;
	assetType : KalturaAssetType;
	subHeader : string;

    constructor(data? : KalturaAssetCommentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetComment' },
				id : { type : 'n' },
				assetId : { type : 'n' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				subHeader : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetComment',KalturaAssetComment);
