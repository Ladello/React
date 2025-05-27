import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 100, y: 100 },
  { id: 2, type: 'circle', x: 150, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map((shape) =>
      shape.type === 'square'
        ? shape
        : { ...shape, y: shape.y + 50 }
    );
    setShapes(nextShapes);
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '250px' }}>
      <button onClick={handleClick} style={{ marginBottom: '10px' }}>
        Move circles down!
      </button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: `${shape.x}px`,
            top: `${shape.y}px`,
            borderRadius: shape.type === 'circle' ? '50%' : '0',
            width: '20px',
            height: '20px',
          }}
        />
      ))}
    </div>
  );
}
