
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionUploadJob } from './KalturaCaptionUploadJob';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetEnrichGenerateMetadataActionArgs  extends KalturaRequestArgs {
    captionUploadJobId : number;
	externalAssetIds : KalturaStringValue[];
	targetDisplayLanguage : string;
}

/**
 * Build request payload for service 'assetEnrich' action 'generateMetadata'.
 *
 * Usage: Initiate the process of metadata generation
 *
 * Server response type:         KalturaCaptionUploadJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetEnrichGenerateMetadataAction extends KalturaRequest<KalturaCaptionUploadJob> {

    captionUploadJobId : number;
	externalAssetIds : KalturaStringValue[];
	targetDisplayLanguage : string;

    constructor(data : AssetEnrichGenerateMetadataActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionUploadJob', responseConstructor : KalturaCaptionUploadJob  });
        if (typeof this.externalAssetIds === 'undefined') this.externalAssetIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetenrich' },
				action : { type : 'c', default : 'generateMetadata' },
				captionUploadJobId : { type : 'n' },
				externalAssetIds : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				targetDisplayLanguage : { type : 's' }
            }
        );
        return result;
    }
}

