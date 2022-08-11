using Internal;
using System;
using System.Xml.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Collections.Immutable;
public  abstract class BuilderService
{
     public abstract Resource FactoryMethod();

}
Console.WriteLine("Console app started");


Console.WriteLine("Press any key to exit...");
Console.ReadKey(true);



public abstract class Resource
{
    public Resource Resource { get; }
    
}
public class Wood:Resource
{
   
    
}
public class Mac:Resource
{
    
    
}
public class WoodBuilder:BuilderService
{
 public override Resource FactoryMethod()
        {
            return new Wood();
        }
}
public class  MacBuilder:BuilderService
{
    public override Resource FactoryMethod()
        {
            return new Mac();
        }
}