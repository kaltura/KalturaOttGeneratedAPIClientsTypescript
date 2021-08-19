
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByLabel, KalturaFilterFileByLabelArgs } from './KalturaFilterFileByLabel';

export interface KalturaFilterFileByLabelInDiscoveryArgs  extends KalturaFilterFileByLabelArgs {
    
}


export class KalturaFilterFileByLabelInDiscovery extends KalturaFilterFileByLabel {

    

    constructor(data? : KalturaFilterFileByLabelInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByLabelInDiscovery' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByLabelInDiscovery',KalturaFilterFileByLabelInDiscovery);
