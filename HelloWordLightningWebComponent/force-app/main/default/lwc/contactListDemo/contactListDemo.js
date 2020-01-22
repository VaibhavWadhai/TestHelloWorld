import { LightningElement, track ,wire } from 'lwc';
import getContactList from '@salesforce/apex/contactAuraService.getContactList';

export default class ContactListDemo extends LightningElement {

    @track searchKey;
    @wire(getContactList) contacts;
    //Data - Error
    //contacts.data ;
    //contacts.error
    /* eslint-disable no-console */  
    console.log(this.contacts);
    

    handleChange(){
        
        //event.preventDefault();
        /* eslint-disable no-console */   
        console.log('Value'+this.contacts.data);
        console.log(this.contacts);
    }
}