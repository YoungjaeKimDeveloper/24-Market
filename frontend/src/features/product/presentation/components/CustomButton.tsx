interface Props {
  hintText: string;
  onClick: () => void;
}
export const CustomButton = ({ hintText, onClick }: Props) => {
  return (
    <div
      className="btn animate-bounce bg-secondary border-none"
      onClick={onClick}
    >
      <p className="text-text_muted">{hintText}</p>
    </div>
  );
};
