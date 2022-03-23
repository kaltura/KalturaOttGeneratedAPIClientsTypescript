
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryVersionState } from './KalturaCategoryVersionState';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaCategoryVersionArgs  extends KalturaOTTObjectSupportNullableArgs {
    name? : string;
	baseVersionId? : number;
	comment? : string;
}


export class KalturaCategoryVersion extends KalturaOTTObjectSupportNullable {

    readonly id : number;
	name : string;
	readonly treeId : number;
	readonly state : KalturaCategoryVersionState;
	baseVersionId : number;
	readonly categoryRootId : number;
	readonly defaultDate : number;
	readonly updaterId : number;
	comment : string;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaCategoryVersionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryVersion' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				treeId : { type : 'n', readOnly : true },
				state : { type : 'es', readOnly : true, subTypeConstructor : KalturaCategoryVersionState, subType : 'KalturaCategoryVersionState' },
				baseVersionId : { type : 'n' },
				categoryRootId : { type : 'n', readOnly : true },
				defaultDate : { type : 'n', readOnly : true },
				updaterId : { type : 'n', readOnly : true },
				comment : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryVersion',KalturaCategoryVersion);
