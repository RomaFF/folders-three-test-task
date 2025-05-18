import Image from 'next/image';

export const FolderWithFoldersIcon = () => (
    <svg
        className="mr-1.5 w-5 h-5 text-yellow-600"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
    </svg>
);

export const FolderWithFilesIcon = () => (
    <svg
        className="mr-1.5 w-5 h-5 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M20 6H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
    </svg>
);

export const FileIcon = () => (
    <Image
        src="/custom-file.svg"
        alt="file"
        className="w-4 h-4 mr-1.5"
        width={16}
        height={16}
    />
);
