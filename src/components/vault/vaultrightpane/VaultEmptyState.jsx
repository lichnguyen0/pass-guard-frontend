import React from 'react';
import { Shield } from 'lucide-react';

const VaultEmptyState = () => {
  return (
    <div className="empty-state">
      <Shield size={64} style={{ opacity: 0.1, marginBottom: '1rem' }} />
      <h3 style={{ opacity: 0.5 }}>Chọn một mục để xem chi tiết</h3>
    </div>
  );
};

export default VaultEmptyState;
