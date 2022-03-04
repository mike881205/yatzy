
const Constants = {

    Dice: [
        {
            value: 1,
            image: ''
        },
        {
            value: 2,
            image: ''
        },
        {
            value: 3,
            image: ''
        },
        {
            value: 4,
            image: ''
        },
        {
            value: 5,
            image: ''
        },
        {
            value: 6,
            image: ''
        },
    ],

    Slots: () => {
        const slots = [
            {
                value: 'Y',
                image: '',
                held: false
            },
            {
                value: 'A',
                image: '',
                held: false
            },
            {
                value: 'T',
                image: '',
                held: false
            },
            {
                value: 'Z',
                image: '',
                held: false
            },
            {
                value: 'Y',
                image: '',
                held: false
            },
        ];
        return slots;
    },

    topHands: () => {
        const hands = [
            {
                hand: 'Aces',
                used: false,
                removed: false,
                valid: false,
                value: 1,
                points: 0
            },
            {
                hand: 'Twos',
                used: false,
                removed: false,
                valid: false,
                value: 2,
                points: 0
            },
            {
                hand: 'Threes',
                used: false,
                removed: false,
                valid: false,
                value: 3,
                points: 0
            },
            {
                hand: 'Fours',
                used: false,
                removed: false,
                valid: false,
                value: 4,
                points: 0
            },
            {
                hand: 'Fives',
                used: false,
                removed: false,
                valid: false,
                value: 5,
                points: 0
            },
            {
                hand: 'Sixes',
                used: false,
                removed: false,
                valid: false,
                value: 6,
                points: 0
            },
        ];
        return hands;
    },

    bottomHands: () => {
        const hands = [
            {
                hand: '3 of a Kind',
                used: false,
                removed: false,
                valid: false,
                value: null,
                points: 0
            },
            {
                hand: '4 of a Kind',
                used: false,
                removed: false,
                valid: false,
                value: null,
                points: 0
            },
            {
                hand: 'Full House',
                used: false,
                removed: false,
                valid: false,
                value: 25,
                points: 0
            },
            {
                hand: 'Small Straight',
                used: false,
                removed: false,
                valid: false,
                value: 30,
                points: 0
            },
            {
                hand: 'Large Straight',
                used: false,
                removed: false,
                valid: false,
                value: 40,
                points: 0
            },
            {
                hand: 'Chance',
                used: false,
                removed: false,
                valid: false,
                value: null,
                points: 0
            },
            {
                hand: 'Yatzy',
                used: false,
                removed: false,
                valid: false,
                value: 50,
                points: 0
            },
            {
                hand: 'Yatzy Bonus',
                removed: false,
                valid: false,
                value: 100,
                points: 0
            }
        ];
        return hands;
    }
};

export default Constants;