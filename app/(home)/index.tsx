import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <Link href='/'>
          <Text>Sign In</Text>
        </Link>
        <Link href='/'>
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
