
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMediaFileArgs  extends KalturaObjectBaseArgs {
    assetId? : number;
	type? : string;
	url? : string;
	duration? : number;
	externalId? : string;
	fileSize? : number;
}


export class KalturaMediaFile extends KalturaObjectBase {

    assetId : number;
	readonly id : number;
	type : string;
	url : string;
	duration : number;
	externalId : string;
	fileSize : number;

    constructor(data? : KalturaMediaFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFile' },
				assetId : { type : 'n' },
				id : { type : 'n', readOnly : true },
				type : { type : 's' },
				url : { type : 's' },
				duration : { type : 'n' },
				externalId : { type : 's' },
				fileSize : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaFile',KalturaMediaFile);
