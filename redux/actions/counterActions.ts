export type Action = { type: string  };

export const INCREMENT_COUNTER: string = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER: string = "DECREMENT_COUNTER";


export const incrementCounter = () => ({
   type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});
