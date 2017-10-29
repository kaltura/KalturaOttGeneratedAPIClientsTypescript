
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMultilingualString } from './KalturaMultilingualString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetStructArgs  extends KalturaObjectBaseArgs {
    name? : string;
	multilingualName? : KalturaMultilingualString;
	systemName? : string;
	isProtected? : boolean;
	metaIds? : string;
}


export class KalturaAssetStruct extends KalturaObjectBase {

    readonly id : number;
	name : string;
	multilingualName : KalturaMultilingualString;
	systemName : string;
	isProtected : boolean;
	metaIds : string;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaAssetStructArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStruct' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				multilingualName : { type : 'o', subTypeConstructor : KalturaMultilingualString, subType : 'KalturaMultilingualString' },
				systemName : { type : 's' },
				isProtected : { type : 'b' },
				metaIds : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStruct',KalturaAssetStruct);
