import {TreeItem} from "@/types/types";

export class FileTreeService {
  static async fetchTree(): Promise<TreeItem[]> {
    const response = await fetch("/api/data.json");

    if (!response.ok) {
      throw new Error("Failed to fetch tree data");
    }

    return response.json();
  }
}