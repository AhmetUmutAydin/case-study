import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from '@shared/services/custom/loading.service';

@Component({
  selector: 'common-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  showSpinner = false;

  constructor(
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.loadingService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = status === 'start';
      this.cdRef.detectChanges();
    });
  }
}
