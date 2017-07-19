
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOSSAdapterProfile } from './KalturaOSSAdapterProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaOSSAdapterProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaOSSAdapterProfile[];
}

/** 
* OSS adapter-profiles list
**/
export class KalturaOSSAdapterProfileListResponse extends KalturaListResponse {

    objects : KalturaOSSAdapterProfile[];

    constructor(data? : KalturaOSSAdapterProfileListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOSSAdapterProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaOSSAdapterProfile, subType : 'KalturaOSSAdapterProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOSSAdapterProfileListResponse',KalturaOSSAdapterProfileListResponse);
