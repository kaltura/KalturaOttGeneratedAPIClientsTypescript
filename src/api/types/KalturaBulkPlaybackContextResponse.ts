
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkResponseItem } from './KalturaBulkResponseItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkPlaybackContextResponseArgs  extends KalturaObjectBaseArgs {
    objects? : KalturaBulkResponseItem[];
	totalCount? : number;
}


export class KalturaBulkPlaybackContextResponse extends KalturaObjectBase {

    objects : KalturaBulkResponseItem[];
	totalCount : number;

    constructor(data? : KalturaBulkPlaybackContextResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBulkPlaybackContextResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaBulkResponseItem, subType : 'KalturaBulkResponseItem' },
				totalCount : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkPlaybackContextResponse',KalturaBulkPlaybackContextResponse);
