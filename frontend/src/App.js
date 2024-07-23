import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>{data ? data : 'Loading...'}</h1>
    </div>
  );
}

export default App;
