// Subscription
import { subscriptions as userSubscription } from "../bus/users/subscriptions";
import { subscriptions as bookSubscriptions } from "../bus/books/subscriptions";

export const Subscription = {
    ...userSubscription,
    ...bookSubscriptions
};
