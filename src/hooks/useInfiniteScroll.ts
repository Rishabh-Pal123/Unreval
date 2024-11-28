import { useEffect, useState } from "react";
import { throttle } from "lodash";

const useInfiniteScroll = (hasMore: boolean, fetchMore: () => void) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (
        hasMore &&
        window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 100 &&
        !isFetching
      ) {
        setIsFetching(true);
      }
    }, 200); // Throttle for smoother performance

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, isFetching]);

  useEffect(() => {
    if (isFetching) {
      fetchMore();
      setIsFetching(false);
    }
  }, [isFetching, fetchMore]);

  return { isFetching };
};

export default useInfiniteScroll;
