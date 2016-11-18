import { IMdlTableModelItem } from 'angular2-mdl';

export class PostData implements IMdlTableModelItem {
  public selected: boolean = false
  public bleaching: Array<BleachingData> = [];
  public coralSpecies: string = ""
  public coralType: string = ""
  public diseases: Array<DiseaseData> = [];
  public fotos: Array<PhotoInformation> = [];
  public postDate: string = "";
  public sector: string = "";
  public subsector: string = "";
}

export class DiseaseData {
  public nombre: string = "";
  public percentage: string = "";
}

export class BleachingData {
  public nombre: string = "";
  public percentage: string = "";
}

export class PhotoInformation {
  public ruta: string = ""

  public constructor(ruta: string) {
    this.ruta = ruta;
  }
}
