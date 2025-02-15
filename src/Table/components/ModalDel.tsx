interface IModal {
  active: boolean;
  del: string;
  handleDelete: (value: string) => void;
  setModalActive: (setModal: boolean) => void;
}

export const ModalDel = ({
  active,
  setModalActive,
  del,
  handleDelete,
}: IModal) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <p>Удалить?</p>
        <button
          onClick={() => {
            handleDelete(String(del)), setModalActive(false);
          }}
        >
          <p>Да</p>
        </button>
        <button onClick={() => setModalActive(false)}>
          <p>Нет</p>
        </button>
      </div>
    </div>
  );
};
