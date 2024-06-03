import { useQuery } from "@tanstack/react-query";


export const useHTTP = (key: string, operation: Promise<any>) => {
  return useQuery({
    queryFn: () => operation,
    queryKey: [key]
  });
};
