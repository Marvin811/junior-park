import { errorCatch } from "@/api/api.helper";
import { UserService } from "@/services/user.service";
import { IFullUser } from "@/types/user.types";
import { useQuery } from "@tanstack/react-query";
import { error } from "console";

export const useProfile = () => {
  const { data } = useQuery(["get profile"], () => UserService.getProfile(), {
    select: ({ data }) => data,
    onError: error => {
      console.log(errorCatch(error))
    }
  });
  return { profile: data || ({} as IFullUser) };
};
