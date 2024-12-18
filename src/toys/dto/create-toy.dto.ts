export class CreateToyDto {
    name: string;
    material: 'wood' | 'metal' | 'plastic' | 'other';
    weight: number;
  }