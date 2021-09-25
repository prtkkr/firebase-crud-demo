import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private dbPath = '/tutorials';
  tutorialRef !: AngularFireList<Tutorial>

  constructor(private db: AngularFireDatabase) {
    this.tutorialRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Tutorial> {
    return this.tutorialRef;
  }

  create(tutorial: Tutorial): any {
    return this.tutorialRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialRef.update(key, value);
  }

  delete(key: string) : Promise<void> {
    return this.tutorialRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialRef.remove();
  }

}
