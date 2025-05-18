import React, { useState, useMemo } from 'react';
import { TreeItem } from '@/types/types';
import {FileIcon, FolderWithFilesIcon, FolderWithFoldersIcon} from "@/public/icons/icons";
import {FolderClassifier, FolderType} from "@/utils/FolderClassifier";

interface TreeProps {
  item: TreeItem;
  level?: number;
  onNodeClick: (children?: TreeItem[]) => void;
}

const Tree = ({ item, level = 0, onNodeClick }: TreeProps) => {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = FolderClassifier.hasChildren(item);

  const folderType: FolderType = useMemo(() => {
    return FolderClassifier.classify(item);
  }, [item]);

  const icons = {
    file: <FileIcon />,
    'folder-with-files': <FolderWithFoldersIcon />,
    'folder-with-folders': <FolderWithFilesIcon />,
  };

  const arrow = hasChildren ? (
    <span
      className={`inline-block mr-1.5 select-none w-2.5 transition-transform duration-200 ${
        expanded ? 'rotate-90' : 'rotate-0'
      }`}
    >
      ▶
    </span>
  ) : (
    <span className="inline-block w-4 mr-1.5" />
  );

  const onClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
      onNodeClick(item.subitems);
    } else {
      onNodeClick(undefined);
    }
  };

  return (
    <div
      className={`cursor-pointer select-none leading-6 font-sans`}
      style={{ paddingLeft: `${level * 20}px` }}
      title={item.name}
    >
      <div onClick={onClick} className="flex items-center">
        {arrow}
        {icons[folderType]}
        <span>{item.name}</span>
      </div>

      {expanded && hasChildren && (
        <div>
          {item.subitems!.map((child) => (
            <Tree
              key={child.name}
              item={child}
              level={level + 1}
              onNodeClick={onNodeClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tree;
