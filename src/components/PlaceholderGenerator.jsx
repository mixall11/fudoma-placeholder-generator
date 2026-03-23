import React, { useState } from 'react';
import { Download, Trash2, Plus } from 'lucide-react';
import './PlaceholderGenerator.css';

const PlaceholderGenerator = () => {
  const [placeholders, setPlaceholders] = useState([
    { id: 1, name: 'Hero Banner', width: 1920, height: 600, color: '#E6F1FB', bgName: 'Sky Blue' },
    { id: 2, name: 'Featured Image', width: 1536, height: 911, color: '#EAF3DE', bgName: 'Sage Green' },
    { id: 3, name: 'Blog Post', width: 1200, height: 630, color: '#FAEEDA', bgName: 'Warm Amber' },
    { id: 4, name: 'Social Media', width: 1200, height: 630, color: '#EEEDFE', bgName: 'Soft Purple' },
    { id: 5, name: 'Product Image', width: 800, height: 800, color: '#FAECE7', bgName: 'Coral Blush' },
  ]);

  const [customWidth, setCustomWidth] = useState('');
  const [customHeight, setCustomHeight] = useState('');
  const [customColor, setCustomColor] = useState('#E6F1FB');

  const colorPalette = [
    { hex: '#E6F1FB', name: 'Sky Blue' },
    { hex: '#EAF3DE', name: 'Sage Green' },
    { hex: '#FAEEDA', name: 'Warm Amber' },
    { hex: '#EEEDFE', name: 'Soft Purple' },
    { hex: '#FAECE7', name: 'Coral Blush' },
    { hex: '#E1F5EE', name: 'Mint Green' },
    { hex: '#FBEAF0', name: 'Rose Pink' },
    { hex: '#F1EFE8', name: 'Neutral Gray' },
  ];

  const generatePlaceholderImage = (width, height, bgColor, name) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    // Border
    ctx.strokeStyle = '#D3D1C7';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, width - 2, height - 2);

    // Adjust text sizes based on canvas dimensions
    const fontSize1 = Math.max(24, Math.min(72, width / 15));
    const fontSize2 = Math.max(14, Math.min(36, width / 25));

    // Main dimensions text
    ctx.fillStyle = '#444441';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `600 ${fontSize1}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    ctx.fillText(`${width} × ${height}`, width / 2, height / 2 - 30);

    // Name text
    ctx.font = `400 ${fontSize2}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    ctx.fillStyle = '#888780';
    ctx.fillText(name || 'Image Placeholder', width / 2, height / 2 + 30);

    // DPI info at bottom
    ctx.font = `400 ${Math.max(11, fontSize2 - 4)}px monospace`;
    ctx.fillStyle = '#B4B2A9';
    ctx.fillText(`72 DPI • RGB`, width / 2, height - 20);

    return canvas.toDataURL('image/png');
  };

  const downloadImage = (placeholder) => {
    const dataUrl = generatePlaceholderImage(
      placeholder.width,
      placeholder.height,
      placeholder.color,
      placeholder.name
    );
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `placeholder-${placeholder.width}x${placeholder.height}-${placeholder.name
      .replace(/\s+/g, '-')
      .toLowerCase()}.png`;
    link.click();
  };

  const downloadAllAsZip = () => {
    placeholders.forEach((p, idx) => {
      setTimeout(() => downloadImage(p), idx * 300);
    });
  };

  const addCustomPlaceholder = () => {
    if (!customWidth || !customHeight) {
      alert('Prosím zadaj šírku a výšku');
      return;
    }
    const newId = Math.max(...placeholders.map(p => p.id), 0) + 1;
    const bgName = colorPalette.find(c => c.hex === customColor)?.name || 'Custom';
    
    setPlaceholders([
      ...placeholders,
      {
        id: newId,
        name: `Custom ${customWidth}×${customHeight}`,
        width: parseInt(customWidth),
        height: parseInt(customHeight),
        color: customColor,
        bgName: bgName,
      }
    ]);
    
    setCustomWidth('');
    setCustomHeight('');
    setCustomColor('#E6F1FB');
  };

  const updatePlaceholder = (id, field, value) => {
    setPlaceholders(
      placeholders.map(p => {
        if (p.id === id) {
          const updated = { ...p, [field]: value };
          if (field === 'color') {
            updated.bgName = colorPalette.find(c => c.hex === value)?.name || 'Custom';
          }
          return updated;
        }
        return p;
      })
    );
  };

  const deletePlaceholder = (id) => {
    if (placeholders.length > 1) {
      setPlaceholders(placeholders.filter(p => p.id !== id));
    }
  };

  return (
    <div className="placeholder-container">
      <div className="header">
        <h1>Fudoma Placeholder Generator</h1>
        <p>Generuj profesionálne placeholder obrázky so špecifikáciami pre tvoj tím marketingu</p>
      </div>

      {/* Prednastavené placeholder obrázky */}
      <section className="placeholders-section">
        <h2 className="section-title">Prednastavené veľkosti</h2>
        <div className="grid">
          {placeholders.map(placeholder => (
            <div key={placeholder.id} className="placeholder-card">
              <div className="card-header">
                <input
                  type="text"
                  value={placeholder.name}
                  onChange={(e) => updatePlaceholder(placeholder.id, 'name', e.target.value)}
                  className="card-name-input"
                />
              </div>
              
              <p className="card-dims">{placeholder.width} × {placeholder.height} px</p>
              
              {/* Color picker */}
              <div className="color-picker">
                {colorPalette.map(color => (
                  <button
                    key={color.hex}
                    className={`color-option ${placeholder.color === color.hex ? 'active' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => updatePlaceholder(placeholder.id, 'color', color.hex)}
                    title={color.name}
                    aria-label={`Select ${color.name} background`}
                  />
                ))}
              </div>

              {/* Preview */}
              <div
                className="preview"
                style={{ backgroundColor: placeholder.color }}
              >
                <div className="preview-text">
                  <div className="preview-dims">{placeholder.width} × {placeholder.height}</div>
                  <div className="preview-name">{placeholder.name}</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="action-buttons">
                <button
                  className="btn btn-download"
                  onClick={() => downloadImage(placeholder)}
                  title="Download as PNG"
                >
                  <Download size={16} />
                  <span>Download</span>
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => deletePlaceholder(placeholder.id)}
                  title="Remove placeholder"
                  disabled={placeholders.length === 1}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vlastný placeholder */}
      <section className="custom-section">
        <h2 className="section-title">Vytvor vlastný placeholder</h2>
        <div className="custom-card">
          <div className="input-row">
            <input
              type="number"
              placeholder="Šírka (px)"
              value={customWidth}
              onChange={(e) => setCustomWidth(e.target.value)}
              className="input-field"
              min="50"
              max="5000"
            />
            <input
              type="number"
              placeholder="Výška (px)"
              value={customHeight}
              onChange={(e) => setCustomHeight(e.target.value)}
              className="input-field"
              min="50"
              max="5000"
            />
          </div>

          <label className="color-label">Vyber farbu pozadia</label>
          <div className="color-picker">
            {colorPalette.map(color => (
              <button
                key={color.hex}
                className={`color-option ${customColor === color.hex ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setCustomColor(color.hex)}
                title={color.name}
                aria-label={`Select ${color.name} background`}
              />
            ))}
          </div>

          <button
            className="btn btn-primary btn-add"
            onClick={addCustomPlaceholder}
          >
            <Plus size={16} />
            <span>Pridaj nový placeholder</span>
          </button>
        </div>
      </section>

      {/* Download všetkých */}
      <div className="footer">
        <button
          className="btn btn-primary btn-large"
          onClick={downloadAllAsZip}
        >
          <Download size={18} />
          <span>Download všetky ({placeholders.length})</span>
        </button>
        <p className="footer-text">
          Každý obrázok sa stiahne ako PNG s presným rozmerom a DPI informáciami
        </p>
      </div>
    </div>
  );
};

export default PlaceholderGenerator;
