import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { SortService } from "./sort.service";

@Injectable({ providedIn: "root" })
export class TagsService {
  constructor(
    private readonly http: HttpClient,
    private sortService: SortService
  ) {}

  getAll(): Observable<string[]> {
    return this.http
      .get<{ tags: string[] }>("/tags")
      .pipe(map((data) => data.tags));
  }

  getSome(max: number): Observable<string[]> {
    return this.http
      .get<{ tags: string[] }>("/tags")
      .pipe(
        map((data) =>
          data.tags.sort(this.sortService.compareDesc).slice(0, max)
        )
      ); //,tap(data=>console.log(data)));
  }

  compare(a: string, b: string): number {
    if (a >= b) return -1;
    else return 1;
  }
}
