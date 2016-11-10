import { Routes, RouterModule } from '@angular/router';

import { MainApp } from '../main-app.component/main-app.component';
import { LoginScreen } from '../login/login.component/login.component';
import { HomeScreen } from '../home/home.component/home.component'
import { ChatScreen } from '../chat/chat.component/chat.component'
import { ConversationsScreen} from '../chat/conversations.component/conversations.component'

const routes: Routes = [
  {path: 'home', component: HomeScreen, children: [
     { path: '', redirectTo: 'conversations', pathMatch: 'full' },
     { path: 'conversations', component: ConversationsScreen},
     { path: 'chat/:id', component: ChatScreen }
  ]},
  {path: '', component: LoginScreen}
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routes);
