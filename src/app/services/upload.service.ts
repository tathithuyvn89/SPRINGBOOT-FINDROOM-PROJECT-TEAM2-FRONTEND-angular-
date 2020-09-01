import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";

@Injectable({providedIn: 'root'})
export class UploadService {
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}
  startUpload(file:File) {
    //The storage path
    const path = `${file.name.split('.').slice(0,-1).join('.')}_${Date.now()}`
    //Reference to storage bucket
    const ref = this.storage.ref(path);
    //The main task
    return this.storage.upload(path,file).snapshotChanges().toPromise()
  }
  convertToResizeUrl(url: string) {
    const regex = '.jpg';
    const array = url.split(regex);
    return array.join('_1080x1080.jpg');
  }
}
