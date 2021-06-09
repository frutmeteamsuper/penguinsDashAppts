import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
	ChatboxComponent,
	HeaderComponent,
	DeznavComponent,
	NavheaderComponent,
	ApptsComponent,
	QuotsComponent,
	FooterComponent


	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'chatbox',component:ChatboxComponent},
	{path:'header',component:HeaderComponent},
	{path:'deznav',component:DeznavComponent},
	{path:'navheader',component:NavheaderComponent},
	{path:'footer',component:FooterComponent},
	{path:'appts',component:ApptsComponent},
	{path:'quots',component:QuotsComponent},

	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

