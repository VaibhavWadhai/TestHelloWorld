import { LightningElement, track, wire } from 'lwc';
import Name_Field from '@salesforce/schema/Account.Name';
import sObjectName from '@salesforce/schema/Account';
//import getConatctList from '@salesforce/schema/ContactController.contactList';
export default class HelloWorld extends LightningElement {
    @track greeting = 'Amit';
    @track name = Name_Field;
    @track objName = sObjectName;
    //@wire(getConatctList) contat;
    contacts = [
        {
            Id : '040120177',
            Name : 'Vw1',
            Title : 'CRM Head'
        },
        {
            Id : '040120177',
            Name : 'Vw2',
            Title : 'CRM Head'
        },
        {
            Id : '040120177',
            Name : 'Vw3',
            Title : 'CRM Head'
        },
    ];
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}