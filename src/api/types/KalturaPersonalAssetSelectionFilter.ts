
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPersonalAssetSelectionFilterArgs  extends KalturaFilterArgs {
    slotNumberEqual? : number;
}


export class KalturaPersonalAssetSelectionFilter extends KalturaFilter {

    slotNumberEqual : number;

    constructor(data? : KalturaPersonalAssetSelectionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersonalAssetSelectionFilter' },
				slotNumberEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPersonalAssetSelectionFilter',KalturaPersonalAssetSelectionFilter);
