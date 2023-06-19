import { useTypedSelector } from "./userTypedSelectors";


export const useCart = () => useTypedSelector(state => state.cart)

