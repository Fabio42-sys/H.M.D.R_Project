import { FileScanner } from './functionsRadar/fileScanner';
import { FileFilterOptions } from './functionsRadar/filter';

const startScanningWithFilters = async () => {
  try {
    const directory = './'; // Diretório inicial para busca
    const filters: FileFilterOptions = {
      extensions: ['.txt', '.js'], // Apenas arquivos .txt e .js
      minSize: 100, // Mínimo 100 bytes
      maxSize: 500000, // Máximo 500 KB
      nameContains: 'example', // Nome contém "example"
      modifiedAfter: new Date('2024-01-01'), // Criados depois de 1º de janeiro de 2024
      includeHidden: false, // Excluir arquivos ocultos
    };

    console.log(`Scanning directory: ${directory} with filters`, filters);

    const files = await FileScanner.scanDirectory(directory, filters);
    console.log(`Found ${files.length} files:`);

    files.forEach((file) => {
      console.log(`- ${file.name} (${file.size} bytes) - ${file.path}`);
    });
  } catch (error) {
    console.error('Error scanning files:', error);
  }
};

startScanningWithFilters();