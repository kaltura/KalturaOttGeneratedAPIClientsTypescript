
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaFileStreamerType } from './KalturaMediaFileStreamerType';
import { KalturaMediaFileTypeQuality } from './KalturaMediaFileTypeQuality';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMediaFileTypeArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	status? : boolean;
	isTrailer? : boolean;
	streamerType? : KalturaMediaFileStreamerType;
	drmProfileId? : number;
	quality? : KalturaMediaFileTypeQuality;
	videoCodecs? : string;
	audioCodecs? : string;
	dynamicDataKeys? : string;
}


export class KalturaMediaFileType extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	status : boolean;
	readonly createDate : number;
	readonly updateDate : number;
	isTrailer : boolean;
	streamerType : KalturaMediaFileStreamerType;
	drmProfileId : number;
	quality : KalturaMediaFileTypeQuality;
	videoCodecs : string;
	audioCodecs : string;
	dynamicDataKeys : string;

    constructor(data? : KalturaMediaFileTypeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFileType' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				status : { type : 'b' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				isTrailer : { type : 'b' },
				streamerType : { type : 'es', subTypeConstructor : KalturaMediaFileStreamerType, subType : 'KalturaMediaFileStreamerType' },
				drmProfileId : { type : 'n' },
				quality : { type : 'es', subTypeConstructor : KalturaMediaFileTypeQuality, subType : 'KalturaMediaFileTypeQuality' },
				videoCodecs : { type : 's' },
				audioCodecs : { type : 's' },
				dynamicDataKeys : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaFileType',KalturaMediaFileType);
