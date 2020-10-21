import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName='';
  // newContentName='';
  @ViewChild('serverContentInput',{static:true}) serverContentInput:ElementRef;
@Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
@Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput)
{
console.log(serverNameInput.value);
this.serverCreated.emit(
  {
serverName: serverNameInput,
serverContent: this.serverContentInput.nativeElement.value
  }
);
}


onAddBlueprint(serverNameInput)
{
  this.blueprintCreated.emit(
    {
  serverName:serverNameInput,
  serverContent:this.serverContentInput.nativeElement.value
    }
  );
}

}
