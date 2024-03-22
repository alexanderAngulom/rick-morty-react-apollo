import { useState, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { typeDefsAll } from '../typeDefs/typeDefs';

const useCharacterQuery = () => {
  const [getCharacteres, { loading: queryLoading, error: queryError, data: queryData }] = useLazyQuery(typeDefsAll);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    getCharacteres();
  }, []);

  useEffect(() => {
    if (queryData) {
      setData(queryData.characters.results);
      setLoading(queryLoading);
      setError(queryError);
    }
  }, [queryData, queryLoading, queryError]);
  
  return { loading, error, data };
};

export default useCharacterQuery;