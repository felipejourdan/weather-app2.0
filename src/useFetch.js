import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);

  const request = React.useCallback(async (url) => {
    let response;
    let json;
    try {
      response = await fetch(url);
      json = await response.json();
    } catch (err) {
      json = null;
    } finally {
      setData(json);
      // eslint-disable-next-line no-unsafe-finally
      return { response, json };
    }
  }, []);

  return {
    data,
    request,
  };
};

export default useFetch;
