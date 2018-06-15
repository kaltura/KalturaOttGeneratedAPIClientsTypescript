
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCollectionFilterArgs  extends KalturaFilterArgs {
    collectionIdIn? : string;
	mediaFileIdEqual? : number;
}


export class KalturaCollectionFilter extends KalturaFilter {

    collectionIdIn : string;
	mediaFileIdEqual : number;

    constructor(data? : KalturaCollectionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollectionFilter' },
				collectionIdIn : { type : 's' },
				mediaFileIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCollectionFilter',KalturaCollectionFilter);
