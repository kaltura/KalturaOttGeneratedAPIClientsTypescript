
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadAssetResultArgs  extends KalturaBulkUploadResultArgs {
    
}


export class KalturaBulkUploadAssetResult extends KalturaBulkUploadResult {

    readonly type : number;
	readonly externalId : string;

    constructor(data? : KalturaBulkUploadAssetResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadAssetResult' },
				type : { type : 'n', readOnly : true },
				externalId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadAssetResult',KalturaBulkUploadAssetResult);
