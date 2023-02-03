//./CustomHook/useDataFetch.js

import { useState, useEffect } from "react";

const useDataFetch = (fullUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Adapted from Nuria's version
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(fullUrl)
        const data = await response.json();
        setData(data)
        // console.log(data);
        // console.log(data.data[0].fact);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, [fullUrl]);

  return { data, loading, error };
};

export default useDataFetch;


//  My version - works
//     useEffect(() => {
//         setLoading(true);
//         try {
//             fetch(fullUrl)
//             .then(response => response.json())
//             .then(jsonResponse => {
//                     setData(jsonResponse);
//                     // console.log(data);
//                     // console.log(data.data[0].fact);
//                 })
//         } catch (err) {
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     }, [fullUrl]);

//     return { data, loading, error };
// };

