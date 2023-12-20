
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaChannelExternalFilterArgs  extends KalturaAssetFilterArgs {
    idEqual? : number;
	utcOffsetEqual? : number;
	freeText? : string;
}


export class KalturaChannelExternalFilter extends KalturaAssetFilter {

    idEqual : number;
	utcOffsetEqual : number;
	freeText : string;

    constructor(data? : KalturaChannelExternalFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelExternalFilter' },
				idEqual : { type : 'n' },
				utcOffsetEqual : { type : 'n' },
				freeText : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelExternalFilter',KalturaChannelExternalFilter);
