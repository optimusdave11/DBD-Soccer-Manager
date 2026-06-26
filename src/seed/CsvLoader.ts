import Papa from "papaparse";

export class CsvLoader {
  async load<T>(path: string): Promise<T[]> {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Unable to load ${path}`);
    }

    const csv = await response.text();

    const result = Papa.parse<T>(csv, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    });

    if (result.errors.length) {
      console.error(result.errors);
      throw new Error(`Failed parsing ${path}`);
    }

    return result.data;
  }
}

export const csvLoader = new CsvLoader();