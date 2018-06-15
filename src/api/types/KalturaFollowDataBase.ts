
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFollowDataBaseArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaFollowDataBase extends KalturaObjectBase {

    readonly announcementId : number;
	readonly status : number;
	readonly title : string;
	readonly timestamp : number;
	readonly followPhrase : string;

    constructor(data? : KalturaFollowDataBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFollowDataBase' },
				announcementId : { type : 'n', readOnly : true },
				status : { type : 'n', readOnly : true },
				title : { type : 's', readOnly : true },
				timestamp : { type : 'n', readOnly : true },
				followPhrase : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFollowDataBase',KalturaFollowDataBase);
