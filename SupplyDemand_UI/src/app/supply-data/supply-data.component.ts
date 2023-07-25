import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { SupplyDataServiceService } from '../supply-data-service.service';

@Component({
  selector: 'app-supply-data',
  templateUrl: './supply-data.component.html',
  styleUrls: ['./supply-data.component.css']
})
export class SupplyDataComponent implements OnInit {
  data: any[] = [];
  
  toppings = new FormControl('');
SelectedColumn:any[]=[];
  toppingList: string[] = [
    'source',
  'demandStatus',
  'teamRequestId',
  // 'positionId',
  // 'demandType',
  'jobName',
  'positionName',
  'client',
  'subSector',
  'accountGeoCity',
  'accountGeoName',
  'accountRegion',
  'additionalNotes',
  'agedPastDueYN',
  'ageing',
  'assignedTo',
  'backFillReason',
  'buOfAccount',
  'buOfSkill',
  'buspHandler',
  'candidateCount',
  'clientReference',
  'closestGeoHub',
  'countryOfDeliveryPrimary',
  'creationDate',
  'daysSincePastDue',
  'deliveryRole',
  'deliverySkills',
  'deliveryType',
  'demandFulfillmentStatus',
  // 'demandStatus',
  'demandType',
  'dmdCaseStatus',
  'durationInAgedPastStatus',
  'excludeOffshoreDcxID',
  'expectedDailyRate',
  'forecastType',
  'fte',
  'fulfillmentChannelFinal',
  'globalGrade',
  'globalPractice',
  'headCountType',
  'hubSpoke',
  'isClientInterviewRequired',
  'leadMarketAndPracticeAreaSame',
  'leadMarketArea',
  'leadPracticeArea',
  'leadtimeInDays',
  'localGrade',
  'locationDescription',
  'marketUnitBu',
  'microSector',
  'noOfSelfAppliedApplications',
  'outgoingEmployee',
  'positionId',
  // 'positionName',
  'practice',
  'primaryCity',
  'primaryGeoCity',
  'primaryGeoName',
  'primaryLocationName',
  'primaryRegion',
  'primaryState',
  'primaryZipCode',
  'productionUnit',
  'productionUnitName',
  'projectCode',
  'pspHandler',
  'recruiter',
  'recruitingId',
  'requestCreator',
  'requestUpdater',
  'requestedBy',
  'roleComment1',
  'roleEndDate',
  'roleNotes',
  'roleStartDate',
  'roleType',
  's2rCaseId',
  's2rId',
  's2rManaged',
  'sellingBu',
  ];

 

 

  displayedColumns: string[] =[
    'source',
    'demandStatus',
    'teamRequestId',
    // 'positionId',
    // 'demandType',
    'jobName',
    'positionName',
    'client',
    
  ];

  dataSource: MatTableDataSource<Form> = new MatTableDataSource<Form>();




  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  filterString = '';




  constructor(private SupplyDataService: SupplyDataServiceService) {}
  ngOnInit(): void {

    this.SupplyDataService.getAlldata().subscribe((successResponse)=>{
    
          this.data=successResponse;
    
          console.log(this.data);
    
          this.dataSource=new MatTableDataSource<any>(this.data);
          
    
          //window.location.reload();
    
    
    
    
          if(this.matPaginator){
    
            this.dataSource.paginator=this.matPaginator;
    
          }
    
        },
    
        (errorResponse)=>{
    
          console.log(errorResponse);
    
    
    
    
        }
    
        );
      }
      GetData(){
        this.displayedColumns=this.SelectedColumn;
        this.SupplyDataService.getAlldata().subscribe((successResponse)=>{
    
          this.data=successResponse;
    
          console.log(this.data);
    
          this.dataSource=new MatTableDataSource<any>(this.data);
          
    
          //window.location.reload();
    
    
    
    
          if(this.matPaginator){
    
            this.dataSource.paginator=this.matPaginator;
    
          }
    
        },
    
        (errorResponse)=>{
    
          console.log(errorResponse);
    
    
    
    
        }
    
        ); 
      }
}


