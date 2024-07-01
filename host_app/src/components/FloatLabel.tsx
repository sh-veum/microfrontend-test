interface FloatLabelProps {
  children: React.ReactNode;
  label: string;
  isVisible: boolean;
}

const FloatLabel = ({ children, label, isVisible }: FloatLabelProps) => {
  return (
    <div className="relative">
      {children}
      {isVisible && (
        <label className="text-sm text-gray-600 px-1 absolute -top-2.5 left-2.5 bg-white">
          {label}
        </label>
      )}
    </div>
  );
};

export default FloatLabel;
