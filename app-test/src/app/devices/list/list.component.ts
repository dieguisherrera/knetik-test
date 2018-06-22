import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DevicesService } from '../devices.service';
import {Subscription} from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';

import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  @ViewChild('mainGrid') mainGrid: DxDataGridComponent;
  devicesSub: Subscription;
  devicesList: any = {};
  columns: string[] = [
    'location',
    'parent_location',
    'connected'
  ];
  filterText: string;
  selectedColumn: string;
  filterConnected: boolean;

  applyFilter: boolean;

  constructor(public devicesService: DevicesService) {
    this.filterText = '';
    this.selectedColumn = '';
    this.filterConnected = false;
    this.applyFilter = false;
  }

  ngOnInit() {
    this.devicesList.store = new CustomStore({
      load: (loadOptions) => {
        let params = '?';

        const skip: number = loadOptions.skip ? loadOptions.skip : 0;
        const take: number = loadOptions.take ? loadOptions.take : 5;
        const page: number = (skip / take) + 1;

        params += 'page=' + page;
        params += '&size=' + take || 5;

        if (loadOptions.sort) {
          params += '&order=' + loadOptions.sort[0].selector;
          if (loadOptions.sort[0].desc) {
            params += ':DESC';
          } else {
            params += ':ASC';
          }
        }

        if (loadOptions.filter) {
          console.log('filtro es ', loadOptions.filter);
          switch (loadOptions.filter[0]) {
            case 'connected':
              params += '&filter=connected:' + loadOptions.filter[2];
              break;
            case 'location':
              params += '&filter=location:' + loadOptions.filter[2];
              break;
            case 'parent_location':
              params += '&filter=parent_location:' + loadOptions.filter[2];
              break;
            default:
              break;
          }
        }

        console.log('params are', params);
        return this.devicesService.getDevices(params).
          then((devices) => {
            console.log('devices are', devices);
            return {
              data: devices.content,
              totalCount: devices.total_elements
            };
          });
      }
    });
  }

  ngOnDestroy() {
    this.devicesSub.unsubscribe();
  }

  filter(e) {
    e.preventDefault();
    console.log('conect', this.filterConnected);
    this.mainGrid.instance.clearFilter();
    let filterData;
    if (this.selectedColumn === 'connected') {
      filterData = this.filterConnected;
    } else {
      filterData = this.filterText;
    }
    this.mainGrid.instance.filter([this.selectedColumn, '=', filterData]);
  }

  refreshMainGrid() {
    this.mainGrid.instance.clearFilter();
    this.mainGrid.instance.clearSorting();
    this.mainGrid.instance.clearSelection();
    this.mainGrid.instance.refresh();
  }

  changeFilterConnected(e) {
    this.filterConnected = e.checked;
  }
}
