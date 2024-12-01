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
const express_1 = __importDefault(require("express"));
const fileScanner_1 = require("./fileScanner");
const app = (0, express_1.default)();
const port = 3000;
// Endpoint para buscar arquivos
app.get('/api/files', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const directory = req.query.directory || './';
    const filters = {
        extensions: req.query.extensions ? req.query.extensions.split(',') : undefined,
        minSize: req.query.minSize ? parseInt(req.query.minSize) : undefined,
        maxSize: req.query.maxSize ? parseInt(req.query.maxSize) : undefined,
        nameContains: req.query.nameContains,
        includeHidden: req.query.includeHidden === 'true',
    };
    try {
        const files = yield fileScanner_1.FileScanner.scanDirectory(directory, filters);
        res.json(files);
    }
    catch (error) {
        res.status(500).json({ error: 'Error scanning files', details: error });
    }
}));
app.use(express_1.default.static('public')); // Serve arquivos estáticos (HTML, CSS, JS)
// Inicia o servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
