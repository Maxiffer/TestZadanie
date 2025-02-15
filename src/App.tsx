import { useState, useEffect } from "react";
import "./App.css";
import { Table } from "./Table/Table";

export interface ISeminar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

export const API_URL = "http://localhost:5000/seminars";

export const App = () => {
  const [seminars, setSeminars] = useState<ISeminar[]>([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const response = await fetch(API_URL);
        const listSeminars = await response.json();
        if (!response.ok) throw Error("Did not receive list seminars");
        setSeminars(listSeminars);
        setFetchError(null);
      } catch (error) {
        console.log(error);
        error && setFetchError(error.message);
      }
    };
    fetchSeminars();
  }, []);

  return (
    <div className="App">
      <main>
        {fetchError && <h2 className="error">{`Error: ${fetchError}`}</h2>}
        <Table
          seminars={seminars}
          setSeminars={setSeminars}
          setFetchError={setFetchError}
          API_URL={API_URL}
        />
      </main>
    </div>
  );
};
