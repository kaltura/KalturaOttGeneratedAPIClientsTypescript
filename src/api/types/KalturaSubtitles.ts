
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubtitlesType } from './KalturaSubtitlesType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSubtitlesArgs  extends KalturaObjectBaseArgs {
    fileName? : string;
	detectedType? : KalturaSubtitlesType;
	language? : string;
}


export class KalturaSubtitles extends KalturaObjectBase {

    readonly id : number;
	readonly createDate : number;
	fileName : string;
	detectedType : KalturaSubtitlesType;
	language : string;

    constructor(data? : KalturaSubtitlesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubtitles' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				fileName : { type : 's' },
				detectedType : { type : 'es', subTypeConstructor : KalturaSubtitlesType, subType : 'KalturaSubtitlesType' },
				language : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubtitles',KalturaSubtitles);
