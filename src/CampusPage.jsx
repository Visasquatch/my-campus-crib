import React from 'react';
import { useParams } from 'react-router-dom';

function CampusPage() {
  const { campusSlug } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">{campusSlug.replace(/-/g, ' ')}</h1>
      {/* Load hostel listings or campus-specific content here */}
    </div>
  );
}

export default CampusPage;
