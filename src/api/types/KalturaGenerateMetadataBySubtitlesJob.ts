
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenerateMetadataStatus } from './KalturaGenerateMetadataStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenerateMetadataBySubtitlesJobArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaGenerateMetadataBySubtitlesJob extends KalturaObjectBase {

    readonly id : number;
	readonly createDate : number;
	readonly updateDate : number;
	readonly fileName : string;
	readonly status : KalturaGenerateMetadataStatus;
	readonly errorMessage : string;

    constructor(data? : KalturaGenerateMetadataBySubtitlesJobArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenerateMetadataBySubtitlesJob' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				fileName : { type : 's', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaGenerateMetadataStatus, subType : 'KalturaGenerateMetadataStatus' },
				errorMessage : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenerateMetadataBySubtitlesJob',KalturaGenerateMetadataBySubtitlesJob);
