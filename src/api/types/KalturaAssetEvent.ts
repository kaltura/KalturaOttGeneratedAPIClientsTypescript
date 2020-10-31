
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventObject, KalturaEventObjectArgs } from './KalturaEventObject';

export interface KalturaAssetEventArgs  extends KalturaEventObjectArgs {
    
}


export class KalturaAssetEvent extends KalturaEventObject {

    readonly userId : number;
	readonly assetId : number;
	readonly type : number;
	readonly externalId : string;

    constructor(data? : KalturaAssetEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetEvent' },
				userId : { type : 'n', readOnly : true },
				assetId : { type : 'n', readOnly : true },
				type : { type : 'n', readOnly : true },
				externalId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetEvent',KalturaAssetEvent);
