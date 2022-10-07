import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import moment from 'moment'
import { calculateRewards } from '../components/RewardsCalculator'
import { salesRecords } from "../data/SalesRecords";

export const mockApi = new MockAdapter(axios, { delayResponse: 2000 });

mockApi.onGet("/transactions").reply(200, {
    transactions: salesRecords
});

export const tableSort = {
    customerUp: { fn: (a, b) => {
        if (a.customer < b.customer) { return 1 }
        else return -1 }
    },
    customerDown: { fn: (a, b) => {
        if (a.customer > b.customer) { return 1 }
        else return -1 }
    },
    dateUp: { fn: (a, b) => moment(a.date) - moment(b.date) },
    dateDown: { fn: (a, b) => moment(b.date) - moment(a.date) },
    purchaseAmountUp: { fn: (a, b) => a.purchaseAmount - b.purchaseAmount },
    purchaseAmountDown: { fn: (a, b) => b.purchaseAmount - a.purchaseAmount },
    purchasesUp: { fn: (a, b) => a.purchases - b.purchases },
    purchasesDown: { fn: (a, b) => b.purchases - a.purchases },
    purchaseTotalUp: { fn: (a, b) => a.purchaseTotal - b.purchaseTotal },
    purchaseTotalDown: { fn: (a, b) => b.purchaseTotal - a.purchaseTotal },
    rewardUp: { fn: (a, b) => calculateRewards(a.purchaseAmount) - calculateRewards(b.purchaseAmount) },
    rewardDown: { fn: (a, b) => calculateRewards(b.purchaseAmount) - calculateRewards(a.purchaseAmount) },
    rewardsUp: { fn: (a, b) => a.rewards - b.rewards },
    rewardsDown: { fn: (a, b) => b.rewards - a.rewards }
}
