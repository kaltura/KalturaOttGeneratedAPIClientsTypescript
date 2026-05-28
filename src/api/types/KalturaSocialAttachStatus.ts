
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialAttachStatusArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSocialAttachStatus extends KalturaObjectBase {

    readonly attached : boolean;

    constructor(data? : KalturaSocialAttachStatusArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialAttachStatus' },
				attached : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialAttachStatus',KalturaSocialAttachStatus);
