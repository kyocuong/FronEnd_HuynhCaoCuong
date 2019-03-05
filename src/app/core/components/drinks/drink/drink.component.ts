import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { OrderService } from '../../../../shared/order.service';
import { DrinkService } from '../../../../shared/drink.service';
import { NotificationService } from '../../../../shared/notification.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  constructor(private service: OrderService,
    public drinkService: DrinkService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<DrinkComponent>) { }



  ngOnInit() {
  }

  onClear() {
    this.drinkService.form.reset();
    this.drinkService.initializeFormGroup();
  }

  onSubmit() {
    if (this.drinkService.form.valid) {
      if (!this.drinkService.form.get('$key').value)
        this.drinkService.insertDrink(this.drinkService.form.value);
      else
      this.drinkService.updateDrink(this.drinkService.form.value);
      this.drinkService.form.reset();
      this.drinkService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.drinkService.form.reset();
    this.drinkService.initializeFormGroup();
    this.dialogRef.close();
  }

}
