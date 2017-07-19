
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBookmarkActionType } from './KalturaBookmarkActionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBookmarkPlayerDataArgs  extends KalturaObjectBaseArgs {
    action? : KalturaBookmarkActionType;
	averageBitrate? : number;
	totalBitrate? : number;
	currentBitrate? : number;
	fileId? : number;
}


export class KalturaBookmarkPlayerData extends KalturaObjectBase {

    action : KalturaBookmarkActionType;
	averageBitrate : number;
	totalBitrate : number;
	currentBitrate : number;
	fileId : number;

    constructor(data? : KalturaBookmarkPlayerDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBookmarkPlayerData' },
				action : { type : 'es', subTypeConstructor : KalturaBookmarkActionType, subType : 'KalturaBookmarkActionType' },
				averageBitrate : { type : 'n' },
				totalBitrate : { type : 'n' },
				currentBitrate : { type : 'n' },
				fileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBookmarkPlayerData',KalturaBookmarkPlayerData);
