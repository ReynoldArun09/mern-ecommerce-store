import { useQuery } from "@tanstack/react-query";
import { VerifyAuthApi } from "./auth-api";

export function useVerifyAuthApi() {
  return useQuery({
    queryKey: ["verify-auth"],
    queryFn: VerifyAuthApi,
  });
}
