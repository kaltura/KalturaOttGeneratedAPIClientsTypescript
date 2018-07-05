
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaFile } from './KalturaMediaFile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMediaFileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaMediaFile[];
}


export class KalturaMediaFileListResponse extends KalturaListResponse {

    objects : KalturaMediaFile[];

    constructor(data? : KalturaMediaFileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMediaFileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaMediaFile, subType : 'KalturaMediaFile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaFileListResponse',KalturaMediaFileListResponse);
