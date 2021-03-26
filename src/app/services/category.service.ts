import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../models/category';
import {ProductService} from './product.service';
import {SearchService} from './search.service';

@Injectable()
export class CategoryService{

  categories : Category[];
  selectedCategory : Category = new Category("","");

  cat : string;
  value: string;

  constructor(private _product: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private _search: SearchService){
    this.categories = [
      new Category("plezierboot", "Pleziervaart (ook: recreatievaart) is het niet bedrijfsmatig of als beroep varen, maar als ontspanning. De term wordt gebruikt om de tegenstelling aan te geven met beroepsvaart. Het kan met alles waarmee iemand zich op het water kan voortbewegen, van waterscooter tot zeegaand jacht, roeiend, zeilend, hoe dan ook."),
      new Category("zeilboot", "Een zeilschip of zeilboot is een schip dat met behulp van zeilen wordt voortbewogen door windkracht. Ook (zeil)jachten behoren tot de zeilschepen. Zeilschepen waren in het verleden lange tijd het belangrijkste vervoermiddel voor het vervoer van goederen en personen over langere afstanden. Die rol is met de komst van stoom- en motorschepen in de 19e eeuw door deze overgenomen. Ook waren tot in de 19de eeuw de meeste oorlogsschepen zeilschepen. Tegenwoordig worden zeilschepen voornamelijk voor recreatieve doeleinden gebruikt."),
      new Category("motorboot", "Een motorboot is een mechanisch voortgedreven vaartuig dat wordt aangedreven door een motor, waarbij de voortstuwing als regel wordt verkregen door een onder water draaiende schroef."),
      new Category("sloep", "Een sloep is een klein scheepstype dat op het dek van een groter schip wordt meegevoerd en in uitvoeringen als de vissloep ook als onafhankelijk zeevaartuig in gebruik."),
      new Category("Catamaran", "Een catamaran is een vaartuig met twee drijvende delen (de rompen), die boven de waterlijn parallel aan elkaar gemonteerd zijn. Door deze constructie heeft een catamaran een grote aanvangsstabiliteit, terwijl hij een lage weerstand heeft, hetgeen resulteert in een grotere snelheid dan bij gewone vaartuigen. Het woord \"catamaran\" komt uit het Tamil: \"kattumaram\" dat \"bij elkaar gebonden bomen\" betekent. Al rond 1660 deed William Petty proeven met een catamaran."),
      new Category("roeiboten", "Een roeiboot is een boot die wordt voortbewogen door middel van roeiriemen of roeispanen. De beweging heet roeien en de persoon die ze uitvoert is een roeier. Omdat met roeien de maximale kracht wordt bereikt als men naar achteren roeit, kan de roeier tijdens het roeien zelf slecht zien waarheen hij roeit. Als er door een stuurman wordt gestuurd is dat geen probleem, maar anders moet hij om de paar slagen achterom kijken. Op sommige plaatsen wordt daarom vooruit geroeid, zoals met de pletna.")
    ]
  }

  selectCategory(cat:string){
    for(let category of this.categories){
      if (category.name === cat){
        this.selectedCategory = category
      }
    }
  }

  loadCategory(){
    if(this.cat === null){
      this._search.search = true;
      this._search.searchValue = this.value;
      this._product.searchProductsByKeyword(this.value);
    } else{
      this._search.search = false;
      this._product.selectCategory(this.cat);
      this.selectCategory(this.cat);
    }
  }

}

