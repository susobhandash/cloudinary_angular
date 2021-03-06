import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from './config';
import { AppComponent } from './app.component';
import { Cloudinary } from '@cloudinary/angular-5.x/src/cloudinary.service';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CloudinaryModule.forRoot(cloudinary, config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
