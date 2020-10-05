

export enum KalturaBillingAction {
    cancelSubscriptionOrder = 'cancel_subscription_order',
	pending = 'pending',
	purchase = 'purchase',
	renewCanceledSubscription = 'renew_canceled_subscription',
	renewPayment = 'renew_payment',
	subscriptionDateChanged = 'subscription_date_changed',
	unknown = 'unknown'
}