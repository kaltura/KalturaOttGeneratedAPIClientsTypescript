
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLabel } from './KalturaLabel';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaLabelListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaLabel[];
}


export class KalturaLabelListResponse extends KalturaListResponse {

    objects : KalturaLabel[];

    constructor(data? : KalturaLabelListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaLabelListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaLabel, subType : 'KalturaLabel' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLabelListResponse',KalturaLabelListResponse);
