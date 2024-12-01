"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileFilter = void 0;
class FileFilter {
    static applyFilters(files, filters) {
        if (!filters)
            return files;
        return files.filter((file) => {
            const isHidden = file.name.startsWith('.');
            if (filters.extensions && !filters.extensions.includes(file.extension))
                return false;
            if (filters.minSize && file.size < filters.minSize)
                return false;
            if (filters.maxSize && file.size > filters.maxSize)
                return false;
            if (filters.nameContains && !file.name.includes(filters.nameContains))
                return false;
            if (filters.modifiedAfter && new Date(file.modifiedDate) < filters.modifiedAfter)
                return false;
            if (filters.modifiedBefore && new Date(file.modifiedDate) > filters.modifiedBefore)
                return false;
            if (filters.includeHidden === false && isHidden)
                return false;
            return true;
        });
    }
}
exports.FileFilter = FileFilter;
