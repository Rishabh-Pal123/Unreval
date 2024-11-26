import { useEffect, useState } from 'react';

const useInfiniteScroll = (
  hasMore: boolean,
  fetchMore: () => void
) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        hasMore && 
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight - 100 &&
        !isFetching
      ) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
