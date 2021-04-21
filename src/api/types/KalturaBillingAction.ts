

export enum KalturaBillingAction {
    cancelSubscriptionOrder = 'cancel_subscription_order',
	purchase = 'purchase',
	renewCanceledSubscription = 'renew_canceled_subscription',
	renewPayment = 'renew_payment',
	subscriptionDateChanged = 'subscription_date_changed',
	unknown = 'unknown'
}