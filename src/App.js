import { useEffect, useState } from 'react';

import { fetchPostInfos } from './api';

import styles from './App.css';

import Post from './Post';

export default function App() {
  const [ state, setState ] = useState({
    infos: [],
  });

  const { infos } = state;

  function updateInfos() {
    const fetchedInfos = fetchPostInfos();
    fetchedInfos.then(
      infos => 
        setState({
          ...state,
          infos,
        }),
    );
  }

  useEffect(()=> {
    updateInfos();
  });

  return (
    <div className={styles.app}>
      {infos.map((info) => (
        <Post
          key={info.id} 
          info={info}
        />
      ))}
    </div>
  ); 
}
