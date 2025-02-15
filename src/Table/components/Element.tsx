interface ITableElement {
  title: string;
  value: string;
}

export const TableElement = ({ title, value }: ITableElement) => {
  return (
    <div className="table__el-row">
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
};
