// src/types/document.ts

export interface Document {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory;
  fileType: FileType;
  fileName: string;
  filePath: string;
  fileSize: string;
  uploadDate: string;
  lastModified: string;
  downloadUrl: string;
  previewUrl?: string;
  tags: string[];
  featured: boolean;
  isPublic: boolean;
}

export type DocumentCategory = 
  | 'resume'
  | 'certificates'
  | 'academic'
  | 'projects'
  | 'presentations'
  | 'other';

export type FileType = 
  | 'pdf'
  | 'doc'
  | 'docx'
  | 'ppt'
  | 'pptx'
  | 'txt'
  | 'md';

export interface DocumentFilter {
  category?: DocumentCategory;
  fileType?: FileType;
  searchTerm?: string;
  featured?: boolean;
}

export interface DocumentViewerProps {
  document: Document;
  isOpen: boolean;
  onClose: () => void;
}

export interface DocumentCardProps {
  document: Document;
  onView: (document: Document) => void;
  onDownload: (document: Document) => void;
}

export interface DocumentListProps {
  documents: Document[];
  filter: DocumentFilter;
  onFilterChange: (filter: DocumentFilter) => void;
}
