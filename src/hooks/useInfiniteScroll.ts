import { useEffect, useState } from 'react';

const useInfiniteScroll = (fetchMore: () => void) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setIsLoading(true);
        fetchMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchMore]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [isLoading]);

  return { isLoading, fetchMore };
};

export default useInfiniteScroll;
