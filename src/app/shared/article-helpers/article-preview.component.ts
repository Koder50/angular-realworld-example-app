import { Component, Input } from "@angular/core";
import { Article } from "../../core/models/article.model";
import { ArticleMetaComponent } from "./article-meta.component";
import { FavoriteButtonComponent } from "../buttons/favorite-button.component";
import { RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";
import { SortService } from "src/app/core/services/sort.service";

@Component({
  selector: "app-article-preview",
  templateUrl: "./article-preview.component.html",
  imports: [ArticleMetaComponent, FavoriteButtonComponent, RouterLink, NgForOf],
  standalone: true,
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  constructor(public sortService: SortService) {}

  // ngAfterViewInit() {
  //   console.log(this.article);
  //   let
  // }

  toggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
}
