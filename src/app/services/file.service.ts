import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }
  
  ObtenerURLImagen(nombreArchivo: string): Promise<string> {
    const storage = getStorage();
    const storageRef = ref(storage, nombreArchivo);
  
    return getDownloadURL(storageRef);
  }

  SubirArchivo(e: any) {
    let imageName:string = `${this.GetFecha()}`;
    
    const storage = getStorage();
    const storageRef = ref(storage, imageName);

    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {      
    });
  }

  GetFecha(): string {
    var fecha = new Date();
    let d, m, y, h, min, s, mls;
    d = fecha.getDate();
    m = fecha.getUTCMonth();
    y = fecha.getFullYear();
    h = fecha.getHours().toString();
    min = fecha.getMinutes().toString();
    s = fecha.getSeconds().toString();
    mls = fecha.getMilliseconds().toString();

    return y + '-' + m + '-' + d + '_' + h + '-' + min + '-' + s + '-' + mls;
  }
}