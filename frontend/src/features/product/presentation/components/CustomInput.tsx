interface Props<T> {
  hintText: string;
  setState: (value: T) => void;
}

const CustomInput = <T,>({ hintText, setState }: Props<T>) => {
  return (
    <input
      type="text"
      placeholder={hintText}
      className="input w-[250px] lg:w-[400px] text-secondary font-bold rounded-md focus:outline-none"
      onChange={(e) => setState(e.target.value as T)}
    />
  );
};

export default CustomInput;
