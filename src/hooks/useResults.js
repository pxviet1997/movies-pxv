import { useEffect, useState } from 'react';
import igdb from '../api/igdb';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchApi = async (page) => {
    try {
      const response = await igdb.get('/top_rated', {
        params: {
          page: page,
        }
      });
      setResults(response.data);
    } catch (err) {
      setErrorMessage('Something when wrong');
    }
  };

  useEffect(() => {
    fetchApi(1);
  }, []);

  return [fetchApi, results, errorMessage];
};
