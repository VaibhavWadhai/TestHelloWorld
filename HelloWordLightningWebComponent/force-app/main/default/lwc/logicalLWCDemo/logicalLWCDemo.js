import { LightningElement, track , wire } from 'lwc';

import mapDemo from '@salesforce/apex/Utility.mapDemo';
import testName from '@salesforce/apex/Utility.testName';

export default class LogicalLWCDemo extends LightningElement {
    @track greeting = "Welcome Vaibhav !";
    @track message ;
    @track records ;
    @track error ;
    @track options ;
    @track maps ;
    
    @wire(testName)
    wiredData({error,data}){

        if(data) {
            this.records = data;
            this.error = undefined;
        }
        if(error) {
            this.error = error;
            this.records = undefined;
        }
    }

    handleClick(){

        mapDemo().then(result=>{
            const options = [];
            for(let key in result){
                if(key){
                    options.push({
                        key  : key,
                        value : result[key]
                    })
                }
            }
             /* eslint-disable no-console */
            console.log(options);
            this.maps = options ;
             /* eslint-disable no-console */
             console.log(this.maps);
        })
        .catch(error => {
            this.error = error ;
        });
    }
    
}