
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadProgramAssetResult } from './KalturaBulkUploadProgramAssetResult';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadLiveAssetResultArgs  extends KalturaBulkUploadResultArgs {
    
}


export class KalturaBulkUploadLiveAssetResult extends KalturaBulkUploadResult {

    readonly id : number;
	readonly externalEpgIngestId : string;
	readonly programs : KalturaBulkUploadProgramAssetResult[];

    constructor(data? : KalturaBulkUploadLiveAssetResultArgs)
    {
        super(data);
        if (typeof this.programs === 'undefined') this.programs = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadLiveAssetResult' },
				id : { type : 'n', readOnly : true },
				externalEpgIngestId : { type : 's', readOnly : true },
				programs : { type : 'a', readOnly : true, subTypeConstructor : KalturaBulkUploadProgramAssetResult, subType : 'KalturaBulkUploadProgramAssetResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadLiveAssetResult',KalturaBulkUploadLiveAssetResult);
