// props with generics

type InputValType = string | number;

function Box<T extends InputValType>({
  label,
  value,
  onChangeHandler,
}: {
  label: string;
  value: T;
  onChangeHandler: () => void;
}) {
  return (
    <form>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChangeHandler} />
      <button>submit</button>
    </form>
  );
}

export default Box;
