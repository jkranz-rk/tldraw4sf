public class MyObject {
    public String someProperty;

    public MyObject(){}
}

MyObject o = new MyObject();

o.someProperty = 'hello';

System.debug(JSON.serializePretty(o));

o = (MyObject) ((Map<String,Object)o.deserialize()).remove('someProperty');

System.debug(JSON.serializePretty(o));