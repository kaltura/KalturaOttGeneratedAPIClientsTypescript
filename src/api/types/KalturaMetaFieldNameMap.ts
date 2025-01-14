
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetaFieldNameMapArgs  extends KalturaObjectBaseArgs {
    genre? : string;
	sentiment? : string;
	shortDescription? : string;
	longDescription? : string;
	oneLiner? : string;
	keywords? : string;
}


export class KalturaMetaFieldNameMap extends KalturaObjectBase {

    genre : string;
	sentiment : string;
	shortDescription : string;
	longDescription : string;
	oneLiner : string;
	keywords : string;

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
				sentiment : { type : 's' },
				shortDescription : { type : 's' },
				longDescription : { type : 's' },
				oneLiner : { type : 's' },
				keywords : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetaFieldNameMap',KalturaMetaFieldNameMap);
