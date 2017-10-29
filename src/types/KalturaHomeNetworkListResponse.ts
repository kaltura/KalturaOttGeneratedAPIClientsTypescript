
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHomeNetwork } from './KalturaHomeNetwork';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHomeNetworkListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHomeNetwork[];
}


export class KalturaHomeNetworkListResponse extends KalturaListResponse {

    objects : KalturaHomeNetwork[];

    constructor(data? : KalturaHomeNetworkListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHomeNetworkListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHomeNetwork, subType : 'KalturaHomeNetwork' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHomeNetworkListResponse',KalturaHomeNetworkListResponse);
