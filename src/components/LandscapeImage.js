import React from 'react';

function LandscapeImage({ variant }) {
  const isGreen = variant === 'green';
  return (
    <div className="landscape-image">
      <img
        src={isGreen
          ? 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&h=440&fit=crop'
          : 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&h=440&fit=crop'
        }
        alt={isGreen ? 'Green rolling hills' : 'Mountain range landscape'}
      />
    </div>
  );
}

export default LandscapeImage;
