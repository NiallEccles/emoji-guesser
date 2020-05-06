import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './routes/game/game.component';
import { SetComponent } from './routes/set/set.component';
import { TypeComponent } from './routes/type/type.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'game/:set',
    component: SetComponent,
  },
  {
    path: 'game/:set/:item',
    component: TypeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
