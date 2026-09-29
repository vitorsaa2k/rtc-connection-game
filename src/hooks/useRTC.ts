import { useContext } from "react";
import { RTCContext } from "../contexts/RTCContext/Context";

export const useRTC = () => {
  const context = useContext(RTCContext);
  if (!context) {
    throw new Error("useRTC must be used within an RTCContextProvider");
  }
  return context;
};
