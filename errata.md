# Errata

If you find any mistakes, then please raise an issue in this repository or email me at hinkula(at)gmail.com.

## Chapter 3 - `@Query` annotation (Page 46)
By default, you can use JPQL (Java Persistence Query Language). You can use JPQL to select entities from the database based on a certain condition (The book example is JPQL). If you want to use SQL, you have to set `nativeQuery` attribute value to `true`, as shown in the following example.

```
@Query(value = "SELECT * FROM USERS u WHERE id = 1", nativeQuery = true)
```

## Chapter 3 - Paging and Sorting repository (page 47) 
In Spring Boot 3, `PagingAndSortingRepository` extends `Repository`.

## Chapter 8 - Template literals (page 164)

There is type in the first code example which demonstrates use of +-operator. The correct code is the following:
```
let greeting = "Hello " + person.firstName + " " + person.lastName
```

## Chapter 11 - Useful Third-Party Components for React

js.coach site is not available anymore. You can use Awesome React Components https://github.com/brillout/awesome-react-components.

## Chapter 15 - Using Vitest (page 355) 
Vitest released version 1.0, which requires Vite version 5. ,You can solve this by installing Vitest version 0.36 that is compatible with Vite version 4. See the installation command below:":
```bash
npm install -D vitest@0.34.3 @testing-library/react @testing-library/jest-dom jsdom
```
