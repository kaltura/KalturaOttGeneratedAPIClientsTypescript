
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPreviewModule } from './KalturaPreviewModule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPreviewModuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPreviewModule[];
}


export class KalturaPreviewModuleListResponse extends KalturaListResponse {

    objects : KalturaPreviewModule[];

    constructor(data? : KalturaPreviewModuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPreviewModuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPreviewModule, subType : 'KalturaPreviewModule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPreviewModuleListResponse',KalturaPreviewModuleListResponse);
