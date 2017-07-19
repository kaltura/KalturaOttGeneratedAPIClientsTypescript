
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialConfigArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* Returns social configuration for the partner
**/
export class KalturaSocialConfig extends KalturaObjectBase {

    

    constructor(data? : KalturaSocialConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialConfig' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialConfig',KalturaSocialConfig);
