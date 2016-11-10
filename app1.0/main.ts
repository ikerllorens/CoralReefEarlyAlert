import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module/app.module';
import { routing, appRoutingProviders } from './routes/routes';


platformBrowserDynamic().bootstrapModule(AppModule, []);
