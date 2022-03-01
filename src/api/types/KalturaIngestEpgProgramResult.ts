
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestEpgProgramStatus } from './KalturaIngestEpgProgramStatus';
import { KalturaEpgIngestErrorMessage } from './KalturaEpgIngestErrorMessage';
import { KalturaMessage } from './KalturaMessage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestEpgProgramResultArgs  extends KalturaObjectBaseArgs {
    programId? : number;
	externalProgramId? : string;
	linearChannelId? : number;
	indexInFile? : number;
	startDate? : number;
	endDate? : number;
	status? : KalturaIngestEpgProgramStatus;
	errors? : KalturaEpgIngestErrorMessage[];
	warnings? : KalturaMessage[];
}


export class KalturaIngestEpgProgramResult extends KalturaObjectBase {

    programId : number;
	externalProgramId : string;
	linearChannelId : number;
	indexInFile : number;
	startDate : number;
	endDate : number;
	status : KalturaIngestEpgProgramStatus;
	errors : KalturaEpgIngestErrorMessage[];
	warnings : KalturaMessage[];

    constructor(data? : KalturaIngestEpgProgramResultArgs)
    {
        super(data);
        if (typeof this.errors === 'undefined') this.errors = [];
		if (typeof this.warnings === 'undefined') this.warnings = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestEpgProgramResult' },
				programId : { type : 'n' },
				externalProgramId : { type : 's' },
				linearChannelId : { type : 'n' },
				indexInFile : { type : 'n' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				status : { type : 'es', subTypeConstructor : KalturaIngestEpgProgramStatus, subType : 'KalturaIngestEpgProgramStatus' },
				errors : { type : 'a', subTypeConstructor : KalturaEpgIngestErrorMessage, subType : 'KalturaEpgIngestErrorMessage' },
				warnings : { type : 'a', subTypeConstructor : KalturaMessage, subType : 'KalturaMessage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestEpgProgramResult',KalturaIngestEpgProgramResult);
