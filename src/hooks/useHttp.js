import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(async (requestData, applyData) => {
    try {
      const response = await fetch(requestData.url, {
        method: requestData.method ? requestData.method : "GET",
        headers: requestData.headers ? requestData.headers : {},
        body: requestData.body ? JSON.stringify(requestData.body) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      applyData(data);
      setIsLoaded(true);
      setError();
    } catch (error) {
      console.log(error);
      setError(error.message || "Something went wrong!");
      setIsLoaded(false);
    }
  }, []);

  return { isLoaded, error, sendRequest };
};

export default useHttp;
