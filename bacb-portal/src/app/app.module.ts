import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { AccountPortalComponent } from './account-portal/account-portal.component';
import { ExamLandingComponent } from './exam/exam-landing/exam-landing.component';
import { ExamInstructionsComponent } from './exam/exam-instructions/exam-instructions.component';
import { PersonalContactInfoComponent } from './exam/personal-contact-info/personal-contact-info.component';
import { InfoReleaseComponent } from './exam/info-release/info-release.component';
import { PersonalProfessionalInfoComponent } from './exam/personal-professional-info/personal-professional-info.component';
import { NonProfessionalCredComponent } from './exam/non-professional-cred/non-professional-cred.component';
import { DegreeInfoComponent } from './exam/degree-info/degree-info.component';
import { CourseworkInfoComponent } from './exam/coursework-info/coursework-info.component';
import { ExperienceInfoComponent } from './exam/experience-info/experience-info.component';
import { AttestationsComponent } from './exam/attestations/attestations.component';
import { TermsComponent } from './exam/terms/terms.component'
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatCardModule, MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { AppSummaryComponent } from './exam/app-summary/app-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    RetrievePasswordComponent,
    AccountPortalComponent,
    ExamLandingComponent,
    ExamInstructionsComponent,
    PersonalContactInfoComponent,
    InfoReleaseComponent,
    PersonalProfessionalInfoComponent,
    NonProfessionalCredComponent,
    DegreeInfoComponent,
    CourseworkInfoComponent,
    ExperienceInfoComponent,
    AttestationsComponent,
    TermsComponent,
    RegisterUserComponent,
    ProfileSettingsComponent,
    AppSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'password',
        component: RetrievePasswordComponent
      },
      {
        path: 'account-portal',
        component: AccountPortalComponent
      },
      {
        path: 'exam-landing',
        component: ExamLandingComponent
      },
      {
        path: 'exam-instructions',
        component: ExamInstructionsComponent
      },
      {
        path: 'personal-contact-info',
        component: PersonalContactInfoComponent
      },
      {
        path: 'info-release',
        component: InfoReleaseComponent
      },
      {
        path: 'personal-professional-info',
        component: PersonalProfessionalInfoComponent
      },
      {
        path: 'non-professional-credentials',
        component: NonProfessionalCredComponent
      },
      {
        path: 'degree-info',
        component: DegreeInfoComponent
      },
      {
        path: 'coursework-info',
        component: CourseworkInfoComponent
      },
      {
        path: 'experience-info',
        component: ExperienceInfoComponent
      },
      {
        path: 'attestations',
        component: AttestationsComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'register-user',
        component: RegisterUserComponent
      },
      {
        path: 'profile-settings',
        component: ProfileSettingsComponent
      },
      {
        path: 'application-summary',
        component: AppSummaryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
