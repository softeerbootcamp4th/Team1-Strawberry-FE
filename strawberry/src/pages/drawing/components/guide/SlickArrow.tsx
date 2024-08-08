interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  icon: string;
}

function Arrow({ className, style, onClick, icon }: ArrowProps) {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={icon} alt="arrow" />
    </div>
  );
}

export default Arrow;
