import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product";

@Pipe({
  name: "appFilter",
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], filterBrandText: string): Product[] {
    filterBrandText = filterBrandText
      ? filterBrandText.toLocaleLowerCase()
      : "";
    return filterBrandText
      ? value.filter(
          (p: Product) =>
            p.productName.toLocaleLowerCase().indexOf(filterBrandText) !== -1
        )
      : value;
  }
}
