// props with generics
import { Dispatch, SetStateAction } from "react";

type InputValType = string | number;

function Box<T extends InputValType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  //   setter:()=>void  -> this will cause error in setting state
  setter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <form>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
}

export default Box;
