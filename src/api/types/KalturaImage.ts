
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaImageObjectType } from './KalturaImageObjectType';
import { KalturaImageStatus } from './KalturaImageStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaImageArgs  extends KalturaObjectBaseArgs {
    imageTypeId? : number;
	imageObjectId? : number;
	imageObjectType? : KalturaImageObjectType;
}


export class KalturaImage extends KalturaObjectBase {

    readonly id : number;
	readonly version : string;
	imageTypeId : number;
	imageObjectId : number;
	imageObjectType : KalturaImageObjectType;
	readonly status : KalturaImageStatus;
	readonly url : string;
	readonly contentId : string;
	readonly isDefault : boolean;

    constructor(data? : KalturaImageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImage' },
				id : { type : 'n', readOnly : true },
				version : { type : 's', readOnly : true },
				imageTypeId : { type : 'n' },
				imageObjectId : { type : 'n' },
				imageObjectType : { type : 'es', subTypeConstructor : KalturaImageObjectType, subType : 'KalturaImageObjectType' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaImageStatus, subType : 'KalturaImageStatus' },
				url : { type : 's', readOnly : true },
				contentId : { type : 's', readOnly : true },
				isDefault : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImage',KalturaImage);
