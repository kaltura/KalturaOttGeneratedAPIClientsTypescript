
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannel } from './KalturaChannel';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaChannelListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaChannel[];
}


export class KalturaChannelListResponse extends KalturaListResponse {

    objects : KalturaChannel[];

    constructor(data? : KalturaChannelListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaChannelListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaChannel, subType : 'KalturaChannel' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelListResponse',KalturaChannelListResponse);
