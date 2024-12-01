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
Object.defineProperty(exports, "__esModule", { value: true });
const fileScanner_1 = require("./functionsRadar/fileScanner");
const startScanningWithFilters = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const directory = './'; // Diretório inicial para busca
        const filters = {
            extensions: ['.txt', '.js'], // Apenas arquivos .txt e .js
            minSize: 100, // Mínimo 100 bytes
            maxSize: 500000, // Máximo 500 KB
            nameContains: 'example', // Nome contém "example"
            modifiedAfter: new Date('2024-01-01'), // Criados depois de 1º de janeiro de 2024
            includeHidden: false, // Excluir arquivos ocultos
        };
        console.log(`Scanning directory: ${directory} with filters`, filters);
        const files = yield fileScanner_1.FileScanner.scanDirectory(directory, filters);
        console.log(`Found ${files.length} files:`);
        files.forEach((file) => {
            console.log(`- ${file.name} (${file.size} bytes) - ${file.path}`);
        });
    }
    catch (error) {
        console.error('Error scanning files:', error);
    }
});
startScanningWithFilters();
