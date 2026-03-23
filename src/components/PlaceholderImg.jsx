const PlaceholderImg = ({ width, height, label, color = '#EAD9C9', className = '' }) => {
  const aspect = (height / width) * 100;
  return (
    <div
      className={`ph-img ${className}`}
      style={{ paddingBottom: `${aspect}%`, backgroundColor: color }}
    >
      <div className="ph-img__inner">
        <span className="ph-img__dims">{width} × {height}</span>
        {label && <span className="ph-img__label">{label}</span>}
        <span className="ph-img__dpi">72 DPI • RGB</span>
      </div>
    </div>
  );
};

export default PlaceholderImg;
