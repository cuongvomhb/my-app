import FontAwesome from "@expo/vector-icons/FontAwesome";

export type IconType = {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color?: string; // Mark color as optional since it has a default value
}