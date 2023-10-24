import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
@Injectable()
export class DiskService {
    constructor(private powerService : PowerService){}
    getDate(){
        console.log('20watt');
        this.powerService.supplyPower(20)
        return ('data')
    }
}
