import { calculateRewards } from "../components/RewardsCalculator";

test('purchase of $90 rewards 40 points', () => {
    expect(calculateRewards(90)).toBe(40);
});

test('purchase of $40 rewards 0 points', () => {
    expect(calculateRewards(40)).toBe(0);
});

test('purchase of $247 rewards 344 points', () => {
    expect(calculateRewards(247)).toBe(344);
});