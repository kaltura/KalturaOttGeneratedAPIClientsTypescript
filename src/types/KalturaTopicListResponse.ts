
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTopic } from './KalturaTopic';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaTopicListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaTopic[];
}


export class KalturaTopicListResponse extends KalturaListResponse {

    objects : KalturaTopic[];

    constructor(data? : KalturaTopicListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaTopicListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaTopic, subType : 'KalturaTopic' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopicListResponse',KalturaTopicListResponse);
