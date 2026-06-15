export interface VpicMake {
  Make_ID: number;
  Make_Name: string;
}

export interface VpicModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

const base = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export async function getAllMakes(): Promise<VpicMake[]> {
  const res = await fetch(`${base}/GetAllMakes?format=json`);
  if (!res.ok) throw new Error(`vPIC GetAllMakes failed: ${res.status}`);
  const json = await res.json();
  return json.Results ?? [];
}

export async function getModelsForMakeYear(make: string, year: number): Promise<VpicModel[]> {
  const res = await fetch(`${base}/GetModelsForMakeYear/make/${encodeURIComponent(make)}/modelyear/${year}?format=json`);
  if (!res.ok) throw new Error(`vPIC GetModelsForMakeYear failed: ${res.status}`);
  const json = await res.json();
  return json.Results ?? [];
}
