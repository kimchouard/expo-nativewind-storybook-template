import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Pressable
      className="self-center px-8 py-2 bg-sky-700 rounded-lg web:hover:bg-sky-600 native:active:bg-sky-600"
      onPress={onPress}
    >
      <Text className="text-white text-lg font-bold">{text}</Text>
    </Pressable>
  );
};