"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileScanner = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filter_1 = require("./filter");
class FileScanner {
    static scanDirectory(dir, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            const items = yield fs_1.default.promises.readdir(dir, { withFileTypes: true });
            for (const item of items) {
                const fullPath = path_1.default.join(dir, item.name);
                if (item.isDirectory()) {
                    const subResults = yield FileScanner.scanDirectory(fullPath);
                    results.push(...subResults);
                }
                else {
                    const stats = yield fs_1.default.promises.stat(fullPath);
                    const fileDetails = {
                        name: item.name,
                        path: fullPath,
                        size: stats.size,
                        extension: path_1.default.extname(item.name),
                        modifiedDate: stats.mtime.toISOString(),
                    };
                    results.push(fileDetails);
                }
            }
            // Aplicar os filtros usando a classe FileFilter
            return filter_1.FileFilter.applyFilters(results, filters);
        });
    }
}
exports.FileScanner = FileScanner;
