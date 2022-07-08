import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootReducer } from "../state";

export const useTypedSelector:TypedUseSelectorHook<RootReducer> = useSelector;