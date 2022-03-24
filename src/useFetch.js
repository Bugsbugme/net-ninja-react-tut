import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortFetch.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            console.log("FetchError_404: Could not fetch the data for that resource.");
            throw Error("FetchError_404: Could not fetch the data for that resource.");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        // auto catches network / connection error
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("FetchError_Aborted: State changed before the the fetch request could be completed. Fetch aborted.");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortFetch.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
