
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReminderType } from './KalturaReminderType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReminderArgs  extends KalturaObjectBaseArgs {
    type? : KalturaReminderType;
}


export class KalturaReminder extends KalturaObjectBase {

    readonly name : string;
	readonly id : number;
	type : KalturaReminderType;

    constructor(data? : KalturaReminderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReminder' },
				name : { type : 's', readOnly : true },
				id : { type : 'n', readOnly : true },
				type : { type : 'es', subTypeConstructor : KalturaReminderType, subType : 'KalturaReminderType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReminder',KalturaReminder);
