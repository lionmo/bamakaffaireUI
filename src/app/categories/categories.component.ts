import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'vehicule',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/vehicule.svg'));
      iconRegistry.addSvgIcon(
        'clothes',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/clothes.svg'));
        iconRegistry.addSvgIcon(
          'sport',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/sport.svg'));
          iconRegistry.addSvgIcon(
            'art',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/art.svg'));
            iconRegistry.addSvgIcon(
              'immobilier',
              sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/immobilier.svg'));
              iconRegistry.addSvgIcon(
                'services',
                sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/services.svg'));
                iconRegistry.addSvgIcon(
                  'materiels',
                  sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/materiels.svg'));
                  iconRegistry.addSvgIcon(
                    'job',
                    sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/job.svg'));
                    iconRegistry.addSvgIcon(
                      'others',
                      sanitizer.bypassSecurityTrustResourceUrl('../../assets/SVG/others.svg'));

  }

  ngOnInit() {
  }

}
