import { useEffect } from 'react';

function useTitle(title) {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = title;

    return () => {
      document.title = oldTitle;
    };
  });
}

export default useTitle;
