
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordingStatus } from './KalturaRecordingStatus';
import { KalturaRecordingType } from './KalturaRecordingType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRecordingArgs  extends KalturaObjectBaseArgs {
    assetId? : number;
	type? : KalturaRecordingType;
	viewableUntilDate? : number;
	isProtected? : boolean;
}


export class KalturaRecording extends KalturaObjectBase {

    readonly id : number;
	readonly status : KalturaRecordingStatus;
	assetId : number;
	type : KalturaRecordingType;
	viewableUntilDate : number;
	isProtected : boolean;
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
				viewableUntilDate : { type : 'n' },
				isProtected : { type : 'b' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecording',KalturaRecording);
