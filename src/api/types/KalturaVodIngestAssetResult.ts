
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVodIngestAssetResultStatus } from './KalturaVodIngestAssetResultStatus';
import { KalturaVodIngestAssetResultErrorMessage } from './KalturaVodIngestAssetResultErrorMessage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVodIngestAssetResultArgs  extends KalturaObjectBaseArgs {
    assetName? : string;
	shopAssetUserRuleId? : number;
	fileName? : string;
	ingestDate? : number;
	status? : KalturaVodIngestAssetResultStatus;
	vodTypeSystemName? : string;
	errors? : KalturaVodIngestAssetResultErrorMessage[];
	warnings? : KalturaVodIngestAssetResultErrorMessage[];
}


export class KalturaVodIngestAssetResult extends KalturaObjectBase {

    assetName : string;
	shopAssetUserRuleId : number;
	fileName : string;
	ingestDate : number;
	status : KalturaVodIngestAssetResultStatus;
	vodTypeSystemName : string;
	errors : KalturaVodIngestAssetResultErrorMessage[];
	warnings : KalturaVodIngestAssetResultErrorMessage[];

    constructor(data? : KalturaVodIngestAssetResultArgs)
    {
        super(data);
        if (typeof this.errors === 'undefined') this.errors = [];
		if (typeof this.warnings === 'undefined') this.warnings = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVodIngestAssetResult' },
				assetName : { type : 's' },
				shopAssetUserRuleId : { type : 'n' },
				fileName : { type : 's' },
				ingestDate : { type : 'n' },
				status : { type : 'es', subTypeConstructor : KalturaVodIngestAssetResultStatus, subType : 'KalturaVodIngestAssetResultStatus' },
				vodTypeSystemName : { type : 's' },
				errors : { type : 'a', subTypeConstructor : KalturaVodIngestAssetResultErrorMessage, subType : 'KalturaVodIngestAssetResultErrorMessage' },
				warnings : { type : 'a', subTypeConstructor : KalturaVodIngestAssetResultErrorMessage, subType : 'KalturaVodIngestAssetResultErrorMessage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVodIngestAssetResult',KalturaVodIngestAssetResult);
