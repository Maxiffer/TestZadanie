import { useState } from "react";
import { API_URL, ISeminar } from "../../App";
import { apiRequest } from "../../apiRequest";
import axios from "axios";

interface IModal {
  i: ISeminar;
  active: boolean;
  setModalActive: (setModal: boolean) => void;
  handleUpdate: (obj: ISeminar) => void;
}

export const ModalUp = ({
  active,
  setModalActive,
  i,
  handleUpdate,
}: IModal) => {
  const obj = {
    ...i,
  };
  const handleChange = (
    e: string,
    key: "id" | "title" | "description" | "date" | "time"
  ) => {
    obj[key] = e;
  };

  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="edit">
          <input
            type="text"
            defaultValue={i.date}
            placeholder="Дата"
            onChange={(e) => handleChange(e.target.value, "date")}
          />
          <input
            type="text"
            defaultValue={i.time}
            placeholder="Время"
            onChange={(e) => handleChange(e.target.value, "time")}
          />
          <input
            type="text"
            defaultValue={i.title}
            placeholder="Название"
            onChange={(e) => handleChange(e.target.value, "title")}
          />
          <input
            type="text"
            defaultValue={i.description}
            placeholder="Описание"
            onChange={(e) => handleChange(e.target.value, "description")}
          />
          <button
            onClick={() => {
              setModalActive(false), handleUpdate(obj);
            }}
          >
            <p>Подтвердить</p>
          </button>
          <button onClick={() => setModalActive(false)}>
            <p>Отмена</p>
          </button>
        </div>
      </div>
    </div>
  );
};
function setFetchError(result: never) {
  throw new Error("Function not implemented.");
}
