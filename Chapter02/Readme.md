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
// Constructor injection
public class Car {
  private final CarRepository carRepository;

  public Car(CarRepository carRepository) {
    this.carRepository = carRepository;
  }
      
  // Fetch all cars from db 
  carRepository.findAll();
  ...
}

// Constructor to used for dependency injection
@Autowired  
public Car(CarRepository carRepository) {
  this.carRepository = carRepository;
}

// Setter injection
@Service
public class AppUserService {
    private AppUserRepository userRepository;

    @Autowired
    public void setAppUserRepository(AppUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Other methods that use userRepository
}

// Field injection
@Service
public class CarDatabaseService implements CarService {
	// Car database services
}

public class CarController {
  @Autowired
  private CarDatabaseService carDatabaseService;
  //...
}

```
