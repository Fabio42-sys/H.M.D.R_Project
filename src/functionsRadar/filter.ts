import { FileDetails } from './fileScanner';

export interface FileFilterOptions {
  extensions?: string[]; // Ex.: ['.txt', '.jpg']
  minSize?: number; // Tamanho mínimo (em bytes)
  maxSize?: number; // Tamanho máximo (em bytes)
  nameContains?: string; // Texto que o nome do arquivo deve conter
  modifiedAfter?: Date; // Data mínima de modificação
  modifiedBefore?: Date; // Data máxima de modificação
  includeHidden?: boolean; // Incluir arquivos ocultos
}

export class FileFilter {
  static applyFilters(files: FileDetails[], filters?: FileFilterOptions): FileDetails[] {
    if (!filters) return files;

    return files.filter((file) => {
      const isHidden = file.name.startsWith('.');

      if (filters.extensions && !filters.extensions.includes(file.extension)) return false;
      if (filters.minSize && file.size < filters.minSize) return false;
      if (filters.maxSize && file.size > filters.maxSize) return false;
      if (filters.nameContains && !file.name.includes(filters.nameContains)) return false;
      if (filters.modifiedAfter && new Date(file.modifiedDate) < filters.modifiedAfter) return false;
      if (filters.modifiedBefore && new Date(file.modifiedDate) > filters.modifiedBefore) return false;
      if (filters.includeHidden === false && isHidden) return false;

      return true;
    });
  }
}