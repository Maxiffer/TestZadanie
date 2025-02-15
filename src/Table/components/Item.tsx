import { useState } from "react";
import { TableElement } from "./Element";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import { ISeminar } from "../../App";
import { ModalDel } from "./ModalDel";
import { ModalUp } from "./ModalUp";

interface ITableItem {
  i: ISeminar;
  handleDelete: (value: string) => void;
  handleUpdate: (obj: ISeminar) => void;
}

export const TableItem = ({ i, handleDelete, handleUpdate }: ITableItem) => {
  const [modalActiveDel, setModalActiveDel] = useState(false);
  const [modalActiveUp, setModalActiveUp] = useState(false);
  return (
    <div className="table__el" key={i.id}>
      <img src={i.photo} alt="" />
      <div className="table__el-content">
        <div className="table__el-content-info">
          <TableElement title="Дата" value={i.date} />
          <TableElement title="Время" value={i.time} />
          <TableElement title="Название" value={i.title} />
          <TableElement title="Описание" value={i.description} />
        </div>
        <div className="table__el-content-btn">
          <FaTrashCan
            className="FaTrashCan"
            role="button"
            tabIndex={0}
            onClick={() => {
              setModalActiveDel(true);
            }}
          />
          <FaPen
            className="FaPen"
            role="button"
            tabIndex={0}
            onClick={() => {
              setModalActiveUp(true);
            }}
          />
        </div>
        {modalActiveDel && (
          <ModalDel
            active={modalActiveDel}
            handleDelete={handleDelete}
            setModalActive={setModalActiveDel}
            del={String(i.id)}
          />
        )}
        {modalActiveUp && (
          <ModalUp
            active={modalActiveUp}
            setModalActive={setModalActiveUp}
            i={i}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
};
