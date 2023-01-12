import { GithubProfile, Skeleton } from '@/components';
import { useQuery } from '@tanstack/react-query';
import type { UserInfo } from '@/types/GithubUserInfo';
import { prefix } from '../../constants/prefix';

export const Github = () => {
  const { data: userInfo, isFetching } = useQuery({
    queryKey: ['github-user-info'],
    queryFn: async () => {
      const res = await fetch(`${prefix}/api/github/user_info/powerfulyang`);
      return (await res.json()) as UserInfo;
    },
  });
  return isFetching ? (
    <Skeleton className="h-auto p-4 px-14" />
  ) : (
    <GithubProfile className="m-auto h-auto w-3/4" userInfo={userInfo} />
  );
};
