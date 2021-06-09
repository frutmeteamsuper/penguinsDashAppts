import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appts',
  templateUrl: './appts.component.html',
  styleUrls: ['./appts.component.css']
})

export class ApptsComponent implements OnInit {

  constructor(
    public _uw:UserWService,
    private dataApi: DataApiService,
    private router: Router,
    private location: Location
    ) { }
 loadAPI = null;

  //   <script src="vendor/global/global.min.js"></script>
  // <script src="vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
  //   <script src="vendor/moment/moment.min.js"></script>

  //   <script src="vendor/fullcalendar/js/main.min.js"></script>
  //  <!--  <script src="./js/plugins-init/fullcalendar-init.js"></script> -->
  
  //   <script src="js/custom.min.js"></script>
  // <script src="js/deznav-init.js"></script>
  // <script src="js/demo.js"></script>
  //   <script src="js/styleSwitcher.js"></script>


    url="assets/assetsbit/vendor/global/global.min.js";
    url1="assets/assetsbit/vendor/fullcalendar/js/main.min.js";
    url2="assets/assetsbit/js/loader.js";
    url3="assets/assetsbit/js/custom.min.js";
  ngOnInit() {
        if (this._uw.loaded==true){
        this.loadAPI = new Promise(resolve => {
          this.loadScript();
          this.loadScript1();
          this.loadScript2();
          this.loadScript3();
    
          });
        }
      this._uw.loaded=true;
  }
    public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
    public loadScript1() {
      let node = document.createElement("script");
      node.src = this.url1;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
    public loadScript2() {
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
    public loadScript3() {
      let node = document.createElement("script");
      node.src = this.url3;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

}
