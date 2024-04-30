import { useMemo } from "react";
import {
  usePathname,
  useSearchParams as useNavigationSearchParams,
  useRouter,
} from "next/navigation";

const useUrlQuery = () => {
  const router = useRouter();
  const searchParams = useNavigationSearchParams();
  const pathname = usePathname();

  const QueryString = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    const DValues = {};
    for (const [key, value] of params.entries()) {
      DValues[key] = value;
    }
    return DValues;
  }, [searchParams]);

  const OpenUrl = ({ url, object }) => {
    const currentQuery = new URLSearchParams(searchParams);
    const newQuery = new URLSearchParams();

    // Merge current and new query parameters
    for (const [key, value] of currentQuery.entries()) {
      newQuery.set(key, value);
    }

    for (const [key, value] of Object.entries(object)) {
      newQuery.set(key, value);
    }

    const newUrl = `${url}?${newQuery.toString()}`;

    // Navigate to the new URL
    router.push(newUrl, { scroll: false });
  };

  return { QueryString, OpenUrl };
};

export default useUrlQuery;
