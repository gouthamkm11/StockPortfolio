import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

//Root Component
import { AppComponent } from './app.component';
//Stock Header Component
import { AppHeaderComponent } from './header/app-header.component';
//Stock Research Component
import { stkResearchComponent } from './features/stkResearch/stkResearch.component';
import { stkAboutComponent } from './features/stkResearch/stkAbout/stkAbout.component';
import { stkChartsComponent } from './features/stkresearch/stkCharts/stkCharts.component';
import { stkStatsComponent } from './features/stkResearch/stkStats/stkStats.component';
import { stkSearchComponent } from './features/stkResearch/stkSearch/stkSearch.component';
//Stock Profile Components
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { ProfileDetailsComponent } from './features/user-profile/profile-details/profile-details.component';
import { ProfileWatchlistComponent } from './features/user-profile/profile-watchlist/profile-watchlist.component';
import { ProfileAccountDetailsComponent } from './features/user-profile/profile-account-details/profile-account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    stkResearchComponent,
    stkAboutComponent,
    stkChartsComponent,
    stkStatsComponent,
    stkSearchComponent,
    ProfileDetailsComponent,
    ProfileWatchlistComponent,
    ProfileAccountDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
