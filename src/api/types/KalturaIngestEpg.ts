
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestStatus } from './KalturaIngestStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestEpgArgs  extends KalturaObjectBaseArgs {
    ingestName? : string;
	ingestFilenameExtension? : string;
	createdDate? : number;
	ingestedByUserId? : number;
	completedDate? : number;
	ingestProfileId? : number;
	status? : KalturaIngestStatus;
}


export class KalturaIngestEpg extends KalturaObjectBase {

    readonly ingestId : number;
	ingestName : string;
	ingestFilenameExtension : string;
	createdDate : number;
	ingestedByUserId : number;
	completedDate : number;
	ingestProfileId : number;
	status : KalturaIngestStatus;

    constructor(data? : KalturaIngestEpgArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestEpg' },
				ingestId : { type : 'n', readOnly : true },
				ingestName : { type : 's' },
				ingestFilenameExtension : { type : 's' },
				createdDate : { type : 'n' },
				ingestedByUserId : { type : 'n' },
				completedDate : { type : 'n' },
				ingestProfileId : { type : 'n' },
				status : { type : 'es', subTypeConstructor : KalturaIngestStatus, subType : 'KalturaIngestStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestEpg',KalturaIngestEpg);
