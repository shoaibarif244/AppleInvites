import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Create() {
  const { top, bottom } = useSafeAreaInsets();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  return (
    <View className="flex-1">
      <LinearGradient colors={['#FF0000', '#800080', '#00008B']} style={StyleSheet.absoluteFill} />
      <View className="p-4" style={{ paddingTop: top, paddingBottom: bottom }}>
        {/* header */}
        <View className="flex-row items-center justify-between">
          <Ionicons
            onPress={() => router.back()}
            name="close"
            size={24}
            color="white"
            className="rounded-full bg-zinc-700/30 p-2"
          />
          <Pressable className="rounded-full bg-white p-3 px-6">
            <Text className="font-bold text-zinc-900">Preview</Text>
          </Pressable>
        </View>
        {/* Image Picker for bg */}
        <View className="h-1/2 w-full items-center justify-center  gap-4">
          <Ionicons name="image" size={42} color="rgba(255,255,255,0.7)" />
          <Pressable className="rounded-full bg-black/10 p-3 px-6">
            <Text className="font-bold text-white/90">Add background</Text>
          </Pressable>
        </View>

        {/* Event inputs */}
        <View className="shadow-lg">
          <BlurView
            intensity={10}
            className="rounder-2xl  w-full gap-4 overflow-hidden rounded-3xl border border-white/15">
            <View className="bg-black/30 ">
              <View className="border-b border-white/15 p-4 py-8">
                <TextInput
                  value={title}
                  onChangeText={setTitle}
                  placeholder="Event title"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  className="text-center text-4xl font-bold text-white"
                />
              </View>
              <View className="items-center gap-4 border-b border-white/15 p-4">
                <Ionicons name="calendar" size={24} color="rgba(255,255,255,0.8)" />
                <Text className="font-medium text-white/80">Date and Time</Text>
              </View>
              <View className="items-center gap-4 border-b border-white/15 p-4">
                <Ionicons name="pin" size={24} color="rgba(255,255,255,0.8)" />
                <Text className="font-medium text-white/80">Location</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </View>
    </View>
  );
}
