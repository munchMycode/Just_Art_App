import { NgModule } from '@angular/core';
import { NiceStatsPipe } from './nice-stats/nice-stats';
import { TimeAgoPipe } from './time-ago/time-ago';
@NgModule({
	declarations: [
	NiceStatsPipe,
	TimeAgoPipe
	],
	imports: [

	],
	exports: [
	NiceStatsPipe,
	TimeAgoPipe
	]
})
export class PipesModule {}
