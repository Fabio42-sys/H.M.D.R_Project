import fs from 'fs';
import path from 'path';
import { FileFilterOptions, FileFilter } from './filter';

export interface FileDetails {
  name: string;
  path: string;
  size: number; // em bytes
  extension: string;
  modifiedDate: string; // Data de modificação
}

export class FileScanner {
  static async scanDirectory(dir: string, filters?: FileFilterOptions): Promise<FileDetails[]> {
    const results: FileDetails[] = [];
    const items = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        const subResults = await FileScanner.scanDirectory(fullPath);
        results.push(...subResults);
      } else {
        const stats = await fs.promises.stat(fullPath);

        const fileDetails: FileDetails = {
          name: item.name,
          path: fullPath,
          size: stats.size,
          extension: path.extname(item.name),
          modifiedDate: stats.mtime.toISOString(),
        };

        results.push(fileDetails);
      }
    }

    // Aplicar os filtros usando a classe FileFilter
    return FileFilter.applyFilters(results, filters);
  }
}