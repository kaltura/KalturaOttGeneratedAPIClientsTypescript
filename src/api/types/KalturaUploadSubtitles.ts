
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUploadSubtitlesArgs  extends KalturaObjectBaseArgs {
    fileName? : string;
	content? : string;
}


export class KalturaUploadSubtitles extends KalturaObjectBase {

    fileName : string;
	content : string;

    constructor(data? : KalturaUploadSubtitlesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadSubtitles' },
				fileName : { type : 's' },
				content : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUploadSubtitles',KalturaUploadSubtitles);
