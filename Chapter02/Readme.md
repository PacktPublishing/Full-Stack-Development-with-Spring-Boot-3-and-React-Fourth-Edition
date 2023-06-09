```
public class Car { 
  private Owner owner; 

  public Car() { 
    owner = new Owner(); 
  } 
} 

public class Car { 
  private Owner owner; 

  public Car(Owner owner)  { 
    this.owner = owner; 
  } 
}
```

Setter injection
```
public class Car { 
  private Owner owner; 

  public void setOwner(Owner owner) { 
    this.owner = owner; 
  } 
} 
```

Spring Boot examples
```
public class Car { 
  @Autowired 
  private CarRepository carRepository; 

  // Fetch all cars from db  
  carRepositoty.findAll();  
}

@Configuration 

public class ConfigFileResource {
  @Bean(name="configFile") 
  public File configFile() { 
    File configFile = new File("configFile.xml"); 
    return configFile; 
  } 
}

// By bean name 
@Resource(name="configFile") 
private ConfigFile cFile 

OR 

// Without name 
@Resource 
private ConfigFile cFile
```