
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaManualCollectionAsset } from './KalturaManualCollectionAsset';
import { KalturaChannel, KalturaChannelArgs } from './KalturaChannel';

export interface KalturaManualChannelArgs  extends KalturaChannelArgs {
    mediaIds? : string;
	assets? : KalturaManualCollectionAsset[];
}


export class KalturaManualChannel extends KalturaChannel {

    mediaIds : string;
	assets : KalturaManualCollectionAsset[];

    constructor(data? : KalturaManualChannelArgs)
    {
        super(data);
        if (typeof this.assets === 'undefined') this.assets = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaManualChannel' },
				mediaIds : { type : 's' },
				assets : { type : 'a', subTypeConstructor : KalturaManualCollectionAsset, subType : 'KalturaManualCollectionAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaManualChannel',KalturaManualChannel);
