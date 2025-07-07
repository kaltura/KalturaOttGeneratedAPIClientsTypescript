
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkResponseItem } from './KalturaBulkResponseItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkPlaybackContextResponseArgs  extends KalturaObjectBaseArgs {
    items? : KalturaBulkResponseItem[];
	totalCount? : number;
}


export class KalturaBulkPlaybackContextResponse extends KalturaObjectBase {

    items : KalturaBulkResponseItem[];
	totalCount : number;

    constructor(data? : KalturaBulkPlaybackContextResponseArgs)
    {
        super(data);
        if (typeof this.items === 'undefined') this.items = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkPlaybackContextResponse' },
				items : { type : 'a', subTypeConstructor : KalturaBulkResponseItem, subType : 'KalturaBulkResponseItem' },
				totalCount : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkPlaybackContextResponse',KalturaBulkPlaybackContextResponse);
