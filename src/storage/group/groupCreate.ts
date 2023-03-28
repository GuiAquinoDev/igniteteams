import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLCTION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string) {
    try {
        await AsyncStorage.setItem(GROUP_COLLCTION,newGroup);
    } catch (error) {
        throw error;
    }
}