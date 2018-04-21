import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
//importing routes modules
import {Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importing material modules
import { MatGridListModule } from '@angular/material/grid-list';

//Root Component
import { AppComponent } from './app.component';
//Stock Header Component
import { AppHeaderComponent } from './header/app-header.component';
//User Login Components
import { UserLoginComponent } from './features/user-login/user-login.component';
//Stock Profile Components
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { ProfileDetailsComponent } from './features/user-profile/profile-details/profile-details.component';
import { ProfileWatchlistComponent } from './features/user-profile/profile-watchlist/profile-watchlist.component';
import { ProfileAccountDetailsComponent } from './features/user-profile/profile-account-details/profile-account-details.component';
//Stock Research Component
import { stkResearchComponent } from './features/stkResearch/stkResearch.component';
import { stkAboutComponent } from './features/stkResearch/stkAbout/stkAbout.component';
import { stkChartsComponent } from './features/stkresearch/stkCharts/stkCharts.component';
import { stkStatsComponent } from './features/stkResearch/stkStats/stkStats.component';
import { stkSearchComponent } from './features/stkResearch/stkSearch/stkSearch.component';
import { ProfileGraphComponent } from './features/user-profile/profile-graph/profile-graph.component';
import { ProfileStocksComponent } from './features/user-profile/profile-stocks/profile-stocks.component';
import { StockManagementComponent } from './features/stock-management/stock-management.component';
import { WatchlistItemComponent } from './features/user-profile/profile-watchlist/watchlist-item/watchlist-item.component';
import { StocksListComponent } from './features/user-profile/profile-stocks/stocks-list/stocks-list.component';

const appRoutes:Routes = [
  {path:'', redirectTo: '/userLogin', pathMatch:'full'},
  {path:'userProfile',component:UserProfileComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'stockResearch',component:stkResearchComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    stkResearchComponent,
    stkAboutComponent,
    stkChartsComponent,
    stkStatsComponent,
    stkSearchComponent,
    UserProfileComponent,
    ProfileDetailsComponent,
    ProfileWatchlistComponent,
    ProfileAccountDetailsComponent,    
    UserLoginComponent,
    ProfileGraphComponent,
    ProfileStocksComponent,
    StockManagementComponent,
    WatchlistItemComponent,
    StocksListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
