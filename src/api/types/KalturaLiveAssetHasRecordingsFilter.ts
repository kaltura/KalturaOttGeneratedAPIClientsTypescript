
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaLiveAssetHasRecordingsFilterArgs  extends KalturaAssetFilterArgs {
    liveAssetIdEqual? : number;
}


export class KalturaLiveAssetHasRecordingsFilter extends KalturaAssetFilter {

    liveAssetIdEqual : number;

    constructor(data? : KalturaLiveAssetHasRecordingsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveAssetHasRecordingsFilter' },
				liveAssetIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveAssetHasRecordingsFilter',KalturaLiveAssetHasRecordingsFilter);
