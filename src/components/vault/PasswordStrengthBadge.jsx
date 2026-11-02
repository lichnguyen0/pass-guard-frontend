import React from 'react';
import { Check, AlertTriangle, X } from 'lucide-react';

export const checkPasswordStrength = (password) => {
  if (!password) return null;
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;

  if (password.length < 6 || score < 2) return { label: 'Yếu', type: 'danger', icon: X };
  if (score === 2 || score === 3) return { label: 'Trung bình', type: 'warning', icon: AlertTriangle };
  return { label: 'Mạnh', type: 'success', icon: Check };
};

const PasswordStrengthBadge = ({ password }) => {
  const strength = checkPasswordStrength(password);
  if (!strength) return null;
  
  const Icon = strength.icon;
  return (
    <div className={`${strength.type}-badge`}>
      <Icon className={`${strength.type}-badge-icon`} size={14} />
      <span>{strength.label}</span>
    </div>
  );
};

export default PasswordStrengthBadge;
