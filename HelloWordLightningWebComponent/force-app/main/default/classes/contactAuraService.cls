public with sharing class  contactAuraService {
    public contactAuraService() {

    }
    @AuraEnabled(cacheable = true)
    public static List<sObject> getContactList(String name){
        System.debug('********name'+name);
        name = 'Wad';
        String key = '%'+name+'%';
        String Query = 'Select id, Name, Email, Phone From Contact Where Name LIKE :key';
        System.debug('***Database.query(query)'+Database.query(query));
        return Database.query(query);
    }

    @AuraEnabled
    public static List<sObject> getAccountList(String name){
        String key = '%'+name+'%';
        String Query = 'Select id, Name, Indusry From Account Where Name LIKE :key';
        return Database.query(query);
    }
}
