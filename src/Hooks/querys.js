import { useState, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { typeDefsAll } from '../typeDefs/typeDefs';

const useCharacterQuery = () => {

  const [getCharacteres, { loading: queryLoading, error: queryError }] = useLazyQuery(typeDefsAll);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    /*  {
      
      setData(queryData.characters.results);
      setLoading(queryLoading);
      setError(queryError);
    } */
    console.log("USE EFECT LLAMADO");
    setInterval(() => {
     handelData()
    }, 2000);
  }, []);
  const handelData = async () => {
    const response = await getCharacteres()
    console.log("handelData",response);
  }

  return { loading, error, data };
};


export default useCharacterQuery;
