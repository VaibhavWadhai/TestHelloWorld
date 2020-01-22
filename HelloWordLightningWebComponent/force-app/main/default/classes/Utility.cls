public with sharing class Utility {
    public Utility() {

    }
    @AuraEnabled(cacheable=true)
    public static Map<String,Integer> mapDemo(){
        Map<String,Integer> testMap = new Map<String,Integer>();
        testMap.put('vwa',1);
        testMap.put('vwb',2);
        testMap.put('vwc',3);
        testMap.put('vwd',4);

    return testMap;
    }
    @AuraEnabled(cacheable=true)
    public static string testName(){
        return 'Test String';
    }
}
