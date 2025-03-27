import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { IconType } from './types/icon-types';

export default function IconView({
  name,
  color = '#0c3e70', // Default value for color
}: IconType) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} name={name} color={color} />;
}