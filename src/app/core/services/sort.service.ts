import { Injectable } from "@angular/core";

@Injectable()
export class SortService {
  compareAsc(a: string, b: string): number {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a >= b) return 1;
    else return -1;
  }

  compareDesc(a: string, b: string): number {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a >= b) return -1;
    else return 1;
  }
}
