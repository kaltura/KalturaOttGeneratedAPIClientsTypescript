
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetStructArgs  extends KalturaObjectBaseArgs {
    name? : string;
	multilingualName? : KalturaTranslationToken[];
	systemName? : string;
	isProtected? : boolean;
	metaIds? : string;
	features? : string;
	pluralName? : string;
	parentId? : number;
	connectingMetaId? : number;
	connectedParentMetaId? : number;
}


export class KalturaAssetStruct extends KalturaObjectBase {

    readonly id : number;
	name : string;
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
				name : { type : 's' },
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
				connectedParentMetaId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStruct',KalturaAssetStruct);
