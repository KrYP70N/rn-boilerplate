# watchman note
- Grant watchman to full file access
- watchman watch-del-all
- watchman shutdown-server
- watchman watch-project  /Users/kyawmyohtut/Documents/rnc (watch your project)

# Styling

- npm i nativewind
- npm install --save-dev tailwindcss@3.3.2 **don't forget to check supported version**
- npx tailwindcss init
- create nativewind-env.d.ts and insert following code
```
/// <reference types="nativewind/types" />
```

# Font Configure

- useFonts
```
const [fontsLoaded, error] = useFonts({
  "name": require("path")
})
```

# Splash Screen

- SplashScreen.hideAsync()
- SplashScreen.preventAutoHideAsync()

# Expo Router

- Link : navigate to other screen [href: name of target screen]
- programitically redirect
```
() => router.push('link')
() => router.push({
  pathname: '=`/user/[id]`,
  params: {id: 2}
})
```
- useLocalSearchParams(): explore local search params for dynamic route


# Stack Navigator

- Slot = same as {props.children} in react
- Stack = Stack navigation container
- Stack.Screen = Screen for stack navigation [name, options]
```
<Stack.Screen name='screen name'>
```
## Stack Options
headerShown: boolean
headerTitle: string
headerStyle: {}

# Tab 

- Tabs = Tab Navigator [screenOptions]
- Tabs.Screen = SCreen for tab navigation [name, options]

```
<Tabs>
  <Tabs.Screen name='screen name' options={{...}}>
</Tabs.Screen>
```

## Tab Screen Options

tabBarActiveTintColor: color when active
tabBarInactiveTintColor: default color
tabBarShowLabel: boolean
tabBarStyle: {css things}

# Tab Options

title: title of a tab
headerShown: boolean
tabBarIcon: Custom Tab Component ({color, focused})
```
tabBarIcon: ({ color, focused }) => (
  <TabIcon
    icon={icons.home}
    color={color}
    name="Home"
    focused={focused}
  />
)
```

# Expo Router Naming Convension
- _layout.tsx : Layout for the path
- () : folder name with () will be ignore as a route


# React Native Component

- View : visable area of a screen
- SafeAreaView: safe area of a screen 
- ScrollView: scrollable area of a screen [* contentContainerStyle height should 100% for the nice view]
```
  <ScrollView contentContainerStyle={{height: '100%'}}></ScrollView>
```
- Text: component for text and paragraph
- Image: component for image content [source, resizeMode]
- Link: navigator component
- TouchableOpacity: touchable area that reduce opacity when u touch it (for button, other interactable touch area)
- TextInput: user input [title, value, handleChangeText, otherStyles='classes', keyboardType, secureTextEntry]


Tech Stack
----
CLI TOOL - EXPO
ROUTING - EXPO ROUTER
UI - NATIVE WIND, STYLED 
STATE MANAGEMENT - ZUSTAND
DATA FETCHING - TENSTACK, FETCH
DATA STORAGE - MMKV, ASYNC
ANIMATE - REANIMATE


Todo
---
set up default radius
set up default font size
set up default font color
