
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadProgramAssetResultArgs  extends KalturaBulkUploadResultArgs {
    
}


export class KalturaBulkUploadProgramAssetResult extends KalturaBulkUploadResult {

    readonly programId : number;
	readonly programExternalId : string;
	readonly liveAssetId : number;

    constructor(data? : KalturaBulkUploadProgramAssetResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadProgramAssetResult' },
				programId : { type : 'n', readOnly : true },
				programExternalId : { type : 's', readOnly : true },
				liveAssetId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadProgramAssetResult',KalturaBulkUploadProgramAssetResult);
