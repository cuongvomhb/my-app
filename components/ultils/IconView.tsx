import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { IconType } from './types/icon-types';

export default function IconView({
  name,
  color = '#0c3e70', // Default value for color
  size = 28,
  onPress = undefined,
}: IconType) {
  return <FontAwesome size={size} style={{ marginBottom: -3 }} name={name} color={color} onPress={onPress} />;
}