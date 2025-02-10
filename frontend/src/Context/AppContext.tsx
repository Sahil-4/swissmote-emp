import { createContext, PropsWithChildren, useState } from "react";

interface AppContextI {
  error: string | null;
  loading: boolean;
}

const initialValue: AppContextI = {
  error: null,
  loading: false,
};

const AppContext = createContext<AppContextI>(initialValue);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return <AppContext.Provider value={{ error, loading }}>{children}</AppContext.Provider>;
};

export { AppContext };
export type { AppContextI };
