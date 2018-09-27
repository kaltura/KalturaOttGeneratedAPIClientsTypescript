
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetFilePpvArgs  extends KalturaObjectBaseArgs {
    assetFileId? : number;
	ppvModuleId? : number;
	startDate? : number;
	endDate? : number;
}


export class KalturaAssetFilePpv extends KalturaObjectBase {

    assetFileId : number;
	ppvModuleId : number;
	startDate : number;
	endDate : number;

    constructor(data? : KalturaAssetFilePpvArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFilePpv' },
				assetFileId : { type : 'n' },
				ppvModuleId : { type : 'n' },
				startDate : { type : 'n' },
				endDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetFilePpv',KalturaAssetFilePpv);
