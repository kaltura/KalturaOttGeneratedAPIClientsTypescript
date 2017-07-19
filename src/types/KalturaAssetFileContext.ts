
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetFileContextArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaAssetFileContext extends KalturaObjectBase {

    readonly viewLifeCycle : string;
	readonly fullLifeCycle : string;
	readonly isOfflinePlayBack : boolean;

    constructor(data? : KalturaAssetFileContextArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFileContext' },
				viewLifeCycle : { type : 's', readOnly : true },
				fullLifeCycle : { type : 's', readOnly : true },
				isOfflinePlayBack : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetFileContext',KalturaAssetFileContext);
