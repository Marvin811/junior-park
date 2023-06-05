import { useTypedSelector } from "./userTypedSelectors";

export const useAuth = () => useTypedSelector((state) => state.user);
