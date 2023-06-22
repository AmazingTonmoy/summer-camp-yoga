import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useEffect } from 'react';
import MySelectsClass from './MySelectsClass';

const SelectsClasses = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const url = `https://yoga-school-server-ochre.vercel.app/selects/email/${user.email}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setToys(data))
        .catch((error) => console.error(error));
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your selects.</div>;
  }

  if (toys.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {toys.map((toy) => (
      <MySelectsClass key={toy._id} toy={toy}></MySelectsClass>
      ))}
    </div>
  );
};

export default SelectsClasses;
