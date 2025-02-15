import { ISeminar } from "../App";
import "./Table.scss";
import { TableItem } from "./components/Item";
import { apiRequest } from "../apiRequest";
import axios from "axios";
import { id } from "date-fns/locale";

interface ITable {
  seminars: ISeminar[];
  setSeminars: (value: ISeminar[]) => void;
  setFetchError: (value: any) => void;
  API_URL: string;
}

export const Table = ({
  seminars,
  setSeminars,
  API_URL,
  setFetchError,
}: ITable) => {
  const handleDelete = async (id: string) => {
    const listSeminars = seminars.filter((item) => item.id !== id);
    setSeminars(listSeminars);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };
  const handleUpdate = async (obj: ISeminar) => {
    const listSeminars = seminars.map((i) => {
      if (i.id === obj.id) {
        return (i = obj);
      }
      return i;
    });
    setSeminars(listSeminars);

    const resp = await axios.put(`${API_URL}/${obj.id}`, obj);
    console.log(resp);
  };

  return (
    <>
      <div className="table">
        {seminars.map((i) => (
          <TableItem
            i={i}
            handleDelete={handleDelete}
            key={i.id}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </>
  );
};
