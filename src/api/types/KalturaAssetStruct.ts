
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetStructArgs  extends KalturaObjectBaseArgs {
    multilingualName? : KalturaTranslationToken[];
	systemName? : string;
	isProtected? : boolean;
	metaIds? : string;
	features? : string;
	pluralName? : string;
	parentId? : number;
	connectingMetaId? : number;
	connectedParentMetaId? : number;
	dynamicData? : { [key : string] : KalturaStringValue};
}


export class KalturaAssetStruct extends KalturaObjectBase {

    readonly id : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	systemName : string;
	isProtected : boolean;
	metaIds : string;
	readonly createDate : number;
	readonly updateDate : number;
	features : string;
	pluralName : string;
	parentId : number;
	connectingMetaId : number;
	connectedParentMetaId : number;
	dynamicData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaAssetStructArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStruct' },
				id : { type : 'n', readOnly : true },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				systemName : { type : 's' },
				isProtected : { type : 'b' },
				metaIds : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				features : { type : 's' },
				pluralName : { type : 's' },
				parentId : { type : 'n' },
				connectingMetaId : { type : 'n' },
				connectedParentMetaId : { type : 'n' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStruct',KalturaAssetStruct);
