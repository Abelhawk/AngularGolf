import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/index";

export interface HolesData

{

  // name: string; //As in the type. Champion, Pro, etc.
  // yardage: Array<number>;
  // par: number;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseUrl = 'http://uxcobra.com/golfapi/course11819.txt';

  constructor(private http: HttpClient) { }

  getCourse(){
    return this.http.get(this.courseUrl);
  }


}
