import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, Pressable, Image, ScrollView, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeInUp, FadeOut, SlideInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import EventCard from '~/components/EventCard';
import Marquee from '~/components/Marquee';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const events = [
  {
    id: 1,
    image: require('../assets/images/1.jpg'),
  },
  {
    id: 2,
    image: require('../assets/images/2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/images/3.jpg'),
  },
  {
    id: 4,
    image: require('../assets/images/4.jpg'),
  },
  {
    id: 5,
    image: require('../assets/images/5.jpg'),
  },
  {
    id: 6,
    image: require('../assets/images/6.jpg'),
  },
  {
    id: 7,
    image: require('../assets/images/7.jpg'),
  },
  {
    id: 8,
    image: require('../assets/images/8.jpg'),
  },
];

export default function WelcomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onButtonPress = () => {
    router.push('/create');
  };

  return (
    <View className="flex-1 bg-yellow-950 ">
      <Animated.Image
        key={events[activeIndex].image}
        source={events[activeIndex].image}
        className="absolute top-0 left-0 w-full h-full"
        resizeMode="cover"
        entering={FadeIn.duration(1000)}
        exiting={FadeOut.duration(1000)}
      />

      <View className="absolute top-0 left-0 w-full h-full bg-black/70" />

      <BlurView intensity={70} className="flex-1">
        {/* This is a quick fix of the SlideInUp bug not taking safe area padding in consideration */}
        <SafeAreaView edges={['bottom']} className="flex-1">
          {/* Top part of the screen */}
          <Animated.View
            className="w-full mt-20 h-1/2"
            entering={SlideInUp.springify().mass(1).damping(30)}>
            <Marquee
              items={events}
              renderItem={({ item }) => <EventCard event={item} />}
              onIndexChange={setActiveIndex}
            />
          </Animated.View>

          <View className="justify-center flex-1 gap-4 p-4">
            <Animated.Text
              className="text-2xl font-bold text-center text-white/60"
              entering={FadeInUp.springify().mass(1).damping(30).delay(500)}>
              Welcome to
            </Animated.Text>
            <Animated.Text
              className="text-5xl font-bold text-center text-white"
              entering={FadeIn.duration(500).delay(500)}>
              Apple Invites
            </Animated.Text>
            <Animated.Text
              className="mb-5 text-lg text-center text-white/60"
              entering={FadeInUp.springify().mass(1).damping(30).delay(500)}>
              Create beautiful invitations for your events. Anyone can receive invitations.{' '}
            </Animated.Text>

            <AnimatedPressable
              onPress={onButtonPress}
              className="items-center self-center px-10 py-4 bg-white rounded-full"
              entering={FadeInUp.springify().mass(1).damping(30).delay(500)}>
              <Text className="text-lg">Create an Event</Text>
            </AnimatedPressable>
          </View>
        </SafeAreaView>
      </BlurView>
    </View>
  );
}
