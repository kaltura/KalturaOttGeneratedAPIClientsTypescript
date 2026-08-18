
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialSetSecretResponseArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSocialSetSecretResponse extends KalturaObjectBase {

    readonly secretSet : boolean;

    constructor(data? : KalturaSocialSetSecretResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialSetSecretResponse' },
				secretSet : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialSetSecretResponse',KalturaSocialSetSecretResponse);
