
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordingStatus } from './KalturaRecordingStatus';
import { KalturaRecordingType } from './KalturaRecordingType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRecordingArgs  extends KalturaObjectBaseArgs {
    assetId? : number;
	type? : KalturaRecordingType;
	isProtected? : boolean;
	externalId? : string;
}


export class KalturaRecording extends KalturaObjectBase {

    readonly id : number;
	readonly status : KalturaRecordingStatus;
	assetId : number;
	type : KalturaRecordingType;
	readonly viewableUntilDate : number;
	isProtected : boolean;
	externalId : string;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaRecordingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecording' },
				id : { type : 'n', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaRecordingStatus, subType : 'KalturaRecordingStatus' },
				assetId : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaRecordingType, subType : 'KalturaRecordingType' },
				viewableUntilDate : { type : 'n', readOnly : true },
				isProtected : { type : 'b' },
				externalId : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecording',KalturaRecording);
