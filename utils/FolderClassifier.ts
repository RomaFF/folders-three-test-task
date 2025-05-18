import { TreeItem } from '@/types/types';

export type FolderType = 'file' | 'folder-with-files' | 'folder-with-folders';

export class FolderClassifier {
  static hasChildren(item: TreeItem): boolean {
    return !!item.subitems?.length;
  }

  static isFolderWithFolders(item: TreeItem): boolean {
    return item.subitems?.some(sub => !!sub.subitems?.length) ?? false;
  }

  static isFolderWithFilesOnly(item: TreeItem): boolean {
    return FolderClassifier.hasChildren(item) && !FolderClassifier.isFolderWithFolders(item);
  }

  static classify(item: TreeItem): FolderType {
    if (!FolderClassifier.hasChildren(item)) return 'file';
    if (FolderClassifier.isFolderWithFolders(item)) return 'folder-with-folders';
    if (FolderClassifier.isFolderWithFilesOnly(item)) return 'folder-with-files';
    return 'file';
  }
}
