
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegistryResponseArgs  extends KalturaObjectBaseArgs {
    announcementId? : number;
	key? : string;
	url? : string;
}


export class KalturaRegistryResponse extends KalturaObjectBase {

    announcementId : number;
	key : string;
	url : string;

    constructor(data? : KalturaRegistryResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegistryResponse' },
				announcementId : { type : 'n' },
				key : { type : 's' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegistryResponse',KalturaRegistryResponse);
