
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetaFieldNameMapArgs  extends KalturaObjectBaseArgs {
    genre? : string;
	subGenre? : string;
	sentiment? : string;
	suggestedTitle? : string;
	description? : string;
	oneLiner? : string;
	keywords? : string;
	sensitiveContent? : string;
}


export class KalturaMetaFieldNameMap extends KalturaObjectBase {

    genre : string;
	subGenre : string;
	sentiment : string;
	suggestedTitle : string;
	description : string;
	oneLiner : string;
	keywords : string;
	sensitiveContent : string;

    constructor(data? : KalturaMetaFieldNameMapArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetaFieldNameMap' },
				genre : { type : 's' },
				subGenre : { type : 's' },
				sentiment : { type : 's' },
				suggestedTitle : { type : 's' },
				description : { type : 's' },
				oneLiner : { type : 's' },
				keywords : { type : 's' },
				sensitiveContent : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetaFieldNameMap',KalturaMetaFieldNameMap);
