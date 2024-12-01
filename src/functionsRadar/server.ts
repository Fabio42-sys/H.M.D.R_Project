import express from 'express';
import { FileScanner } from './fileScanner';
import { FileFilterOptions } from './filter';

const app = express();
const port = 3000;

// Endpoint para buscar arquivos
app.get('/api/files', async (req, res) => {
  const directory = req.query.directory as string || './';
  const filters: FileFilterOptions = {
    extensions: req.query.extensions ? (req.query.extensions as string).split(',') : undefined,
    minSize: req.query.minSize ? parseInt(req.query.minSize as string) : undefined,
    maxSize: req.query.maxSize ? parseInt(req.query.maxSize as string) : undefined,
    nameContains: req.query.nameContains as string,
    includeHidden: req.query.includeHidden === 'true',
  };

  try {
    const files = await FileScanner.scanDirectory(directory, filters);
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: 'Error scanning files', details: error });
  }
});

app.use(express.static('public')); // Serve arquivos estáticos (HTML, CSS, JS)

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});