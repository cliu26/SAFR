import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="start" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="student" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="nonstudent" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="studentyear" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="gender" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="colleges" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="email" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="welcome" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="home" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="rides" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="booked" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="traveling" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="ratings" 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="profilepage" 
      options={{
        headerShown: false,
      }}
      />
    </Stack>
  );
}
